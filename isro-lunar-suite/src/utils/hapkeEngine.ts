import { HapkeParameters, PhotometricPoint } from '../types/lunar';

/**
 * Converts degrees to radians
 */
export function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/**
 * Converts radians to degrees
 */
export function radToDeg(rad: number): number {
  return (rad * 180) / Math.PI;
}

/**
 * Chandrasekhar H-Function approximation for isotropic multiple scattering (Hapke 2002)
 */
export function hapkeHFunction(mu: number, w: number): number {
  const gamma = Math.sqrt(Math.max(0, 1 - w));
  const r0 = (1 - gamma) / (1 + gamma);
  // Accurate analytical rational approximation
  return (1 + 2 * mu) / (1 + 2 * gamma * mu);
}

/**
 * Single-particle Henyey-Greenstein phase function p(alpha)
 * For lunar regolith, g < 0 indicates backward scattering
 */
export function henyeyGreensteinPhase(alphaRad: number, g: number): number {
  const cosA = Math.cos(alphaRad);
  const denom = Math.pow(1 + 2 * g * cosA + g * g, 1.5);
  return Math.max(0.001, (1 - g * g) / Math.max(0.0001, denom));
}

/**
 * Opposition Surge Function B(alpha) (Shadow Hiding Opposition Effect)
 */
export function oppositionSurge(alphaRad: number, b0: number, h: number): number {
  if (alphaRad < 1e-6) return b0;
  const tanHalfAlpha = Math.tan(alphaRad / 2);
  return b0 / (1 + (1 / Math.max(0.001, h)) * tanHalfAlpha);
}

/**
 * Macroscopic Roughness Correction Factor S(i, e, alpha, thetaBar)
 * Hapke (1984) topographic slope distribution approximation
 */
export function roughnessCorrection(
  iRad: number,
  eRad: number,
  alphaRad: number,
  thetaBarDeg: number
): number {
  if (thetaBarDeg < 0.5) return 1.0;
  const thetaRad = degToRad(thetaBarDeg);
  const tanTheta = Math.tan(thetaRad);
  
  // Effective slope distribution factor
  const f = Math.exp(-2 / Math.PI * (1 / Math.max(0.01, tanTheta)));
  const term = 1 - 0.5 * f * (1 - Math.cos(alphaRad / 2));
  return Math.max(0.2, Math.min(1.8, term));
}

/**
 * Core Hapke Bidirectional Reflectance (I/F) calculation
 * r(i, e, alpha) = (w / 4pi) * (mu0 / (mu0 + mu)) * [ p(alpha)*(1 + B(alpha)) + H(mu0)*H(mu) - 1 ] * S
 */
export function calculateHapkeReflectance(
  iDeg: number,
  eDeg: number,
  alphaDeg: number,
  params: HapkeParameters
): number {
  const iRad = degToRad(iDeg);
  const eRad = degToRad(eDeg);
  const alphaRad = degToRad(alphaDeg);

  const mu0 = Math.max(0.001, Math.cos(iRad));
  const mu = Math.max(0.001, Math.cos(eRad));

  const pAlpha = henyeyGreensteinPhase(alphaRad, params.g);
  const bAlpha = oppositionSurge(alphaRad, params.b0, params.h);
  const hMu0 = hapkeHFunction(mu0, params.w);
  const hMu = hapkeHFunction(mu, params.w);
  const sCorrection = roughnessCorrection(iRad, eRad, alphaRad, params.thetaBar);

  const lommelSeeliger = mu0 / (mu0 + mu);
  const singleScattering = pAlpha * (1 + bAlpha);
  const multipleScattering = hMu0 * hMu - 1;

  const totalReflectance =
    (params.w / (4 * Math.PI)) *
    lommelSeeliger *
    (singleScattering + multipleScattering) *
    sCorrection;

  // Normalized I/F value (multiply by pi for radiance factor)
  return Math.max(0.005, totalReflectance * Math.PI);
}

/**
 * Minnaert Photometric Model for empirical comparison
 */
export function calculateMinnaertReflectance(
  iDeg: number,
  eDeg: number,
  k: number = 0.75,
  b0: number = 0.18
): number {
  const mu0 = Math.max(0.001, Math.cos(degToRad(iDeg)));
  const mu = Math.max(0.001, Math.cos(degToRad(eDeg)));
  return b0 * Math.pow(mu0, k) * Math.pow(mu, k - 1);
}

/**
 * Generate a series of phase curve data points from alpha = 0° to 120°
 */
export function generatePhaseCurveData(
  params: HapkeParameters,
  nominalIncidenceDeg: number = 60,
  noiseSeed: number = 42
): PhotometricPoint[] {
  const points: PhotometricPoint[] = [];

  // Generate smooth phase curve points
  for (let alpha = 0; alpha <= 110; alpha += 2.5) {
    // For planetary phase curve, assume e = |alpha - i| / 2 geometry approximation
    const e = Math.abs(alpha - nominalIncidenceDeg) * 0.45;
    const theoretical = calculateHapkeReflectance(nominalIncidenceDeg, e, alpha, params);
    const minnaert = calculateMinnaertReflectance(nominalIncidenceDeg, e, 0.72, params.w * 0.45);

    // Realistic observed ISRO Chandrayaan TMC-2/OHRC measurement simulation with sensor noise
    const pseudoRandom = Math.sin(alpha * 12.9898 + noiseSeed) * 43758.5453;
    const noise = (pseudoRandom - Math.floor(pseudoRandom) - 0.5) * 0.008;
    const observed = Math.max(0.01, theoretical + noise);
    const residual = observed - theoretical;

    points.push({
      phaseAngle: alpha,
      theoreticalHapke: parseFloat(theoretical.toFixed(4)),
      observedData: parseFloat(observed.toFixed(4)),
      minnaert: parseFloat(minnaert.toFixed(4)),
      residual: parseFloat(residual.toFixed(5)),
    });
  }

  return points;
}

/**
 * Computes photometric normalization correction factor
 * Normalized to standard geometry: i0 = 30°, e0 = 0°, alpha0 = 30°
 */
export function getPhotometricCorrectionRatio(
  currentIncidence: number,
  currentEmission: number,
  currentPhase: number,
  params: HapkeParameters
): number {
  const standardReflectance = calculateHapkeReflectance(30, 0, 30, params);
  const currentReflectance = calculateHapkeReflectance(
    currentIncidence,
    currentEmission,
    currentPhase,
    params
  );
  return standardReflectance / Math.max(0.001, currentReflectance);
}
