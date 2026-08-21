import React, { useState, useEffect } from 'react';
import { LunarDataset } from '../../types/lunar';
import { ImageCurtainViewer } from './ImageCurtainViewer';
import { ExportBar } from './ExportBar';
import { HapkeAnalysisSection } from './HapkeAnalysisSection';
import { getOutputUrl, EnhancementResult, HapkeAnalysis, fetchHapkeAnalysis } from '../../api/enhancementApi';
import LoadingState from '@/components/ui/loading-state';
import { Sparkles, CheckCircle2, Layers } from 'lucide-react';

interface MissionControlProps {
  dataset: LunarDataset;
  onShowToast: (type: 'success' | 'info' | 'warning' | 'error', title: string, desc: string) => void;
  enhancementResult?: EnhancementResult | null;
}

export const MissionControl: React.FC<MissionControlProps> = ({
  dataset,
  onShowToast,
  enhancementResult = null,
}) => {
  const [hapkeAnalysis, setHapkeAnalysis] = useState<HapkeAnalysis | null>(
    enhancementResult?.hapke_analysis || null
  );

  useEffect(() => {
    if (enhancementResult?.hapke_analysis) {
      setHapkeAnalysis(enhancementResult.hapke_analysis);
    } else {
      fetchHapkeAnalysis().then((res) => {
        if (res) setHapkeAnalysis(res);
      });
    }
  }, [enhancementResult]);

  const originalUrl = enhancementResult?.original_preview
    ? getOutputUrl(enhancementResult.original_preview)
    : getOutputUrl('outputs/original_preview.png');
  const enhancedUrl = enhancementResult?.stitched_demo
    ? getOutputUrl(enhancementResult.stitched_demo)
    : getOutputUrl('outputs/stitched_demo.png');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
      
      {/* Top Banner: Mission & Product Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
              <span>Pipeline Complete</span>
            </span>
            <span className="text-zinc-600 font-mono text-xs">|</span>
            <span className="text-xs text-zinc-400 font-mono">
              {dataset.mission} · {dataset.instrument}
            </span>
          </div>

          <h2 className="text-2xl font-medium text-zinc-100 tracking-tight">
            {dataset.targetFeature}
          </h2>
        </div>

        {/* Quick Stats Pill */}
        <div className="flex flex-wrap items-center gap-4 bg-[#121215] border border-white/[0.08] px-4 py-2.5 rounded-md text-xs text-zinc-300">
          <LoadingState label="Hapke Radiometric Sync" variant="Orbit" />
          {enhancementResult?.processing_time_seconds ? (
            <div className="flex items-center gap-1.5 pl-4 border-l border-white/[0.08]">
              <span className="text-zinc-500 font-mono">Pipeline Latency:</span>
              <span className="font-mono text-zinc-100">{enhancementResult.processing_time_seconds}s</span>
            </div>
          ) : null}
        </div>
      </div>

      {/* Main Full-Width Visualizer */}
      <div className="w-full">
        <ImageCurtainViewer
          originalImageUrl={originalUrl}
          enhancedImageUrl={enhancedUrl}
          datasetName={dataset.targetFeature}
          imageWidth={enhancementResult?.image_width}
          imageHeight={enhancementResult?.image_height}
          processedTiles={enhancementResult?.processed_tiles}
          totalTiles={enhancementResult?.total_tiles}
          processingTime={enhancementResult?.processing_time_seconds}
        />
      </div>

      {/* Export Bar */}
      <ExportBar
        dataset={dataset}
        originalImageUrl={originalUrl}
        enhancedImageUrl={enhancedUrl}
        onShowToast={onShowToast}
      />

      {/* Hapke Photometric Physics, QA Briefing & Confidence Imagery Section */}
      <HapkeAnalysisSection analysis={hapkeAnalysis} />
    </div>
  );
};
