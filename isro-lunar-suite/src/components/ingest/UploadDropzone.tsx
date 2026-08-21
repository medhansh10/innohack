import React, { useState, useRef } from 'react';
import { Upload, ArrowRight, FileArchive } from 'lucide-react';

interface UploadDropzoneProps {
  onFileSelected: (file: File) => void;
  onDemoSelected: () => void;
  disabled?: boolean;
}

export const UploadDropzone: React.FC<UploadDropzoneProps> = ({
  onFileSelected,
  onDemoSelected,
  disabled = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (!disabled && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileSelected(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && e.target.files && e.target.files.length > 0) {
      onFileSelected(e.target.files[0]);
    }
  };

  return (
    <div className="w-full max-w-lg space-y-4">
      {/* Upload Card */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
        className={`group relative cursor-pointer rounded-sm p-7 transition-all duration-300 backdrop-blur-2xl border ${
          disabled
            ? 'border-white/10 bg-[#0b0b0a]/50 opacity-60 cursor-not-allowed'
            : isDragging
            ? 'border-stone-300/80 bg-stone-900/50 shadow-2xl scale-[1.01]'
            : 'border-white/15 bg-[#0b0b0a]/75 hover:border-stone-300/40 hover:bg-[#11110f]/85 shadow-2xl shadow-black/60'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".zip,.xml,.img,.raw,.png,.jpg,.jpeg,.tif,.tiff"
          className="hidden"
          onChange={handleFileChange}
          disabled={disabled}
        />

        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-stone-200 group-hover:scale-105 group-hover:bg-white/10 group-hover:text-white transition-all shrink-0">
            <Upload className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-medium text-stone-100 tracking-tight mb-1">
              Upload Lunar Imagery / PDS4 Archive
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Drag & drop telemetry files, .zip archives, or lunar imagery here to begin photometric correction.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={disabled}
                className="px-4 py-2 rounded-sm bg-stone-100 text-stone-950 hover:bg-white font-semibold text-xs transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Select File</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] text-stone-500 font-mono">
                .ZIP · .IMG · .PNG · .TIF
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Pill */}
      <div className="flex items-center justify-between px-4 py-2.5 rounded-sm bg-black/50 backdrop-blur-md border border-white/10 text-xs text-stone-400">
        <span className="flex items-center gap-1.5">
          <FileArchive className="w-3.5 h-3.5 text-stone-500" />
          <span>No file available?</span>
        </span>
        
        <button
          type="button"
          onClick={onDemoSelected}
          disabled={disabled}
          className="text-stone-200 hover:text-white font-medium transition-colors hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Load Chandrayaan Sample Swath →
        </button>
      </div>
    </div>
  );
};
