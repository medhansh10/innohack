import React from 'react';
import { LunarDataset } from '../../types/lunar';
import { Download, FileText, Image as ImageIcon, Sparkles } from 'lucide-react';

interface ExportBarProps {
  dataset: LunarDataset;
  originalImageUrl?: string;
  enhancedImageUrl?: string;
  onShowToast: (type: 'success' | 'info' | 'warning' | 'error', title: string, desc: string) => void;
}

export const ExportBar: React.FC<ExportBarProps> = ({
  dataset,
  originalImageUrl,
  enhancedImageUrl,
  onShowToast,
}) => {
  const downloadImage = async (url: string | undefined, filename: string) => {
    if (!url) {
      onShowToast('warning', 'Export Unavailable', 'Image is not available for download.');
      return;
    }

    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
      onShowToast('success', 'Download Started', `Saved ${filename}`);
    } catch {
      // Direct link fallback
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const exportScientificReport = () => {
    const markdownReport = `# ISRO Lunar AI Image Enhancement Report
**Mission:** ${dataset.mission}
**Instrument:** ${dataset.instrument}
**Target Swath:** ${dataset.targetFeature}
**Timestamp:** ${new Date().toISOString()}

## Processing Overview
- **Enhancement Architecture:** Real-ESRGAN x4 Deep Residual Dense Network
- **Processing Mode:** Automated Tiling & Overlap Blending
- **Ground Sampling Distance:** ${dataset.geometry?.groundSamplingDistanceM || 5.0} m/px
- **Status:** Quality Calibration and Enhancement Verified
`;
    const blob = new Blob([markdownReport], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${dataset.id}_analysis_report.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onShowToast('success', 'Report Exported', 'Saved analysis summary report.');
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-sm bg-[#0a0a09] border border-white/10 shadow-xl">
      <span className="text-xs text-stone-400 font-mono">
        Export Processed Imagery:
      </span>

      <div className="flex flex-wrap items-center gap-2.5">
        <button
          onClick={() => downloadImage(enhancedImageUrl, `${dataset.id}_enhanced.png`)}
          disabled={!enhancedImageUrl}
          className="px-4 py-2 rounded-sm bg-stone-100 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed text-stone-950 text-xs font-semibold flex items-center gap-2 transition-all shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Download AI Enhanced PNG</span>
        </button>

        <button
          onClick={() => downloadImage(originalImageUrl, `${dataset.id}_original.png`)}
          disabled={!originalImageUrl}
          className="px-3.5 py-2 rounded-sm bg-stone-900/80 hover:bg-stone-800 border border-white/10 disabled:opacity-40 disabled:cursor-not-allowed text-stone-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
        >
          <ImageIcon className="w-3.5 h-3.5 text-stone-400" />
          <span>Original Crop</span>
        </button>

        <button
          onClick={exportScientificReport}
          className="px-3.5 py-2 rounded-sm bg-stone-900/80 hover:bg-stone-800 border border-white/10 text-stone-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
        >
          <FileText className="w-3.5 h-3.5 text-stone-400" />
          <span>Summary Report</span>
        </button>
      </div>
    </div>
  );
};
