import React, { useState, useRef, useEffect } from 'react';
import LoadingState from '@/components/ui/loading-state';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sun,
  Contrast,
  Search,
  Sparkles
} from 'lucide-react';

interface ImageCurtainViewerProps {
  originalImageUrl?: string;
  enhancedImageUrl?: string;
  datasetName?: string;
  imageWidth?: number;
  imageHeight?: number;
  processedTiles?: number;
  totalTiles?: number;
  processingTime?: number;
}

export type ViewMode = 'CURTAIN' | 'SIDE_BY_SIDE' | 'ENHANCED_ONLY' | 'ORIGINAL_ONLY';

export const ImageCurtainViewer: React.FC<ImageCurtainViewerProps> = ({
  originalImageUrl,
  enhancedImageUrl,
  datasetName = 'Lunar Surface Swath',
  imageWidth = 0,
  imageHeight = 0,
  processedTiles = 0,
  totalTiles = 0,
  processingTime = 0,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDraggingSlider, setIsDraggingSlider] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<ViewMode>('CURTAIN');

  // Unified Zoom & Pan
  const [zoom, setZoom] = useState<number>(1.0);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const panStartRef = useRef<{ x: number; y: number; startPanX: number; startPanY: number }>({
    x: 0,
    y: 0,
    startPanX: 0,
    startPanY: 0,
  });

  // Magnifier Loupe Mode
  const [isLoupeActive, setIsLoupeActive] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number; normX: number; normY: number }>({
    x: 0,
    y: 0,
    normX: 0.5,
    normY: 0.5,
  });

  // Visibility adjustments
  const [brightness, setBrightness] = useState<number>(105);
  const [contrast, setContrast] = useState<number>(115);

  const [origLoaded, setOrigLoaded] = useState<boolean>(false);
  const [enhLoaded, setEnhLoaded] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Reset image load states when URLs change
  useEffect(() => {
    setOrigLoaded(false);
    setEnhLoaded(false);
    setLoadError(null);
  }, [originalImageUrl, enhancedImageUrl]);

  // Clamp pan based on current zoom and container dimensions
  const clampPan = (newX: number, newY: number, targetZoom: number) => {
    if (!containerRef.current || targetZoom <= 1.0) {
      return { x: 0, y: 0 };
    }
    const rect = containerRef.current.getBoundingClientRect();
    const maxPanX = ((targetZoom - 1) * rect.width) / 2;
    const maxPanY = ((targetZoom - 1) * rect.height) / 2;
    return {
      x: Math.max(-maxPanX, Math.min(maxPanX, newX)),
      y: Math.max(-maxPanY, Math.min(maxPanY, newY)),
    };
  };

  // Slider divider dragging
  const handleDividerPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingSlider(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || isDraggingSlider) return;
    setIsPanning(true);
    panStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      startPanX: pan.x,
      startPanY: pan.y,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();

    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    const normX = Math.max(0, Math.min(1, clientX / Math.max(1, rect.width)));
    const normY = Math.max(0, Math.min(1, clientY / Math.max(1, rect.height)));

    setMousePos({ x: clientX, y: clientY, normX, normY });

    if (isDraggingSlider) {
      const newPos = Math.max(1, Math.min(99, (clientX / rect.width) * 100));
      setSliderPos(newPos);
      return;
    }

    if (isPanning && zoom > 1.0) {
      const dx = e.clientX - panStartRef.current.x;
      const dy = e.clientY - panStartRef.current.y;
      const nextX = panStartRef.current.startPanX + dx;
      const nextY = panStartRef.current.startPanY + dy;
      setPan(clampPan(nextX, nextY, zoom));
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDraggingSlider(false);
    setIsPanning(false);
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore pointer capture errors
    }
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.2 : 0.83;
    const nextZoom = Math.min(16.0, Math.max(1.0, parseFloat((zoom * zoomFactor).toFixed(2))));

    if (nextZoom === 1.0) {
      setZoom(1.0);
      setPan({ x: 0, y: 0 });
    } else {
      setZoom(nextZoom);
      setPan((currentPan) => clampPan(currentPan.x, currentPan.y, nextZoom));
    }
  };

  const handleDoubleClick = () => {
    if (zoom > 1.0) {
      setZoom(1.0);
      setPan({ x: 0, y: 0 });
    } else {
      setZoom(3.0);
    }
  };

  const setZoomPreset = (targetZoom: number) => {
    if (targetZoom === 1.0) {
      setZoom(1.0);
      setPan({ x: 0, y: 0 });
    } else {
      setZoom(targetZoom);
      setPan((currentPan) => clampPan(currentPan.x, currentPan.y, targetZoom));
    }
  };

  const handleResetView = () => {
    setZoom(1.0);
    setPan({ x: 0, y: 0 });
    setSliderPos(50);
    setBrightness(105);
    setContrast(115);
    setIsLoupeActive(false);
  };

  const filterStyle = {
    filter: `brightness(${brightness}%) contrast(${contrast}%)`,
  };

  const transformStyle = {
    transform: `translate3d(${pan.x}px, ${pan.y}px, 0px) scale(${zoom})`,
    transformOrigin: '50% 50%',
  };

  return (
    <div className="flex flex-col w-full rounded-lg bg-[#0c0c0e] border border-white/[0.08] overflow-hidden shadow-2xl">
      {/* Viewport Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#08080a] border-b border-white/[0.08] gap-3">
        {/* Left: View Mode Selection */}
        <div className="flex items-center gap-1 p-0.5 bg-[#141417] rounded-md border border-white/[0.06]">
          <button
            onClick={() => setViewMode('CURTAIN')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-all ${
              viewMode === 'CURTAIN'
                ? 'bg-zinc-100 text-zinc-950 font-medium shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Curtain Slider
          </button>

          <button
            onClick={() => setViewMode('SIDE_BY_SIDE')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-all ${
              viewMode === 'SIDE_BY_SIDE'
                ? 'bg-zinc-100 text-zinc-950 font-medium shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Side-by-Side
          </button>

          <button
            onClick={() => setViewMode('ENHANCED_ONLY')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-all ${
              viewMode === 'ENHANCED_ONLY'
                ? 'bg-zinc-100 text-zinc-950 font-medium shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            AI Enhanced
          </button>

          <button
            onClick={() => setViewMode('ORIGINAL_ONLY')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-all ${
              viewMode === 'ORIGINAL_ONLY'
                ? 'bg-zinc-100 text-zinc-950 font-medium shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Original
          </button>
        </div>

        {/* Center: Brightness & Contrast Controls */}
        <div className="flex items-center gap-4 bg-[#141417] rounded-md border border-white/[0.06] px-3.5 py-1.5 text-xs text-zinc-300">
          <div className="flex items-center gap-2" title="Adjust Radiance Brightness">
            <Sun className="w-3.5 h-3.5 text-zinc-400" />
            <input
              type="range"
              min="70"
              max="180"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="w-16 accent-zinc-300 cursor-pointer h-1.5 bg-zinc-800 rounded"
              title={`Brightness: ${brightness}%`}
            />
            <span className="text-[10px] font-mono text-zinc-400 min-w-[2rem]">{brightness}%</span>
          </div>

          <div className="flex items-center gap-2 pl-3 border-l border-white/[0.08]" title="Adjust Shadow/Highlight Contrast">
            <Contrast className="w-3.5 h-3.5 text-zinc-400" />
            <input
              type="range"
              min="80"
              max="200"
              value={contrast}
              onChange={(e) => setContrast(Number(e.target.value))}
              className="w-16 accent-zinc-300 cursor-pointer h-1.5 bg-zinc-800 rounded"
              title={`Contrast: ${contrast}%`}
            />
            <span className="text-[10px] font-mono text-zinc-400 min-w-[2rem]">{contrast}%</span>
          </div>
        </div>

        {/* Right: Ultra-Zoom & Tools */}
        <div className="flex items-center gap-2">
          {/* Zoom Preset Pills */}
          <div className="hidden lg:flex items-center gap-1 bg-[#141417] rounded-md border border-white/[0.06] p-0.5">
            {[1, 2, 4, 8, 16].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setZoomPreset(lvl)}
                className={`px-2 py-1 rounded-sm text-[11px] font-mono transition-all ${
                  Math.round(zoom) === lvl
                    ? 'bg-zinc-100 text-zinc-950 font-medium'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {lvl}x
              </button>
            ))}
          </div>

          {/* Stepper Zoom */}
          <div className="flex items-center gap-1 bg-[#141417] rounded-md border border-white/[0.06] p-0.5">
            <button
              onClick={() => {
                const next = Math.min(16.0, parseFloat((zoom * 1.3).toFixed(2)));
                setZoom(next);
                setPan((p) => clampPan(p.x, p.y, next));
              }}
              className="p-1.5 rounded-sm hover:bg-white/[0.06] text-zinc-300 hover:text-white transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>

            <span className="text-[11px] font-mono font-medium text-zinc-200 px-1 min-w-[2.6rem] text-center">
              {zoom.toFixed(1)}x
            </span>

            <button
              onClick={() => {
                const next = Math.max(1.0, parseFloat((zoom / 1.3).toFixed(2)));
                setZoom(next);
                setPan((p) => clampPan(p.x, p.y, next));
              }}
              className="p-1.5 rounded-sm hover:bg-white/[0.06] text-zinc-300 hover:text-white transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Loupe Lens Toggle */}
          <button
            onClick={() => setIsLoupeActive(!isLoupeActive)}
            className={`p-1.5 rounded-md border transition-all ${
              isLoupeActive
                ? 'bg-zinc-100 border-white text-zinc-950 font-medium shadow-sm'
                : 'bg-[#141417] border-white/[0.06] text-zinc-400 hover:text-zinc-200'
            }`}
            title="Toggle 4x Detail Inspection Lens"
          >
            <Search className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleResetView}
            className="p-1.5 rounded-md bg-[#141417] hover:bg-white/[0.06] border border-white/[0.06] text-zinc-400 hover:text-zinc-200 transition-colors"
            title="Reset View and Zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Viewport */}
      {viewMode === 'SIDE_BY_SIDE' ? (
        /* SIDE BY SIDE VIEW */
        <div
          ref={containerRef}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-[#050507] select-none touch-none overflow-hidden ${
            zoom > 1.0 ? (isPanning ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
          }`}
        >
          {/* Left: Original */}
          <div className="relative rounded-md overflow-hidden bg-black aspect-square border border-white/[0.08]">
            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-sm bg-black/80 backdrop-blur-sm border border-white/[0.08] text-[10px] font-mono uppercase tracking-wider text-zinc-400">
              Raw Swath Telemetry
            </div>
            {originalImageUrl ? (
              <div
                className="w-full h-full origin-center transition-transform duration-75 ease-out flex items-center justify-center"
                style={{ ...transformStyle, ...filterStyle }}
              >
                <img
                  src={originalImageUrl}
                  alt="Original Swath"
                  onLoad={() => setOrigLoaded(true)}
                  onError={() => setLoadError('Failed to load raw image')}
                  className={`w-full h-full object-contain pointer-events-none ${zoom > 2.5 ? 'image-rendering-pixelated' : ''}`}
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-600 text-xs font-mono">
                No Original Image Available
              </div>
            )}
          </div>

          {/* Right: AI Enhanced */}
          <div className="relative rounded-md overflow-hidden bg-black aspect-square border border-white/[0.08]">
            <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-sm bg-black/80 backdrop-blur-sm border border-white/[0.08] text-[10px] font-mono uppercase tracking-wider text-zinc-200 flex items-center gap-1.5">
              <span>AI Enhanced (Real-ESRGAN x4)</span>
            </div>
            {enhancedImageUrl ? (
              <div
                className="w-full h-full origin-center transition-transform duration-75 ease-out flex items-center justify-center"
                style={{ ...transformStyle, ...filterStyle }}
              >
                <img
                  src={enhancedImageUrl}
                  alt="AI Enhanced"
                  onLoad={() => setEnhLoaded(true)}
                  onError={() => setLoadError('Failed to load enhanced image')}
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-600 text-xs font-mono">
                No Enhanced Image Available
              </div>
            )}
          </div>
        </div>
      ) : (
        /* CURTAIN / SINGLE VIEW (CURTAIN, ENHANCED_ONLY, ORIGINAL_ONLY) */
        <div
          ref={containerRef}
          onWheel={handleWheel}
          onDoubleClick={handleDoubleClick}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#050507] overflow-hidden select-none touch-none ${
            isDraggingSlider
              ? 'cursor-ew-resize'
              : isLoupeActive
              ? 'cursor-crosshair'
              : zoom > 1.0
              ? isPanning
                ? 'cursor-grabbing'
                : 'cursor-grab'
              : 'cursor-default'
          }`}
        >
          {loadError && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 px-3.5 py-1.5 rounded-sm bg-[#18181b] border border-white/20 text-zinc-300 text-xs font-mono">
              {loadError}
            </div>
          )}

          {/* Canvas & Image Wrapper with Hardware Pan & Zoom */}
          <div
            className="absolute inset-0 origin-center transition-transform duration-75 ease-out"
            style={{ ...transformStyle, ...filterStyle }}
          >
            {/* Base Layer: AI Enhanced Image */}
            {(viewMode === 'CURTAIN' || viewMode === 'ENHANCED_ONLY') && enhancedImageUrl && (
              <img
                src={enhancedImageUrl}
                alt="AI Enhanced Surface"
                onLoad={() => setEnhLoaded(true)}
                onError={() => setLoadError('Failed to load enhanced image')}
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              />
            )}

            {/* Overlaid Clipped Layer: Original Image */}
            {(viewMode === 'CURTAIN' || viewMode === 'ORIGINAL_ONLY') && originalImageUrl && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: viewMode === 'CURTAIN' ? `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` : undefined,
                  width: '100%',
                  height: '100%',
                }}
              >
                <img
                  src={originalImageUrl}
                  alt="Original Raw Swath"
                  onLoad={() => setOrigLoaded(true)}
                  onError={() => setLoadError('Failed to load raw image')}
                  className={`w-full h-full object-contain pointer-events-none ${zoom > 2.5 ? 'image-rendering-pixelated' : ''}`}
                />
              </div>
            )}
          </div>

          {/* Curtain Divider Line & Handle */}
          {viewMode === 'CURTAIN' && (
            <div
              className="absolute top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-[1.5px] h-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
              <div
                onPointerDown={handleDividerPointerDown}
                className="absolute w-8 h-8 rounded-full bg-[#121215] border border-white/80 flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform shadow-2xl"
              >
                <div className="flex items-center gap-0.5">
                  <div className="w-0.5 h-3 bg-zinc-300 rounded-full" />
                  <div className="w-0.5 h-3 bg-zinc-300 rounded-full" />
                </div>
              </div>
            </div>
          )}

          {/* Loupe Lens Floating Magnifier */}
          {isLoupeActive && enhancedImageUrl && (
            <div
              className="absolute z-30 pointer-events-none w-48 h-48 rounded-full border-2 border-white/80 shadow-2xl overflow-hidden transform -translate-x-1/2 -translate-y-1/2 bg-black"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${enhancedImageUrl})`,
                  backgroundPosition: `${mousePos.normX * 100}% ${mousePos.normY * 100}%`,
                  backgroundSize: '400%',
                  backgroundRepeat: 'no-repeat',
                  ...filterStyle,
                }}
              />
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-sm bg-black/90 border border-white/20 text-[9px] font-mono text-zinc-200 uppercase tracking-wider shadow">
                4x Sensor Lens
              </div>
            </div>
          )}

          {/* Floating Mode Badges */}
          {(viewMode === 'CURTAIN' || viewMode === 'ORIGINAL_ONLY') && (
            <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-sm bg-black/80 backdrop-blur-md border border-white/[0.08] text-[10px] font-mono uppercase tracking-wider text-zinc-400">
              Original Swath
            </div>
          )}

          {(viewMode === 'CURTAIN' || viewMode === 'ENHANCED_ONLY') && (
            <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-sm bg-black/80 backdrop-blur-md border border-white/[0.08] text-[10px] font-mono uppercase tracking-wider text-zinc-200">
              AI Enhanced (4K)
            </div>
          )}

          {/* Zoom & Navigation Hint */}
          {zoom > 1.0 && (
            <div className="absolute bottom-4 right-4 z-10 px-2.5 py-1 rounded-sm bg-black/80 backdrop-blur-sm border border-white/[0.08] text-[10px] font-mono text-zinc-400">
              Drag to pan · Scroll to zoom · Double-click to reset
            </div>
          )}
        </div>
      )}

      {/* Footer Info Strip */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#08080a] border-t border-white/[0.08] text-xs text-zinc-400 gap-3 font-mono">
        <div className="flex items-center gap-4">
          <span>Swath: <span className="text-zinc-200">{datasetName}</span></span>
          {imageWidth > 0 && imageHeight > 0 && (
            <span>Array: <span className="text-zinc-200">{imageWidth.toLocaleString()} × {imageHeight.toLocaleString()} px</span></span>
          )}
          <span>Zoom: <span className="text-zinc-100 font-medium">{zoom.toFixed(1)}x</span></span>
        </div>

        <div className="flex items-center gap-4">
          {totalTiles > 0 && (
            <span>Tiles: <span className="text-zinc-200">{processedTiles} / {totalTiles}</span></span>
          )}
          {processingTime > 0 && (
            <span>Elapsed: <span className="text-zinc-200">{processingTime}s</span></span>
          )}
        </div>
      </div>
    </div>
  );
};

