import React from 'react';
import { LunarDataset } from '../../types/lunar';
import { ImageCurtainViewer } from './ImageCurtainViewer';
import { ExportBar } from './ExportBar';
import { getOutputUrl, EnhancementResult } from '../../api/enhancementApi';
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
  const originalUrl = enhancementResult?.original_preview ? getOutputUrl(enhancementResult.original_preview) : undefined;
  const enhancedUrl = enhancementResult?.stitched_demo ? getOutputUrl(enhancementResult.stitched_demo) : undefined;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
      
      {/* Top Banner: Mission & Product Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Enhancement Complete</span>
            </span>
            <span className="text-xs text-stone-500 font-mono">
              {dataset.mission} · {dataset.instrument}
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-stone-100 tracking-tight">
            {dataset.targetFeature}
          </h2>
        </div>

        {/* Quick Stats Pill */}
        <div className="flex items-center gap-3 bg-stone-900/60 border border-white/10 px-4 py-2 rounded-xl text-xs text-stone-300">
          <div className="flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-sky-400" />
            <span className="text-stone-400">Pipeline:</span>
            <span className="font-mono font-medium text-stone-200">Real-ESRGAN x4</span>
          </div>
          {enhancementResult?.processing_time_seconds ? (
            <div className="flex items-center gap-1.5 pl-3 border-l border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-stone-200">{enhancementResult.processing_time_seconds}s</span>
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
    </div>
  );
};
