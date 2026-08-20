import React, { useState } from 'react';
import { HapkeParameters } from '../../types/lunar';
import { RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';

interface HapkeControlsProps {
  currentHapke: HapkeParameters;
  initialHapke: HapkeParameters;
  onChangeHapke: (params: HapkeParameters) => void;
  onResetHapke: () => void;
}

export const HapkeControls: React.FC<HapkeControlsProps> = ({
  currentHapke,
  initialHapke,
  onChangeHapke,
  onResetHapke,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSliderChange = (key: keyof HapkeParameters, value: number) => {
    onChangeHapke({
      ...currentHapke,
      [key]: value,
    });
  };

  const isModified =
    currentHapke.w !== initialHapke.w ||
    currentHapke.thetaBar !== initialHapke.thetaBar ||
    currentHapke.g !== initialHapke.g ||
    currentHapke.b0 !== initialHapke.b0 ||
    currentHapke.h !== initialHapke.h;

  return (
    <div className="flex flex-col rounded-2xl bg-[#0d131f] border border-slate-800 p-5 space-y-4 shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-100">
            Photometric Calibration
          </h3>
          <p className="text-xs text-slate-400">
            Adjust illumination and surface reflection properties
          </p>
        </div>

        {isModified && (
          <button
            onClick={onResetHapke}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Simplified Primary Sliders */}
      <div className="space-y-4 text-xs">
        
        {/* Slider 1: Surface Albedo */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-slate-300">
            <span className="font-medium">Surface Albedo (Brightness)</span>
            <span className="text-slate-200 font-mono">{currentHapke.w.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.05"
            max="0.80"
            step="0.01"
            value={currentHapke.w}
            onChange={(e) => handleSliderChange('w', parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Dark Mare</span>
            <span>Bright Highlands</span>
          </div>
        </div>

        {/* Slider 2: Surface Roughness */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-slate-300">
            <span className="font-medium">Surface Roughness</span>
            <span className="text-slate-200 font-mono">{currentHapke.thetaBar.toFixed(0)}°</span>
          </div>
          <input
            type="range"
            min="0"
            max="45"
            step="1"
            value={currentHapke.thetaBar}
            onChange={(e) => handleSliderChange('thetaBar', parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Smooth Flat Terrain</span>
            <span>Rugged Slopes</span>
          </div>
        </div>

        {/* Slider 3: Opposition Surge */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-slate-300">
            <span className="font-medium">Opposition Effect</span>
            <span className="text-slate-200 font-mono">{currentHapke.b0.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.0"
            max="3.0"
            step="0.05"
            value={currentHapke.b0}
            onChange={(e) => handleSliderChange('b0', parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Standard Reflection</span>
            <span>Strong Peak</span>
          </div>
        </div>
      </div>

      {/* Advanced Parameters Drawer */}
      <div className="pt-2 border-t border-slate-800/60">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full py-1.5 flex items-center justify-between text-xs text-slate-400 hover:text-slate-200 transition-colors"
        >
          <span>Advanced Physical Parameters</span>
          {showAdvanced ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {showAdvanced && (
          <div className="mt-3 space-y-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
            <div className="space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>Phase Asymmetry (g)</span>
                <span className="font-mono text-slate-300">{currentHapke.g.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="-0.80"
                max="0.50"
                step="0.02"
                value={currentHapke.g}
                onChange={(e) => handleSliderChange('g', parseFloat(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>Surge Width (h)</span>
                <span className="font-mono text-slate-300">{currentHapke.h.toFixed(3)}</span>
              </div>
              <input
                type="range"
                min="0.01"
                max="0.20"
                step="0.005"
                value={currentHapke.h}
                onChange={(e) => handleSliderChange('h', parseFloat(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
