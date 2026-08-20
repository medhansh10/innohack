import React, { useEffect, useState } from 'react';
import { LunarDataset } from '../../types/lunar';
import { Loader2 } from 'lucide-react';

interface TelemetryTerminalProps {
  dataset: LunarDataset;
  onComplete: () => void;
}

export const TelemetryTerminal: React.FC<TelemetryTerminalProps> = ({
  dataset,
  onComplete,
}) => {
  const [stage, setStage] = useState('Calibrating telemetry data...');

  useEffect(() => {
    const t1 = setTimeout(() => {
      setStage('Computing Hapke photometric model...');
    }, 450);

    const t2 = setTimeout(() => {
      onComplete();
    }, 950);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <div className="max-w-md w-full mx-auto p-6 rounded-2xl bg-[#0d131f] border border-slate-800 text-center shadow-xl">
      <div className="w-10 h-10 rounded-full bg-slate-800 mx-auto mb-4 flex items-center justify-center text-sky-400">
        <Loader2 className="w-5 h-5 animate-spin" />
      </div>

      <h3 className="text-sm font-semibold text-slate-100 mb-1">
        Loading {dataset.targetFeature}
      </h3>
      <p className="text-xs text-slate-400 mb-4 font-mono">
        {stage}
      </p>

      <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
        <div className="h-full bg-sky-500 rounded-full animate-[pulse_1s_infinite] w-3/4 mx-auto" />
      </div>
    </div>
  );
};
