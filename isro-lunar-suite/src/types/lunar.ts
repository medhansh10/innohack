export type AppState = 'PRE_FLIGHT' | 'PROCESSING' | 'DASHBOARD';

export type FilterMode = 'REGOLITH_MONO' | 'IIRS_FALSE_COLOR' | 'TOPO_SHADOW' | 'ALBEDO_RATIO';

export interface HapkeParameters {
  w: number;         // Single Scattering Albedo (0.05 - 0.85)
  thetaBar: number;  // Macroscopic Roughness in degrees (0° - 45°)
  g: number;         // Asymmetry Parameter / Henyey-Greenstein (-0.8 - 0.5)
  b0: number;        // Opposition Surge Amplitude (0.0 - 3.0)
  h: number;         // Opposition Surge Angular Width (0.01 - 0.20)
}

export interface GeometryData {
  incidenceDeg: number;  // i (degrees)
  emissionDeg: number;   // e (degrees)
  phaseDeg: number;      // alpha (degrees)
  solarAzimuthDeg: number;
  spacecraftAltitudeKm: number;
  groundSamplingDistanceM: number;
  solarElevationDeg: number;
}

export interface LunarDataset {
  id: string;
  mission: string;
  instrument: string;
  productUri: string;
  targetFeature: string;
  targetCoordinates: {
    lat: number;
    lon: number;
    latStr: string;
    lonStr: string;
  };
  footprintPolygon: Array<[number, number]>; // [lat, lon] array
  acquisitionTimeUtc: string;
  geometry: GeometryData;
  initialHapke: HapkeParameters;
  currentHapke: HapkeParameters;
  rawPreviewUrl?: string;
  enhancedPreviewUrl?: string;
  pds4XmlLabel: string;
  signalToNoiseRatioDb: number;
  subSolarPoint: { lat: number; lon: number };
  subSpacecraftPoint: { lat: number; lon: number };
  waterIceAbsorptionIndex?: number;
  meanReflectance: number;
  spectralBands: string[];
}

export interface PhotometricPoint {
  phaseAngle: number;
  theoreticalHapke: number;
  observedData: number;
  minnaert: number;
  residual: number;
}

export interface ProbeReading {
  pixelX: number;
  pixelY: number;
  normalizedLat: number;
  normalizedLon: number;
  reflectanceIF: number;
  roughnessEstDeg: number;
  albedoFactor: number;
  mineralSignature: string;
  isSunlit: boolean;
  snrEst: number;
}

export interface TelemetryLog {
  id: string;
  timestamp: string;
  level: 'INFO' | 'CALIB' | 'SPICE' | 'HAPKE' | 'OPT' | 'RENDER' | 'SUCCESS';
  message: string;
}
