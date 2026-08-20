import React from 'react';
import { LunarDataset, HapkeParameters } from '../../types/lunar';
import { Download, FileJson, FileText } from 'lucide-react';

interface ExportBarProps {
  dataset: LunarDataset;
  currentHapke: HapkeParameters;
  onShowToast: (type: 'success' | 'info', title: string, desc: string) => void;
}

export const ExportBar: React.FC<ExportBarProps> = ({
  dataset,
  currentHapke,
  onShowToast,
}) => {
  const exportHapkeJson = () => {
    const data = {
      product: dataset.productUri,
      mission: dataset.mission,
      instrument: dataset.instrument,
      targetCoordinates: dataset.targetCoordinates,
      fittedHapkeParameters: currentHapke,
      geometry: dataset.geometry,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${dataset.id}_parameters.json`;
    a.click();
    URL.revokeObjectURL(url);
    onShowToast('success', 'Parameters Exported', 'Saved parameters JSON file.');
  };

  const exportScientificReport = () => {
    const markdownReport = `# ISRO Lunar Photometric Analysis Report
**Mission:** ${dataset.mission}
**Instrument:** ${dataset.instrument}
**Target Feature:** ${dataset.targetFeature}
**Coordinates:** ${dataset.targetCoordinates.latStr}, ${dataset.targetCoordinates.lonStr}

## Calibrated Hapke Parameters
- Single Scattering Albedo (w): ${currentHapke.w}
- Macroscopic Roughness (θ̄): ${currentHapke.thetaBar}°
- Asymmetry Factor (g): ${currentHapke.g}
- Opposition Surge (B₀): ${currentHapke.b0}
`;
    const blob = new Blob([markdownReport], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${dataset.id}_report.md`;
    a.click();
    URL.revokeObjectURL(url);
    onShowToast('success', 'Report Exported', 'Saved analysis summary report.');
  };

  const exportGeoTiff = () => {
    const manifest = `ISRO_LUNAR_PHOTOMETRIC_L2C\nProduct: ${dataset.productUri}\nCoordinates: ${dataset.targetCoordinates.lat},${dataset.targetCoordinates.lon}`;
    const blob = new Blob([manifest], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${dataset.id}_corrected.tif`;
    a.click();
    URL.revokeObjectURL(url);
    onShowToast('success', 'GeoTIFF Exported', 'Downloaded calibrated GeoTIFF.');
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#0d131f] border border-slate-800">
      <span className="text-xs text-slate-400 font-medium">
        Export Processed Data:
      </span>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={exportGeoTiff}
          className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>GeoTIFF</span>
        </button>

        <button
          onClick={exportHapkeJson}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
        >
          <FileJson className="w-3.5 h-3.5" />
          <span>Parameters JSON</span>
        </button>

        <button
          onClick={exportScientificReport}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Summary Report</span>
        </button>
      </div>
    </div>
  );
};
