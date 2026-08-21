import React, { useState } from 'react';
import {
  HapkeAnalysis,
  getOutputUrl
} from '../../api/enhancementApi';
import {
  Download,
  Maximize2,
  FileCheck,
  Compass,
  Layers,
  Sparkles,
  Palette,
  Info,
  ShieldAlert,
  ShieldCheck,
  Activity
} from 'lucide-react';

interface HapkeAnalysisSectionProps {
  analysis?: HapkeAnalysis | null;
}

type PhotoTab = 'ALL' | 'HEATMAP' | 'OVERLAY' | 'MASK';

export const HapkeAnalysisSection: React.FC<HapkeAnalysisSectionProps> = ({ analysis }) => {
  const [photoTab, setPhotoTab] = useState<PhotoTab>('ALL');
  const [selectedModalImg, setSelectedModalImg] = useState<{ url: string; title: string } | null>(null);

  if (!analysis) {
    return (
      <div className="w-full p-8 rounded-lg bg-[#0c0c0e] border border-white/[0.08] text-center text-zinc-500 font-mono text-xs">
        Hapke photometric telemetry is initializing...
      </div>
    );
  }

  const heatmapUrl = analysis.images?.confidence_heatmap
    ? getOutputUrl(analysis.images.confidence_heatmap)
    : undefined;
  const overlayUrl = analysis.images?.confidence_overlay
    ? getOutputUrl(analysis.images.confidence_overlay)
    : undefined;
  const maskUrl = analysis.images?.shadow_mask
    ? getOutputUrl(analysis.images.shadow_mask)
    : undefined;

  const downloadImage = (url?: string, filename = 'hapke_map.png') => {
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const illuminatedPct = analysis.reliability_stats.illuminated_area_pct;
  const penumbraPct = analysis.reliability_stats.penumbra_area_pct;
  const shadowPct = analysis.reliability_stats.deep_shadow_area_pct;
  const meanConfPct = analysis.reliability_stats.mean_pixel_confidence_pct;

  return (
    <div className="w-full rounded-lg bg-[#0c0c0e] border border-white/[0.08] overflow-hidden p-6 sm:p-8 space-y-8">
      
      {/* 1. Header & Quality Index */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-white/[0.04] border border-white/[0.08] text-zinc-400 font-mono text-[11px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              PDS4 Photometric QA Audit
            </span>
            <span className="text-zinc-600 font-mono text-xs">|</span>
            <span className="text-zinc-500 font-mono text-xs">Hapke IMSA Ref. Model</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-medium text-zinc-100 tracking-tight">
            Photometric Calibration & Scientific Reliability Report
          </h3>
          <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed">
            Physical validation of Real-ESRGAN super-resolution against Chandrayaan-2 lunar surface reflectance geometry, shadow thresholds, and photometric colorimetry.
          </p>
        </div>

        {/* Global Confidence Metric */}
        <div className="flex items-center gap-4 px-5 py-3 rounded-md bg-[#141417] border border-white/[0.08] shrink-0">
          <div className="text-right">
            <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Confidence Index</div>
            <div className="text-2xl font-mono font-medium text-zinc-100">
              {meanConfPct}%
            </div>
          </div>
          <div className="h-8 w-[1px] bg-white/[0.08]" />
          <div className="text-left font-mono text-[11px] leading-tight text-zinc-400">
            <div>PHYSICALLY</div>
            <div className="text-emerald-400 font-semibold">VERIFIED</div>
          </div>
        </div>
      </div>

      {/* 2. Structured Reliability Breakdown Table with Color Codes */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-zinc-400" />
            <span>Surface Illumination Regimes & Feature Validity</span>
          </span>
          <span className="text-zinc-500 font-mono text-[11px]">3 Classified Regimes</span>
        </div>

        <div className="border border-white/[0.08] rounded-md overflow-hidden bg-[#09090b]">
          <div className="grid grid-cols-12 px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.08] font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
            <div className="col-span-4 sm:col-span-3">Terrain Regime</div>
            <div className="col-span-2 text-right pr-4">Coverage</div>
            <div className="col-span-3 hidden sm:block">Color Encoding</div>
            <div className="col-span-6 sm:col-span-4">Scientific Verdict</div>
          </div>

          {/* Row 1: Sunlit */}
          <div className="grid grid-cols-12 items-center px-4 py-3.5 border-b border-white/[0.05] hover:bg-white/[0.01] transition-colors text-xs">
            <div className="col-span-4 sm:col-span-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] shrink-0" />
              <span className="font-medium text-zinc-200">Sunlit Crater Rims</span>
            </div>
            <div className="col-span-2 text-right pr-4 font-mono font-medium text-emerald-400">
              {illuminatedPct}%
            </div>
            <div className="col-span-3 hidden sm:flex items-center gap-2 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>#10B981 · High Flux</span>
              </span>
            </div>
            <div className="col-span-6 sm:col-span-4 text-zinc-300 text-[11px] leading-relaxed">
              <strong className="text-emerald-400 font-medium">Authentic Geology:</strong> Ridge crests, boulders, and ejecta rims are certified physical ground truth.
            </div>
          </div>

          {/* Row 2: Penumbra */}
          <div className="grid grid-cols-12 items-center px-4 py-3.5 border-b border-white/[0.05] hover:bg-white/[0.01] transition-colors text-xs">
            <div className="col-span-4 sm:col-span-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)] shrink-0" />
              <span className="font-medium text-zinc-300">Penumbra Slopes</span>
            </div>
            <div className="col-span-2 text-right pr-4 font-mono font-medium text-amber-400">
              {penumbraPct}%
            </div>
            <div className="col-span-3 hidden sm:flex items-center gap-2 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>#F59E0B · Grazing</span>
              </span>
            </div>
            <div className="col-span-6 sm:col-span-4 text-zinc-400 text-[11px] leading-relaxed">
              <strong className="text-amber-400 font-medium">Topographic Slopes:</strong> Macro-slope contours are reliable; verify sub-meter textures before measurement.
            </div>
          </div>

          {/* Row 3: Deep Shadow */}
          <div className="grid grid-cols-12 items-center px-4 py-3.5 hover:bg-white/[0.01] transition-colors text-xs">
            <div className="col-span-4 sm:col-span-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)] shrink-0" />
              <span className="font-medium text-zinc-400">Deep Shadow Floors</span>
            </div>
            <div className="col-span-2 text-right pr-4 font-mono font-medium text-rose-400">
              {shadowPct}%
            </div>
            <div className="col-span-3 hidden sm:flex items-center gap-2 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-950/60 border border-rose-500/30 text-rose-300">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <span>#F43F5E · DN &lt; 20</span>
              </span>
            </div>
            <div className="col-span-6 sm:col-span-4 text-zinc-400 text-[11px] leading-relaxed">
              <strong className="text-rose-400 font-medium">Hallucination Hazard:</strong> Zero optical signal. AI details inside deep shadow are flagged noise artifacts.
            </div>
          </div>
        </div>
      </div>

      {/* 3. Scientific Radiometric Color Scale Legend Bar */}
      <div className="rounded-md bg-[#121215] border border-white/[0.08] p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-zinc-400" />
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Hapke Radiometric Colorimetric Spectrum & Classification Scale
            </h4>
          </div>
          <span className="text-[10px] font-mono text-zinc-500">
            TURBO / PHYSICAL PHOTON FLUX MAPPING
          </span>
        </div>

        {/* Continuous Colormap Gradient Bar */}
        <div className="space-y-2 pt-1">
          <div className="relative h-4 rounded-full overflow-hidden bg-black border border-white/10 shadow-inner">
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, #30123b 0%, #28bbec 25%, #a2fc3c 50%, #fb8022 75%, #7a0403 100%)'
              }}
            />
          </div>

          {/* Scale Intervals & Hex Labels */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-mono">
            <div className="p-2 rounded bg-black/40 border border-white/[0.04] space-y-1">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-[#30123b] border border-white/30" />
                <span className="font-semibold text-zinc-200">0.00 – 0.20</span>
              </div>
              <div className="text-[10px] text-rose-300">#30123B · Deep Shadow</div>
              <div className="text-[9px] text-zinc-500">Photon-starved (Artifact Hazard)</div>
            </div>

            <div className="p-2 rounded bg-black/40 border border-white/[0.04] space-y-1">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-[#28bbec] border border-white/30" />
                <span className="font-semibold text-zinc-200">0.20 – 0.50</span>
              </div>
              <div className="text-[10px] text-sky-300">#28BBEC · Penumbra</div>
              <div className="text-[9px] text-zinc-500">Grazing slope transition</div>
            </div>

            <div className="p-2 rounded bg-black/40 border border-white/[0.04] space-y-1">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-[#a2fc3c] border border-white/30" />
                <span className="font-semibold text-zinc-200">0.50 – 0.75</span>
              </div>
              <div className="text-[10px] text-lime-300">#A2FC3C · Valid Terrain</div>
              <div className="text-[9px] text-zinc-500">High topographic fidelity</div>
            </div>

            <div className="p-2 rounded bg-black/40 border border-white/[0.04] space-y-1">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-[#fb8022] border border-white/30" />
                <span className="font-semibold text-zinc-200">0.75 – 1.00</span>
              </div>
              <div className="text-[10px] text-amber-300">#FB8022 · Sunlit Crests</div>
              <div className="text-[9px] text-zinc-500">Certified Ground Truth Albedo</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Scientific Executive Briefing Document Box */}
      <div className="rounded-md bg-[#121215] border border-white/[0.08] p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-zinc-400" />
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Executive Scientific Briefing · Physical Reality vs. AI Hallucination
            </h4>
          </div>
          <span className="text-[10px] font-mono text-zinc-500">
            REF: CH2-LUNAR-HAPKE-IMSA-QA
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-zinc-300 leading-relaxed font-sans">
          <div className="space-y-2">
            <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <span>01. Illumination & Sensor Regime</span>
            </div>
            <p>
              This Chandrayaan-2 swath captures lunar surface terrain imaged under extreme grazing sunlight, where the Sun sits just <span className="font-mono text-zinc-100 font-medium">{analysis.geometry.sun_elevation_deg}°</span> above the lunar horizon (Solar Incidence: <span className="font-mono text-zinc-100 font-medium">{analysis.geometry.incidence_angle_deg}°</span>). Under these illumination physics, our Hapke photometric model calculates a theoretical surface reflectance of only <span className="font-mono text-zinc-100 font-medium">{analysis.theoretical_reflectance_if} I/F</span>—confirming the optical camera operated in an extreme photon-starved regime.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <span>02. AI Hallucination Guardrail</span>
            </div>
            <p>
              While Real-ESRGAN super-resolves and sharpens sunlit crater rims (<span className="font-mono text-zinc-100 font-medium">{illuminatedPct}%</span> of the scene) with sub-pixel structural fidelity, generative models naturally attempt to invent fine textures inside pitch-black shadows (<span className="font-mono text-zinc-100 font-medium">{shadowPct}%</span>) where the sensor recorded zero optical signal. By validating against Hapke physics, our system certifies genuine crater topography while active-flagging shadow noise to protect scientific measurement integrity.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Confidence Maps & Photographic Evidence */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h4 className="text-sm font-medium text-zinc-100">
              Photometric Confidence Maps
            </h4>
            <p className="text-xs text-zinc-500 font-mono">
              Pixel-by-pixel radiometric validation layers
            </p>
          </div>

          {/* Photo Tab Selector */}
          <div className="flex items-center gap-1 p-1 bg-[#141417] rounded-md border border-white/[0.08] text-xs">
            <button
              onClick={() => setPhotoTab('ALL')}
              className={`px-3 py-1 rounded-sm font-mono text-[11px] transition-all ${
                photoTab === 'ALL'
                  ? 'bg-zinc-100 text-zinc-950 font-medium shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All 3 Maps
            </button>
            <button
              onClick={() => setPhotoTab('HEATMAP')}
              className={`px-3 py-1 rounded-sm font-mono text-[11px] transition-all ${
                photoTab === 'HEATMAP'
                  ? 'bg-zinc-100 text-zinc-950 font-medium shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Heatmap
            </button>
            <button
              onClick={() => setPhotoTab('OVERLAY')}
              className={`px-3 py-1 rounded-sm font-mono text-[11px] transition-all ${
                photoTab === 'OVERLAY'
                  ? 'bg-zinc-100 text-zinc-950 font-medium shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Physical Overlay
            </button>
            <button
              onClick={() => setPhotoTab('MASK')}
              className={`px-3 py-1 rounded-sm font-mono text-[11px] transition-all ${
                photoTab === 'MASK'
                  ? 'bg-zinc-100 text-zinc-950 font-medium shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Shadow Mask
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-4 ${photoTab === 'ALL' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 max-w-2xl mx-auto'}`}>
          {/* 1. Confidence Heatmap */}
          {(photoTab === 'ALL' || photoTab === 'HEATMAP') && heatmapUrl && (
            <div className="flex flex-col rounded-md overflow-hidden bg-[#09090b] border border-white/[0.08] group">
              <div className="relative aspect-square bg-black overflow-hidden">
                <img
                  src={heatmapUrl}
                  alt="Hapke Confidence Heatmap"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-sm bg-black/80 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-zinc-300">
                  Confidence Heatmap
                </div>
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setSelectedModalImg({ url: heatmapUrl, title: 'Hapke Radiometric Confidence Heatmap' })}
                    className="p-1.5 rounded-sm bg-black/80 border border-white/20 text-zinc-300 hover:text-white"
                    title="Fullscreen View"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => downloadImage(heatmapUrl, 'confidence_heatmap.png')}
                    className="p-1.5 rounded-sm bg-black/80 border border-white/20 text-zinc-300 hover:text-white"
                    title="Download Map"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="p-3.5 bg-[#121215] border-t border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-200">Color Spectrum</span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-[#30123b]" />
                    <span>0.00</span>
                    <span>→</span>
                    <span className="w-2 h-2 rounded-full bg-[#fb8022]" />
                    <span>1.00</span>
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'linear-gradient(90deg, #30123b, #28bbec, #a2fc3c, #fb8022)' }} />
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Continuous per-pixel radiometric score evaluated against Hapke incidence models.
                </p>
              </div>
            </div>
          )}

          {/* 2. Physical Reality Overlay */}
          {(photoTab === 'ALL' || photoTab === 'OVERLAY') && overlayUrl && (
            <div className="flex flex-col rounded-md overflow-hidden bg-[#09090b] border border-white/[0.08] group">
              <div className="relative aspect-square bg-black overflow-hidden">
                <img
                  src={overlayUrl}
                  alt="Blended Physical Overlay"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-sm bg-black/80 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-zinc-300">
                  Blended Physical Overlay
                </div>
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setSelectedModalImg({ url: overlayUrl, title: 'Blended Physical Reality Overlay' })}
                    className="p-1.5 rounded-sm bg-black/80 border border-white/20 text-zinc-300 hover:text-white"
                    title="Fullscreen View"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => downloadImage(overlayUrl, 'confidence_overlay.png')}
                    className="p-1.5 rounded-sm bg-black/80 border border-white/20 text-zinc-300 hover:text-white"
                    title="Download Map"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="p-3.5 bg-[#121215] border-t border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-200">Overlay Blend</span>
                  <span className="text-[10px] text-zinc-400 font-mono">60% Swath · 40% Turbo</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-white/10">Mono Swath</span>
                  <span>+</span>
                  <span className="px-1.5 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-500/30">Radiometric Field</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Spatial registration of lunar crater topography with confidence gradient.
                </p>
              </div>
            </div>
          )}

          {/* 3. Binary Shadow Hazard Mask */}
          {(photoTab === 'ALL' || photoTab === 'MASK') && maskUrl && (
            <div className="flex flex-col rounded-md overflow-hidden bg-[#09090b] border border-white/[0.08] group">
              <div className="relative aspect-square bg-black overflow-hidden">
                <img
                  src={maskUrl}
                  alt="Binary Shadow Hazard Mask"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-sm bg-black/80 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-zinc-300">
                  Binary Shadow Hazard Mask
                </div>
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setSelectedModalImg({ url: maskUrl, title: 'Binary Shadow Hazard Mask' })}
                    className="p-1.5 rounded-sm bg-black/80 border border-white/20 text-zinc-300 hover:text-white"
                    title="Fullscreen View"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => downloadImage(maskUrl, 'shadow_mask.png')}
                    className="p-1.5 rounded-sm bg-black/80 border border-white/20 text-zinc-300 hover:text-white"
                    title="Download Map"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="p-3.5 bg-[#121215] border-t border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-200">Shadow Risk Cutoff</span>
                  <span className="text-[10px] text-rose-400 font-mono">DN &lt; 20 (0.08)</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <span className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-200 border border-white/20">White: Pass</span>
                  <span className="px-1.5 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-500/40">Black: Masked</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-normal">
                  Exclusion mask pinpointing unilluminated floors where AI detail is rejected.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 6. Precision Instrument Geometry & Hapke Parameters Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Illumination Geometry Table */}
        <div className="p-5 rounded-md bg-[#121215] border border-white/[0.08] space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-zinc-200">
              <Compass className="w-3.5 h-3.5 text-zinc-400" />
              <span>Illumination & Viewing Geometry</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500">PDS4 Derived</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 rounded bg-black/40 border border-white/[0.04]">
              <div className="text-[10px] text-zinc-500 uppercase">Solar Incidence (i)</div>
              <div className="text-zinc-100 font-medium text-sm mt-0.5">{analysis.geometry.incidence_angle_deg}°</div>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/[0.04]">
              <div className="text-[10px] text-zinc-500 uppercase">Sun Elevation</div>
              <div className="text-zinc-100 font-medium text-sm mt-0.5">{analysis.geometry.sun_elevation_deg}°</div>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/[0.04]">
              <div className="text-[10px] text-zinc-500 uppercase">Derived Emission (e)</div>
              <div className="text-zinc-100 font-medium text-sm mt-0.5">{analysis.geometry.derived_emission_angle_deg}°</div>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/[0.04]">
              <div className="text-[10px] text-zinc-500 uppercase">Nominal Phase (g)</div>
              <div className="text-zinc-100 font-medium text-sm mt-0.5">{analysis.geometry.nominal_phase_angle_deg}°</div>
            </div>
          </div>
        </div>

        {/* Hapke IMSA Photometric Parameters Table */}
        <div className="p-5 rounded-md bg-[#121215] border border-white/[0.08] space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-zinc-200">
              <Layers className="w-3.5 h-3.5 text-zinc-400" />
              <span>Hapke IMSA Photometric Parameters</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500">Lunar Regolith</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs font-mono">
            <div className="p-2.5 rounded bg-black/40 border border-white/[0.04]">
              <div className="text-[10px] text-zinc-500 uppercase">Single-Scatter (w)</div>
              <div className="text-zinc-200 font-medium text-sm mt-0.5">{analysis.hapke_parameters.w}</div>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/[0.04]">
              <div className="text-[10px] text-zinc-500 uppercase">Asymmetry (b)</div>
              <div className="text-zinc-200 font-medium text-sm mt-0.5">{analysis.hapke_parameters.b}</div>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/[0.04]">
              <div className="text-[10px] text-zinc-500 uppercase">Backscatter (c)</div>
              <div className="text-zinc-200 font-medium text-sm mt-0.5">{analysis.hapke_parameters.c}</div>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/[0.04]">
              <div className="text-[10px] text-zinc-500 uppercase">Surge Amp (B0)</div>
              <div className="text-zinc-200 font-medium text-sm mt-0.5">{analysis.hapke_parameters.B0}</div>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/[0.04]">
              <div className="text-[10px] text-zinc-500 uppercase">Surge Width (h)</div>
              <div className="text-zinc-200 font-medium text-sm mt-0.5">{analysis.hapke_parameters.h}</div>
            </div>
            <div className="p-2.5 rounded bg-black/40 border border-white/[0.04]">
              <div className="text-[10px] text-zinc-500 uppercase">Reflectance (I/F)</div>
              <div className="text-emerald-400 font-medium text-sm mt-0.5">{analysis.theoretical_reflectance_if}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Preview Modal */}
      {selectedModalImg && (
        <div
          onClick={() => setSelectedModalImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-[#111114] border border-white/10 rounded-md overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#0a0a0c]">
              <span className="text-xs font-mono font-medium text-zinc-200">{selectedModalImg.title}</span>
              <button
                onClick={() => setSelectedModalImg(null)}
                className="px-3 py-1 rounded-sm bg-white/10 hover:bg-white/20 text-xs text-zinc-300 font-mono transition-colors"
              >
                Close
              </button>
            </div>
            <div className="p-4 bg-black flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={selectedModalImg.url}
                alt={selectedModalImg.title}
                className="max-w-full max-h-full object-contain rounded shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
