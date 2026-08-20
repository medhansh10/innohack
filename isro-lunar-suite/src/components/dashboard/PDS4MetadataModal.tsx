import React, { useState } from 'react';
import { LunarDataset } from '../../types/lunar';
import { X, Copy, Check } from 'lucide-react';

interface PDS4MetadataModalProps {
  isOpen: boolean;
  onClose: () => void;
  dataset: LunarDataset;
}

export const PDS4MetadataModal: React.FC<PDS4MetadataModalProps> = ({
  isOpen,
  onClose,
  dataset,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(dataset.pds4XmlLabel);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-[#0d131f] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090e18]">
          <div>
            <h3 className="text-sm font-semibold text-white">
              PDS4 Product Label
            </h3>
            <p className="text-xs text-slate-400">
              {dataset.productUri}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto font-mono text-xs space-y-4 flex-1">
          <div className="grid grid-cols-2 gap-3 text-slate-300">
            <div className="p-3 rounded-xl bg-[#090e18] border border-slate-800">
              <div className="text-slate-500 text-[10px]">INCIDENCE ANGLE (i)</div>
              <div className="text-sm font-semibold text-slate-200">{dataset.geometry.incidenceDeg}°</div>
            </div>
            <div className="p-3 rounded-xl bg-[#090e18] border border-slate-800">
              <div className="text-slate-500 text-[10px]">EMISSION ANGLE (e)</div>
              <div className="text-sm font-semibold text-slate-200">{dataset.geometry.emissionDeg}°</div>
            </div>
            <div className="p-3 rounded-xl bg-[#090e18] border border-slate-800">
              <div className="text-slate-500 text-[10px]">PHASE ANGLE (α)</div>
              <div className="text-sm font-semibold text-slate-200">{dataset.geometry.phaseDeg}°</div>
            </div>
            <div className="p-3 rounded-xl bg-[#090e18] border border-slate-800">
              <div className="text-slate-500 text-[10px]">ALTITUDE</div>
              <div className="text-sm font-semibold text-slate-200">{dataset.geometry.spacecraftAltitudeKm} km</div>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={handleCopy}
              className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <pre className="p-4 rounded-xl bg-[#060a12] text-slate-300 border border-slate-800 overflow-x-auto text-[11px] leading-relaxed">
              {dataset.pds4XmlLabel}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#090e18] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
