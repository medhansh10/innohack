import React, { useState, useRef, useEffect, useCallback } from 'react';
import { LunarDataset, FilterMode, HapkeParameters, ProbeReading } from '../../types/lunar';
import { drawRawSensorView, drawEnhancedSurfaceView } from '../../utils/lunarTextures';
import { getPhotometricCorrectionRatio } from '../../utils/hapkeEngine';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ImageCurtainViewerProps {
  dataset: LunarDataset;
  currentFilter: FilterMode;
  currentHapke: HapkeParameters;
  originalImageUrl?: string;
  enhancedImageUrl?: string;
}

export const ImageCurtainViewer: React.FC<ImageCurtainViewerProps> = ({
  dataset,
  currentFilter,
  currentHapke,
  originalImageUrl,
  enhancedImageUrl,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rawCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const enhancedCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDraggingSlider, setIsDraggingSlider] = useState<boolean>(false);

  const [zoom, setZoom] = useState<number>(1.0);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [panStart, setPanStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const [probe, setProbe] = useState<ProbeReading | null>(null);
  const [mouseCanvasPos, setMouseCanvasPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const CANVAS_SIZE = 1024;

  const renderCanvases = useCallback(() => {
    const rawCanvas = rawCanvasRef.current;
    const enhancedCanvas = enhancedCanvasRef.current;
    if (!rawCanvas || !enhancedCanvas) return;

    const rawCtx = rawCanvas.getContext('2d');
    const enhancedCtx = enhancedCanvas.getContext('2d');
    if (!rawCtx || !enhancedCtx) return;

    const drawImageToCanvas = (ctx: CanvasRenderingContext2D, image: HTMLImageElement, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);
      const scale = Math.max(width / image.width, height / image.height);
      const drawWidth = image.width * scale;
      const drawHeight = image.height * scale;
      const offsetX = (width - drawWidth) / 2;
      const offsetY = (height - drawHeight) / 2;
      ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    if (originalImageUrl && enhancedImageUrl) {
      const loadImage = (src: string) => new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
      });

      void Promise.all([
        loadImage(originalImageUrl),
        loadImage(enhancedImageUrl),
      ])
        .then(([originalImg, enhancedImg]) => {
          drawImageToCanvas(rawCtx, originalImg, rawCanvas.width, rawCanvas.height);
          drawImageToCanvas(enhancedCtx, enhancedImg, enhancedCanvas.width, enhancedCanvas.height);
        })
        .catch(() => {
          drawRawSensorView(rawCtx, CANVAS_SIZE, CANVAS_SIZE, dataset.id);
          const normRatio = getPhotometricCorrectionRatio(
            dataset.geometry.incidenceDeg,
            dataset.geometry.emissionDeg,
            dataset.geometry.phaseDeg,
            currentHapke
          );
          drawEnhancedSurfaceView(
            enhancedCtx,
            CANVAS_SIZE,
            CANVAS_SIZE,
            dataset.id,
            currentFilter,
            currentHapke,
            normRatio
          );
        });
      return;
    }

    drawRawSensorView(rawCtx, CANVAS_SIZE, CANVAS_SIZE, dataset.id);

    const normRatio = getPhotometricCorrectionRatio(
      dataset.geometry.incidenceDeg,
      dataset.geometry.emissionDeg,
      dataset.geometry.phaseDeg,
      currentHapke
    );

    drawEnhancedSurfaceView(
      enhancedCtx,
      CANVAS_SIZE,
      CANVAS_SIZE,
      dataset.id,
      currentFilter,
      currentHapke,
      normRatio
    );
  }, [dataset, currentFilter, currentHapke, originalImageUrl, enhancedImageUrl]);

  useEffect(() => {
    renderCanvases();
  }, [renderCanvases]);

  const handleDividerMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingSlider(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();

    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    if (isDraggingSlider) {
      const newPos = Math.max(5, Math.min(95, (clientX / rect.width) * 100));
      setSliderPos(newPos);
      return;
    }

    if (isPanning) {
      setPan({
        x: clientX - panStart.x,
        y: clientY - panStart.y,
      });
      return;
    }

    setMouseCanvasPos({ x: clientX, y: clientY });

    const normX = Math.max(0, Math.min(1, clientX / rect.width));
    const normY = Math.max(0, Math.min(1, clientY / rect.height));

    const pixelX = Math.floor(normX * CANVAS_SIZE);
    const pixelY = Math.floor(normY * CANVAS_SIZE);

    const baseIF = dataset.meanReflectance * (currentHapke.w / 0.342);
    const localVar = Math.sin(pixelX * 0.05) * Math.cos(pixelY * 0.05) * 0.03;
    const ifVal = Math.max(0.012, baseIF + localVar);

    setProbe({
      pixelX,
      pixelY,
      normalizedLat: dataset.targetCoordinates.lat,
      normalizedLon: dataset.targetCoordinates.lon,
      reflectanceIF: parseFloat(ifVal.toFixed(4)),
      roughnessEstDeg: currentHapke.thetaBar,
      albedoFactor: currentHapke.w,
      mineralSignature: 'Regolith / Feldspar',
      isSunlit: true,
      snrEst: dataset.signalToNoiseRatioDb,
    });
  };

  const handleMouseUp = () => {
    setIsDraggingSlider(false);
    setIsPanning(false);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button === 0 && !isDraggingSlider) {
      setIsPanning(true);
      setPanStart({
        x: e.clientX - containerRef.current!.getBoundingClientRect().left - pan.x,
        y: e.clientY - containerRef.current!.getBoundingClientRect().top - pan.y,
      });
    }
  };

  const handleZoomIn = () => {
    setZoom((z) => Math.min(6.0, parseFloat((z + 0.5).toFixed(1))));
  };

  const handleZoomOut = () => {
    setZoom((z) => {
      const next = Math.max(1.0, parseFloat((z - 0.5).toFixed(1)));
      if (next === 1.0) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetView = () => {
    setZoom(1.0);
    setPan({ x: 0, y: 0 });
    setSliderPos(50);
  };

  return (
    <div className="flex flex-col w-full rounded-2xl bg-[#0d131f] border border-slate-800 overflow-hidden shadow-lg">
      
      {/* Viewport Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#090e18] border-b border-slate-800 text-xs">
        <div className="flex items-center gap-3">
          <span className="text-slate-400 font-medium">Comparison View</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-500">Drag center line to compare Raw vs Corrected</span>
        </div>

        {/* Viewport Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleZoomIn}
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleZoomOut}
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <button
            onClick={handleResetView}
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Reset View"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Canvas Viewport */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          setIsDraggingSlider(false);
          setIsPanning(false);
          setProbe(null);
        }}
        className={`relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#050811] overflow-hidden select-none ${
          isPanning ? 'cursor-grabbing' : isDraggingSlider ? 'cursor-ew-resize' : 'cursor-default'
        }`}
      >
        <div
          className="absolute inset-0 origin-center transition-transform duration-75 ease-out"
          style={{
            transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
          }}
        >
          {/* Base Layer: Corrected */}
          <canvas
            ref={enhancedCanvasRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Top Layer: Raw (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <canvas
              ref={rawCanvasRef}
              width={CANVAS_SIZE}
              height={CANVAS_SIZE}
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
            />
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-[2px] h-full bg-white/70" />
          <div
            onMouseDown={handleDividerMouseDown}
            className="absolute w-7 h-7 rounded-full bg-slate-900 border border-white/60 flex items-center justify-center pointer-events-auto cursor-ew-resize shadow-md"
          >
            <div className="w-2.5 h-0.5 bg-slate-300" />
          </div>
        </div>

        {/* Clean Pill Badges */}
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[11px] font-medium text-slate-300">
          {originalImageUrl ? 'Original' : 'Raw Sensor (DN)'}
        </div>

        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[11px] font-medium text-sky-300">
          {enhancedImageUrl ? 'AI Enhanced' : 'Photometrically Corrected'}
        </div>

        {/* Minimal Probe indicator */}
        {probe && !isDraggingSlider && !isPanning && (
          <div
            className="absolute z-30 pointer-events-none px-2.5 py-1.5 rounded-lg bg-slate-950/90 border border-slate-800 text-[11px] text-slate-300 shadow-md transform -translate-x-1/2 -translate-y-full mb-3"
            style={{
              left: `${mouseCanvasPos.x}px`,
              top: `${mouseCanvasPos.y}px`,
            }}
          >
            Reflectance: <span className="text-sky-400 font-mono font-semibold">{probe.reflectanceIF}</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-4 py-2 bg-[#090e18] border-t border-slate-800 text-[11px] text-slate-400">
        <span>Resolution: {dataset.geometry.groundSamplingDistanceM} m/px</span>
        <span>Solar Angle: {dataset.geometry.incidenceDeg}°</span>
      </div>
    </div>
  );
};
