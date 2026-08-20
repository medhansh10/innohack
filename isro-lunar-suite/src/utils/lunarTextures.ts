/**
 * Procedural Lunar Surface, Sensor Noise, DEM Relief, and False-Color Spectral Map Generator
 */

import { FilterMode, HapkeParameters } from '../types/lunar';

interface Crater {
  x: number;
  y: number;
  r: number;
  depth: number;
  hasCentralPeak?: boolean;
}

// Generate deterministic craters for a preset
function getCratersForSeed(seed: string): Crater[] {
  if (seed.includes('SHIV_SHAKTI') || seed.includes('SP')) {
    return [
      { x: 380, y: 320, r: 180, depth: 0.85, hasCentralPeak: false }, // Manzinus C
      { x: 740, y: 560, r: 140, depth: 0.9, hasCentralPeak: false },  // Simpelius
      { x: 220, y: 680, r: 85, depth: 0.65 },
      { x: 580, y: 220, r: 60, depth: 0.5 },
      { x: 860, y: 240, r: 45, depth: 0.45 },
      { x: 480, y: 490, r: 35, depth: 0.4 },
      { x: 310, y: 460, r: 22, depth: 0.35 },
      { x: 620, y: 720, r: 30, depth: 0.38 },
      { x: 150, y: 200, r: 50, depth: 0.5 },
    ];
  } else if (seed.includes('ARISTARCHUS')) {
    return [
      { x: 500, y: 450, r: 260, depth: 0.95, hasCentralPeak: true }, // Aristarchus
      { x: 820, y: 280, r: 110, depth: 0.7 },
      { x: 250, y: 300, r: 90, depth: 0.6 },
      { x: 700, y: 720, r: 70, depth: 0.5 },
      { x: 360, y: 700, r: 40, depth: 0.4 },
    ];
  } else if (seed.includes('SHACKLETON')) {
    return [
      { x: 512, y: 512, r: 320, depth: 1.0, hasCentralPeak: false }, // Deep Shackleton PSR
      { x: 200, y: 200, r: 90, depth: 0.6 },
      { x: 800, y: 800, r: 100, depth: 0.65 },
      { x: 250, y: 780, r: 75, depth: 0.5 },
    ];
  } else {
    // Tycho & default
    return [
      { x: 512, y: 480, r: 220, depth: 0.95, hasCentralPeak: true },
      { x: 240, y: 240, r: 70, depth: 0.55 },
      { x: 780, y: 320, r: 80, depth: 0.6 },
      { x: 300, y: 750, r: 65, depth: 0.5 },
      { x: 720, y: 700, r: 90, depth: 0.65 },
    ];
  }
}

/**
 * Renders raw sensor uncalibrated noisy canvas (Left side)
 */
export function drawRawSensorView(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  datasetId: string
) {
  const craters = getCratersForSeed(datasetId);
  const imgData = ctx.createImageData(width, height);
  const data = imgData.data;

  // Base raw sensor parameters: Low contrast, photon shot noise, fixed pattern column stripes
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;

      // Base illumination from craters
      let elevation = 0.5;
      for (const c of craters) {
        const dx = (x / width) * 1024 - c.x;
        const dy = (y / height) * 1024 - c.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < c.r) {
          const normDist = dist / c.r;
          // Crater bowl
          const bowl = Math.sin(normDist * Math.PI * 0.5) * c.depth;
          // Crater rim
          const rim = Math.exp(-Math.pow((dist - c.r * 0.95) / (c.r * 0.15), 2)) * 0.35;
          elevation += rim - (1 - bowl) * 0.4;
          if (c.hasCentralPeak && dist < c.r * 0.22) {
            elevation += Math.cos((dist / (c.r * 0.22)) * Math.PI * 0.5) * 0.4;
          }
        }
      }

      // Low solar incidence hillshade (raw low contrast)
      const sunAngle = Math.PI * 0.35;
      const shade = 0.45 + (elevation - 0.5) * Math.cos(sunAngle) * 0.4;

      // Compress dynamic range (raw uncalibrated DN)
      let val = Math.floor(Math.max(0, Math.min(255, shade * 110 + 25)));

      // Add detector sensor noise & column FPN
      const colNoise = Math.sin(x * 0.9) * 4;
      const shotNoise = (Math.random() - 0.5) * 22;
      val = Math.max(5, Math.min(250, val + colNoise + shotNoise));

      // Uncalibrated raw greenish-slate sensor tint
      data[idx] = val * 0.92;      // R
      data[idx + 1] = val * 0.98;  // G
      data[idx + 2] = val * 0.94;  // B
      data[idx + 3] = 255;         // A
    }
  }

  ctx.putImageData(imgData, 0, 0);

  // Overlay detector grid markings and bad pixel lines
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
  ctx.lineWidth = 1;
  for (let gx = 64; gx < width; gx += 64) {
    ctx.beginPath();
    ctx.moveTo(gx, 0);
    ctx.lineTo(gx, height);
    ctx.stroke();
  }
  for (let gy = 64; gy < height; gy += 64) {
    ctx.beginPath();
    ctx.moveTo(0, gy);
    ctx.lineTo(width, gy);
    ctx.stroke();
  }
}

/**
 * Renders calibrated super-resolved Hapke-corrected surface (Right side)
 */
export function drawEnhancedSurfaceView(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  datasetId: string,
  filter: FilterMode,
  hapke: HapkeParameters,
  normRatio: number = 1.0
) {
  const craters = getCratersForSeed(datasetId);
  const imgData = ctx.createImageData(width, height);
  const data = imgData.data;

  // Scale Hapke parameters influence
  const albedoBoost = hapke.w / 0.342;
  const roughContrast = 1 + (hapke.thetaBar - 20) * 0.015;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const wx = (x / width) * 1024;
      const wy = (y / height) * 1024;

      let elevation = 0.5;
      let slopeX = 0;
      let slopeY = 0;
      let isRimArea = false;
      let minDistanceToCenter = 9999;

      for (const c of craters) {
        const dx = wx - c.x;
        const dy = wy - c.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        minDistanceToCenter = Math.min(minDistanceToCenter, dist);

        if (dist < c.r * 1.5) {
          const normDist = dist / c.r;
          if (normDist < 1.0) {
            const bowl = Math.sin(normDist * Math.PI * 0.5) * c.depth;
            const rim = Math.exp(-Math.pow((dist - c.r * 0.95) / (c.r * 0.15), 2)) * 0.45;
            elevation += rim - (1 - bowl) * 0.5;

            // Compute slopes for high-res hillshade
            const factor = Math.cos(normDist * Math.PI * 0.5) * c.depth;
            slopeX += (dx / Math.max(1, dist)) * factor;
            slopeY += (dy / Math.max(1, dist)) * factor;
            if (normDist > 0.85) isRimArea = true;

            if (c.hasCentralPeak && dist < c.r * 0.22) {
              const peakFactor = Math.cos((dist / (c.r * 0.22)) * Math.PI * 0.5);
              elevation += peakFactor * 0.4;
              slopeX -= (dx / Math.max(1, dist)) * peakFactor * 0.8;
              slopeY -= (dy / Math.max(1, dist)) * peakFactor * 0.8;
            }
          } else {
            // Ejecta blanket rays
            const rayAngle = Math.atan2(dy, dx);
            const rayPattern = Math.pow(Math.cos(rayAngle * 8), 4) * Math.exp(-((dist - c.r) / c.r));
            elevation += rayPattern * 0.12;
          }
        }
      }

      // Micro-texture regolith detail (4x Super-Resolution sub-pixel detail)
      const microDetail =
        (Math.sin(wx * 0.2) * Math.cos(wy * 0.2) * 0.04) +
        (Math.sin(wx * 0.8) * Math.cos(wy * 0.8) * 0.02);

      // Light vector (Sun azimuth 124°, elevation 25°)
      const lx = 0.58;
      const ly = -0.42;
      const lz = 0.70;

      // Normal vector
      const nx = -slopeX * 1.5;
      const ny = -slopeY * 1.5;
      const nz = 1.0;
      const nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
      const dot = (nx * lx + ny * ly + nz * lz) / nLen;

      // Photometrically corrected calibrated reflectance (I/F)
      let ifReflectance = Math.max(0.015, dot * 0.22 * albedoBoost * normRatio + microDetail);
      ifReflectance = Math.pow(ifReflectance, 1 / 1.4) * roughContrast; // Gamma correction

      let r = 0, g = 0, b = 0;

      if (filter === 'REGOLITH_MONO') {
        // High dynamic range Crisp Lunar Monochromatic Regolith
        const luma = Math.floor(Math.max(10, Math.min(250, ifReflectance * 255)));
        r = luma;
        g = Math.floor(luma * 0.98); // Crisp silver-white
        b = Math.floor(luma * 1.02);
      } else if (filter === 'IIRS_FALSE_COLOR') {
        // Hyperspectral 2.9µm Absorption diagnostic (Viridis/Plasma palette)
        // High absorption = cold blue/purple; sunlit soil = yellow/green
        const t = Math.max(0, Math.min(1, ifReflectance * 1.4));
        if (isRimArea && (datasetId.includes('SHACKLETON') || datasetId.includes('SP'))) {
          // Strong Water-Ice / OH absorption signature (Electric Cyan / Saffron)
          r = Math.floor(30 + t * 40);
          g = Math.floor(180 + t * 75);
          b = Math.floor(220 + t * 35);
        } else {
          // Viridis scale: Deep violet -> Teal -> Green -> Yellow
          r = Math.floor(255 * Math.sin(t * Math.PI * 0.8));
          g = Math.floor(255 * Math.sin(t * Math.PI * 0.95));
          b = Math.floor(255 * Math.cos(t * Math.PI * 0.5));
        }
      } else if (filter === 'TOPO_SHADOW') {
        // Topographic DEM Normal Relief Map
        r = Math.floor(Math.max(0, Math.min(255, (nx / nLen * 0.5 + 0.5) * 255)));
        g = Math.floor(Math.max(0, Math.min(255, (ny / nLen * 0.5 + 0.5) * 255)));
        b = Math.floor(Math.max(0, Math.min(255, (nz / nLen) * 255)));
      } else if (filter === 'ALBEDO_RATIO') {
        // Hapke Single Scattering Albedo (w) Contrast Ratio
        const ratio = (ifReflectance / Math.max(0.01, hapke.w)) * 1.2;
        r = Math.floor(Math.max(0, Math.min(255, ratio * 200)));
        g = Math.floor(Math.max(0, Math.min(255, ratio * 160)));
        b = Math.floor(Math.max(0, Math.min(255, 255 - ratio * 120)));
      }

      data[idx] = Math.max(0, Math.min(255, r));
      data[idx + 1] = Math.max(0, Math.min(255, g));
      data[idx + 2] = Math.max(0, Math.min(255, b));
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);

  // Subtle super-resolution sharpening overlay
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
  ctx.lineWidth = 1;
}
