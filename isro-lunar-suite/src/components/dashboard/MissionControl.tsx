import React, { useState } from 'react';
import { LunarDataset, FilterMode, HapkeParameters } from '../../types/lunar';
import { ImageCurtainViewer } from './ImageCurtainViewer';
import { FilterToolbar } from './FilterToolbar';
import { HapkeControls } from './HapkeControls';
import { PhotometricChart } from './PhotometricChart';
import { LunarGlobe3D } from './LunarGlobe3D';
import { ExportBar } from './ExportBar';
import { getOutputUrl, EnhancementResult } from '../../api/enhancementApi';

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
  const [currentFilter, setCurrentFilter] = useState<FilterMode>('REGOLITH_MONO');
  const [currentHapke, setCurrentHapke] = useState<HapkeParameters>(dataset.currentHapke);

  const handleResetHapke = () => {
    setCurrentHapke(dataset.initialHapke);
    onShowToast('info', 'Parameters Reset', 'Restored baseline photometric values.');
  };

  const originalUrl = enhancementResult?.original_preview ? getOutputUrl(enhancementResult.original_preview) : undefined;
  const enhancedUrl = enhancementResult?.stitched_demo ? getOutputUrl(enhancementResult.stitched_demo) : undefined;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-6">
      
      {/* Top Banner: Target info & Filter bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-2">
        <div>
          <h2 className="text-lg font-bold text-slate-100">
            {dataset.targetFeature}
          </h2>
          <p className="text-xs text-slate-400">
            {dataset.mission} · {dataset.instrument} · {dataset.targetCoordinates.latStr}, {dataset.targetCoordinates.lonStr}
          </p>
        </div>

        <FilterToolbar
          currentFilter={currentFilter}
          onSelectFilter={setCurrentFilter}
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Image Viewer (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <ImageCurtainViewer
            dataset={dataset}
            currentFilter={currentFilter}
            currentHapke={currentHapke}
            originalImageUrl={originalUrl}
            enhancedImageUrl={enhancedUrl}
          />
        </div>

        {/* Right Column: Hapke Calibration (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <HapkeControls
            currentHapke={currentHapke}
            initialHapke={dataset.initialHapke}
            onChangeHapke={setCurrentHapke}
            onResetHapke={handleResetHapke}
          />
        </div>
      </div>

      {/* Secondary Bottom Grid: Chart & 3D Target Globe */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PhotometricChart
          currentHapke={currentHapke}
          nominalIncidence={dataset.geometry.incidenceDeg}
        />

        <LunarGlobe3D dataset={dataset} />
      </div>

      {/* Export Bar */}
      <ExportBar
        dataset={dataset}
        currentHapke={currentHapke}
        onShowToast={onShowToast}
      />
    </div>
  );
};
