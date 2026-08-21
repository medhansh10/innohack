import React, { useEffect, useState, useRef } from 'react';
import { LunarDataset } from '../../types/lunar';
import { Loader2 } from 'lucide-react';

const STAGE_MESSAGES = [
  'Uploading PDS4 archive…',
  'Extracting dataset files…',
  'Locating IMG + XML pairs…',
  'Converting IMG → NPY representation…',
  'Creating image tiles…',
  'Running Real-ESRGAN enhancement…',
  'Stitching enhanced tiles…',
  'Finalising output…',
];

interface TelemetryTerminalProps {
  dataset: LunarDataset;
  onComplete: () => void;
  /** When true the terminal waits for the parent to call onComplete (real API mode). */
  isProcessing?: boolean;
  /** When true the terminal runs the original quick demo animation. */
  isDemoMode?: boolean;
  error?: string | null;
}

export const TelemetryTerminal: React.FC<TelemetryTerminalProps> = ({
  dataset,
  onComplete,
  isProcessing = false,
  isDemoMode = false,
  error = null,
}) => {
  const [stage, setStage] = useState(STAGE_MESSAGES[0]);
  const stageIndex = useRef(0);

  useEffect(() => {
    if (error) {
      setStage(`Upload failed: ${error}`);
      return;
    }

    // --- Demo mode: keep the original fast timer ---
    if (isDemoMode) {
      const t1 = setTimeout(() => {
        setStage('Computing Hapke photometric model…');
      }, 450);

      const t2 = setTimeout(() => {
        onComplete();
      }, 950);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }

    // --- Real processing mode: rotate through stage messages ---
    if (isProcessing) {
      stageIndex.current = 0;
      setStage(STAGE_MESSAGES[0]);

      const interval = setInterval(() => {
        stageIndex.current = Math.min(
          stageIndex.current + 1,
          STAGE_MESSAGES.length - 1
        );
        setStage(STAGE_MESSAGES[stageIndex.current]);
      }, 8000); // rotate every 8 s (processing takes minutes)

      return () => clearInterval(interval);
    }
  }, [onComplete, isProcessing, isDemoMode, error]);

  const statusText = error ? error : stage;

  return (
    <div className="max-w-md w-full mx-auto p-6 rounded-2xl bg-[#0d131f] border border-slate-800 text-center shadow-xl">
      <div className="w-10 h-10 rounded-full bg-slate-800 mx-auto mb-4 flex items-center justify-center text-sky-400">
        <Loader2 className="w-5 h-5 animate-spin" />
      </div>

      <h3 className="text-sm font-semibold text-slate-100 mb-1">
        {error ? 'Upload Error' : `Loading ${dataset.targetFeature}`}
      </h3>
      <p className={`text-xs mb-4 font-mono ${error ? 'text-rose-300' : 'text-slate-400'}`}>
        {statusText}
      </p>

      <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
        <div className="h-full bg-sky-500 rounded-full animate-[pulse_1s_infinite] w-3/4 mx-auto" />
      </div>
    </div>
  );
};
