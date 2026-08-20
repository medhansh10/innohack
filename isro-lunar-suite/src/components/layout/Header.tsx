import React from 'react';
import { LunarDataset, AppState } from '../../types/lunar';
import { RefreshCw, FileText, Globe } from 'lucide-react';

interface HeaderProps {
  appState: AppState;
  dataset: LunarDataset;
  onReset: () => void;
  onOpenPds4Modal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  appState,
  dataset,
  onReset,
  onOpenPds4Modal,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#030303]/80 backdrop-blur-md border-b border-white/10 px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-900 flex items-center justify-center font-bold text-[9px] tracking-wider">
            ISRO
          </div>
          <div>
            <div className="text-sm font-medium text-stone-100 flex items-center gap-2">
              <span>Lunar Data Platform</span>
              <span className="text-[11px] font-normal text-stone-500">/ Chandrayaan</span>
            </div>
          </div>
        </div>

        {/* Center: Target pill (Only when in dashboard) */}
        {appState === 'DASHBOARD' && (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400">Target:</span>
            <span className="text-slate-200 font-medium">{dataset.targetFeature}</span>
            <span className="text-slate-500 font-mono text-[11px]">({dataset.targetCoordinates.latStr})</span>
          </div>
        )}

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          {appState === 'DASHBOARD' && (
            <>
              <button
                onClick={onOpenPds4Modal}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>PDS4 Info</span>
              </button>

              <button
                onClick={onReset}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>New Dataset</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
