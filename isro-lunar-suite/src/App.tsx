import React, { useState } from 'react';
import { AppState, LunarDataset } from './types/lunar';
import { CHANDRAYAAN_PRESETS } from './utils/presets';
import { Header } from './components/layout/Header';
import { StarfieldBackground } from './components/layout/StarfieldBackground';
import { ToastContainer, ToastMessage } from './components/layout/Toast';
import { UploadDropzone } from './components/ingest/UploadDropzone';
import { TelemetryTerminal } from './components/telemetry/TelemetryTerminal';
import { MissionControl } from './components/dashboard/MissionControl';
import { PDS4MetadataModal } from './components/dashboard/PDS4MetadataModal';
import { Compass, ShieldCheck, Orbit } from 'lucide-react';

import { uploadPds4Zip, getOutputUrl, EnhancementResult } from './api/enhancementApi';

export const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('PRE_FLIGHT');
  const [activeDataset, setActiveDataset] = useState<LunarDataset>(CHANDRAYAAN_PRESETS[0]);
  const [isPds4ModalOpen, setIsPds4ModalOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Upload / enhancement states
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [enhancementResult, setEnhancementResult] = useState<EnhancementResult | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isDemoMode, setIsDemoMode] = useState<boolean>(false);

  const showToast = (
    type: 'success' | 'info' | 'warning' | 'error',
    title: string,
    description: string
  ) => {
    const id = `toast-${Date.now()}`;
    setToasts((prev) => [...prev, { id, type, title, description }]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleFileIngest = async (file: File) => {
    // Create a lightweight dataset entry so UI shows the incoming file
    const customDataset: LunarDataset = {
      ...CHANDRAYAAN_PRESETS[0],
      id: `CUSTOM_${file.name.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase()}`,
      productUri: `URN:ISRO:PDS4:${file.name.toUpperCase()}`,
      targetFeature: `Lunar Swath: ${file.name}`,
    };

    setActiveDataset(customDataset);
    setUploadedFile(file);
    setUploadError(null);
    setIsDemoMode(false);
    setIsUploading(true);
    setAppState('PROCESSING');

    try {
      const result = await uploadPds4Zip(file);
      setEnhancementResult(result);
      setIsUploading(false);
      showToast('success', 'Processing complete', 'Image enhancement finished.');
      setAppState('DASHBOARD');
    } catch (err: any) {
      const msg = err?.message || 'Upload failed';
      setUploadError(msg);
      setIsUploading(false);
      showToast('error', 'Upload failed', msg);
      setAppState('PRE_FLIGHT');
    }
  };

  const handleDemoSelect = () => {
    setActiveDataset(CHANDRAYAAN_PRESETS[0]);
    setIsDemoMode(true);
    setIsUploading(false);
    setAppState('PROCESSING');
  };

  const handleProcessingComplete = () => {
    setAppState('DASHBOARD');
  };

  const handleReset = () => {
    setAppState('PRE_FLIGHT');
    setEnhancementResult(null);
    setUploadedFile(null);
    setUploadError(null);
    setIsUploading(false);
    setIsDemoMode(false);
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-stone-200 flex flex-col selection:bg-stone-200/20 selection:text-stone-100">
      
      {/* Photorealistic 3D Animated Moon Background */}
      <StarfieldBackground appState={appState} />

      {/* Header */}
      <Header
        appState={appState}
        dataset={activeDataset}
        onReset={handleReset}
        onOpenPds4Modal={() => setIsPds4ModalOpen(true)}
      />

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center">
        
        {/* STATE 1: EDITORIAL AWWWARDS-GRADE HERO & UPLOAD */}
        {appState === 'PRE_FLIGHT' && (
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12 flex flex-col justify-between min-h-[calc(100vh-86px)]">
            
            {/* Top/Center Left Hero Typography & Dropzone */}
            <div className="max-w-3xl space-y-7 mt-[10vh] lg:mt-[12vh]">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.24em] text-stone-400 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                  <span>ISRO / Chandrayaan lunar archive</span>
                </div>

                <h1 className="max-w-2xl text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-[-0.055em] text-stone-100 leading-[0.94]">
                  Read the lunar surface in a different light.
                </h1>

                <p className="text-sm sm:text-base text-stone-400 max-w-md leading-relaxed">
                  An instrument panel for Chandrayaan imagery—built to reveal terrain, recover shadow detail, and make the Moon legible.
                </p>
              </div>

              {/* Upload Dropzone Capsule */}
              <UploadDropzone
                onFileSelected={handleFileIngest}
                onDemoSelected={handleDemoSelect}
                disabled={isUploading}
              />
            </div>

            {/* Bottom Metadata Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-wide text-stone-400 uppercase">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-stone-500" />
                  <span>SPICE Geometry Inversion</span>
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
                  <span>Hapke 5-Parameter Physics</span>
                </span>
                <span className="hidden sm:flex items-center gap-2">
                  <Orbit className="w-3.5 h-3.5 text-stone-500" />
                  <span>South Pole Prime Zone</span>
                </span>
              </div>

              <span className="text-stone-500 text-[10px]">
                ISRO Planetary Data Node
              </span>
            </div>
          </div>
        )}

        {/* STATE 2: LOADING */}
        {appState === 'PROCESSING' && (
          <div className="w-full flex items-center justify-center p-4">
            <TelemetryTerminal
              dataset={activeDataset}
              onComplete={handleProcessingComplete}
              isProcessing={isUploading}
              isDemoMode={isDemoMode}
              error={uploadError}
            />
          </div>
        )}

        {/* STATE 3: INTERACTIVE WORKSPACE */}
        {appState === 'DASHBOARD' && (
          <MissionControl
            dataset={activeDataset}
            onShowToast={showToast}
            enhancementResult={enhancementResult}
          />
        )}
      </main>

      {/* PDS4 Modal */}
      <PDS4MetadataModal
        isOpen={isPds4ModalOpen}
        onClose={() => setIsPds4ModalOpen(false)}
        dataset={activeDataset}
      />

      {/* Toasts */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
};
