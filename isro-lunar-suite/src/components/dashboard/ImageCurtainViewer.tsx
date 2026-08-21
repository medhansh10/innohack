import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Columns,
  SplitSquareVertical,
  Sparkles,
  Image as ImageIcon,
  Loader2,
  Sun,
  Contrast,
  Search,
  Maximize2
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

type ViewMode = 'CURTAIN' | 'SIDE_BY_SIDE' | 'ENHANCED_ONLY' | 'ORIGINAL_ONLY';

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
  const rawCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const enhancedCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDraggingSlider, setIsDraggingSlider] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<ViewMode>('CURTAIN');

  // Ultra-Zoom Range (1x to 16x)
  const [zoom, setZoom] = useState<number>(1.0);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [panStart, setPanStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Magnifier Loupe Mode
  const [isLoupeActive, setIsLoupeActive] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number; normX: number; normY: number }>({
    x: 0,
    y: 0,
    normX: 0.5,
    normY: 0.5,
  });

  // Interactive visibility adjustments
  const [brightness, setBrightness] = useState<number>(105);
  const [contrast, setContrast] = useState<number>(115);

  const [loadedOriginal, setLoadedOriginal] = useState<HTMLImageElement | null>(null);
  const [loadedEnhanced, setLoadedEnhanced] = useState<HTMLImageElement | null>(null);
  const [isLoadingImages, setIsLoadingImages] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const CANVAS_SIZE = 2048;

  // Pre-load images once whenever URLs change
  useEffect(() => {
    if (!originalImageUrl && !enhancedImageUrl) return;

    setIsLoadingImages(true);
    setLoadError(null);

    const loadImg = (url: string) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image from ${url}`));
        img.src = `${url}?t=${Date.now()}`;
      });

    const promises: Promise<HTMLImageElement>[] = [];
    if (originalImageUrl) promises.push(loadImg(originalImageUrl));
    if (enhancedImageUrl) promises.push(loadImg(enhancedImageUrl));

    Promise.all(promises)
      .then(([orig, enh]) => {
        setLoadedOriginal(orig || null);
        setLoadedEnhanced(enh || null);
        setIsLoadingImages(false);
      })
      .catch((err) => {
        console.warn('Image preloading error:', err);
        setLoadError('Failed to fetch image files from backend.');
        setIsLoadingImages(false);
      });
  }, [originalImageUrl, enhancedImageUrl]);

  const drawCanvases = useCallback(() => {
    const rawCanvas = rawCanvasRef.current;
    const enhancedCanvas = enhancedCanvasRef.current;
    if (!rawCanvas || !enhancedCanvas) return;

    const rawCtx = rawCanvas.getContext('2d');
    const enhancedCtx = enhancedCanvas.getContext('2d');
    if (!rawCtx || !enhancedCtx) return;

    // At higher zoom levels, raw image shows sensor pixelation while AI enhanced stays sub-pixel sharp
    rawCtx.imageSmoothingEnabled = zoom <= 2.5;
    if (zoom > 2.5) {
      rawCtx.imageSmoothingQuality = 'low';
    }

    enhancedCtx.imageSmoothingEnabled = true;
    enhancedCtx.imageSmoothingQuality = 'high';

    const drawToCanvas = (ctx: CanvasRenderingContext2D, img: HTMLImageElement | null, width: number, height: number, label: string) => {
      ctx.clearRect(0, 0, width, height);

      if (img && img.naturalWidth > 0) {
        ctx.drawImage(img, 0, 0, width, height);
      } else {
        ctx.fillStyle = '#0b0f19';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#64748b';
        ctx.font = '32px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label, width / 2, height / 2);
      }
    };

    drawToCanvas(rawCtx, loadedOriginal, rawCanvas.width, rawCanvas.height, 'Original Imagery');
    drawToCanvas(enhancedCtx, loadedEnhanced, enhancedCanvas.width, enhancedCanvas.height, 'AI Enhanced Surface');
  }, [loadedOriginal, loadedEnhanced, zoom]);

  useEffect(() => {
    drawCanvases();
  }, [drawCanvases]);

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
    const normX = Math.max(0, Math.min(1, clientX / rect.width));
    const normY = Math.max(0, Math.min(1, clientY / rect.height));

    setMousePos({ x: clientX, y: clientY, normX, normY });

    if (isDraggingSlider) {
      const newPos = Math.max(2, Math.min(98, (clientX / rect.width) * 100));
      setSliderPos(newPos);
      return;
    }

    if (isPanning) {
      setPan({
        x: clientX - panStart.x,
        y: clientY - panStart.y,
      });
    }
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

  // Cursor-centered Mouse Wheel Zoom
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;

    const zoomFactor = e.deltaY < 0 ? 1.25 : 0.8;
    const nextZoom = Math.min(16.0, Math.max(1.0, parseFloat((zoom * zoomFactor).toFixed(2))));

    if (nextZoom === 1.0) {
      setZoom(1.0);
      setPan({ x: 0, y: 0 });
      return;
    }

    // Adjust pan so zoom focuses on the cursor position
    const ratio = nextZoom / zoom;
    const newPanX = cursorX - (cursorX - pan.x) * ratio;
    const newPanY = cursorY - (cursorY - pan.y) * ratio;

    setZoom(nextZoom);
    setPan({ x: newPanX, y: newPanY });
  };

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoom > 1.0) {
      setZoom(1.0);
      setPan({ x: 0, y: 0 });
    } else {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const cursorX = e.clientX - rect.left;
      const cursorY = e.clientY - rect.top;

      setZoom(4.0);
      setPan({
        x: rect.width / 2 - cursorX * 4,
        y: rect.height / 2 - cursorY * 4,
      });
    }
  };

  const setZoomPreset = (targetZoom: number) => {
    if (targetZoom === 1.0) {
      setZoom(1.0);
      setPan({ x: 0, y: 0 });
    } else {
      setZoom(targetZoom);
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

  return (
    <div className="flex flex-col w-full rounded-2xl bg-[#090d16] border border-slate-800/80 overflow-hidden shadow-2xl">
      {/* Viewport Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3 bg-[#060911] border-b border-slate-800/80 gap-3">
        {/* Left: View Mode Selection */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
          <button
            onClick={() => setViewMode('CURTAIN')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              viewMode === 'CURTAIN'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <SplitSquareVertical className="w-3.5 h-3.5" />
            <span>Curtain Slider</span>
          </button>

          <button
            onClick={() => setViewMode('SIDE_BY_SIDE')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              viewMode === 'SIDE_BY_SIDE'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            <span>Side-by-Side</span>
          </button>

          <button
            onClick={() => setViewMode('ENHANCED_ONLY')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              viewMode === 'ENHANCED_ONLY'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Enhanced</span>
          </button>

          <button
            onClick={() => setViewMode('ORIGINAL_ONLY')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              viewMode === 'ORIGINAL_ONLY'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Original</span>
          </button>
        </div>

        {/* Center: Brightness & Contrast Controls */}
        <div className="flex items-center gap-4 bg-slate-900/90 rounded-xl border border-slate-800 px-3 py-1.5 text-xs text-slate-300">
          <div className="flex items-center gap-2" title="Adjust Brightness">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <input
              type="range"
              min="70"
              max="180"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="w-16 accent-sky-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
              title={`Brightness: ${brightness}%`}
            />
            <span className="text-[10px] font-mono text-slate-400 min-w-[2rem]">{brightness}%</span>
          </div>

          <div className="flex items-center gap-2 pl-3 border-l border-slate-800" title="Adjust Contrast">
            <Contrast className="w-3.5 h-3.5 text-sky-400" />
            <input
              type="range"
              min="80"
              max="200"
              value={contrast}
              onChange={(e) => setContrast(Number(e.target.value))}
              className="w-16 accent-sky-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
              title={`Contrast: ${contrast}%`}
            />
            <span className="text-[10px] font-mono text-slate-400 min-w-[2rem]">{contrast}%</span>
          </div>
        </div>

        {/* Right: Ultra-Zoom & Tools */}
        <div className="flex items-center gap-2">
          {/* Zoom Preset Pills */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/90 rounded-xl border border-slate-800 p-1">
            {[1, 2, 4, 8, 16].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setZoomPreset(lvl)}
                className={`px-2 py-1 rounded-lg text-[11px] font-mono font-medium transition-all ${
                  Math.round(zoom) === lvl
                    ? 'bg-sky-500 text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {lvl}x
              </button>
            ))}
          </div>

          {/* Stepper Zoom */}
          <div className="flex items-center gap-1 bg-slate-900/90 rounded-xl border border-slate-800 p-1">
            <button
              onClick={() => setZoom((z) => Math.min(16.0, parseFloat((z * 1.3).toFixed(2))))}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono font-semibold text-sky-400 px-1 min-w-[2.8rem] text-center">
              {zoom.toFixed(1)}x
            </span>

            <button
              onClick={() =>
                setZoom((z) => {
                  const next = Math.max(1.0, parseFloat((z / 1.3).toFixed(2)));
                  if (next === 1.0) setPan({ x: 0, y: 0 });
                  return next;
                })
              }
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
          </div>

          {/* Loupe Lens Toggle */}
          <button
            onClick={() => setIsLoupeActive(!isLoupeActive)}
            className={`p-2 rounded-xl border transition-all ${
              isLoupeActive
                ? 'bg-sky-500 border-sky-400 text-white shadow-md shadow-sky-500/25'
                : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
            title="Toggle 4x Detail Magnifier Lens"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={handleResetView}
            className="p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Reset View and Zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Canvas Viewport */}
      {viewMode === 'SIDE_BY_SIDE' ? (
        /* SIDE BY SIDE VIEW */
        <div
          ref={containerRef}
          onWheel={handleWheel}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-[#05070d] cursor-grab active:cursor-grabbing select-none"
        >
          {/* Left: Original */}
          <div className="relative rounded-xl overflow-hidden bg-black aspect-square border border-slate-800/80 shadow-lg">
            <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-md bg-slate-950/85 backdrop-blur-sm border border-slate-800 text-xs font-semibold text-slate-300">
              Raw / Original Swath (1x Sensor)
            </div>
            {originalImageUrl ? (
              <div
                className="w-full h-full origin-center transition-transform duration-75 ease-out"
                style={{
                  transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                  ...filterStyle,
                }}
              >
                <img
                  src={originalImageUrl}
                  alt="Original Swath"
                  className={`w-full h-full object-contain bg-black ${zoom > 2.5 ? 'image-rendering-pixelated' : ''}`}
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm">
                No Original Image
              </div>
            )}
          </div>

          {/* Right: AI Enhanced */}
          <div className="relative rounded-xl overflow-hidden bg-black aspect-square border border-sky-500/30 shadow-lg">
            <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-md bg-sky-950/85 backdrop-blur-sm border border-sky-500/40 text-xs font-semibold text-sky-300 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>AI Enhanced (4K Super-Resolution)</span>
            </div>
            {enhancedImageUrl ? (
              <div
                className="w-full h-full origin-center transition-transform duration-75 ease-out"
                style={{
                  transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                  ...filterStyle,
                }}
              >
                <img
                  src={enhancedImageUrl}
                  alt="AI Enhanced"
                  className="w-full h-full object-contain bg-black"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm">
                No Enhanced Image
              </div>
            )}
          </div>
        </div>
      ) : (
        /* CURTAIN / SINGLE VIEW */
        <div
          ref={containerRef}
          onWheel={handleWheel}
          onDoubleClick={handleDoubleClick}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            setIsDraggingSlider(false);
            setIsPanning(false);
          }}
          className={`relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#05070d] overflow-hidden select-none ${
            isPanning ? 'cursor-grabbing' : isDraggingSlider ? 'cursor-ew-resize' : isLoupeActive ? 'cursor-crosshair' : 'cursor-grab'
          }`}
        >
          {isLoadingImages && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-xs text-sky-400 gap-2">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="text-xs font-mono">Loading high-resolution layers…</span>
            </div>
          )}

          {loadError && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-lg bg-rose-950/90 border border-rose-800 text-rose-300 text-xs">
              {loadError}
            </div>
          )}

          <div
            className="absolute inset-0 origin-center transition-transform duration-75 ease-out"
            style={{
              transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
              ...filterStyle,
            }}
          >
            {/* Enhanced Layer */}
            {(viewMode === 'CURTAIN' || viewMode === 'ENHANCED_ONLY') && (
              <canvas
                ref={enhancedCanvasRef}
                width={CANVAS_SIZE}
                height={CANVAS_SIZE}
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}

            {/* Original Layer (Clipped when in CURTAIN mode) */}
            {(viewMode === 'CURTAIN' || viewMode === 'ORIGINAL_ONLY') && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: viewMode === 'CURTAIN' ? `${sliderPos}%` : '100%' }}
              >
                <canvas
                  ref={rawCanvasRef}
                  width={CANVAS_SIZE}
                  height={CANVAS_SIZE}
                  className="absolute inset-0 w-full h-full object-contain max-w-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                />
              </div>
            )}
          </div>

          {/* Curtain Divider Line */}
          {viewMode === 'CURTAIN' && (
            <div
              className="absolute top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-[2px] h-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
              <div
                onMouseDown={handleDividerMouseDown}
                className="absolute w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center pointer-events-auto cursor-ew-resize shadow-2xl hover:scale-110 transition-transform"
              >
                <div className="w-3 h-0.5 bg-white rounded-full" />
              </div>
            </div>
          )}

          {/* Loupe Lens Floating Magnifier */}
          {isLoupeActive && loadedEnhanced && (
            <div
              className="absolute z-30 pointer-events-none w-48 h-48 rounded-full border-2 border-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.5)] overflow-hidden transform -translate-x-1/2 -translate-y-1/2 bg-black"
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
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/80 border border-sky-500/50 text-[9px] font-mono text-sky-300">
                4x Super-Res Lens
              </div>
            </div>
          )}

          {/* Floating Badges */}
          {(viewMode === 'CURTAIN' || viewMode === 'ORIGINAL_ONLY') && (
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs font-semibold text-slate-200 shadow-lg">
              Original Imagery {zoom > 2.5 && <span className="text-amber-400 ml-1">(Sensor Pixels)</span>}
            </div>
          )}

          {(viewMode === 'CURTAIN' || viewMode === 'ENHANCED_ONLY') && (
            <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-sky-950/85 backdrop-blur-md border border-sky-500/40 text-xs font-semibold text-sky-300 shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Enhanced (4K Super-Res)</span>
            </div>
          )}

          {/* Zoom hint badge */}
          {zoom > 1.0 && (
            <div className="absolute bottom-4 right-4 z-10 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[10px] font-mono text-slate-400">
              Drag to pan · Scroll wheel to zoom · Double-click to reset
            </div>
          )}
        </div>
      )}

      {/* Footer Info Strip */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3 bg-[#060911] border-t border-slate-800/80 text-xs text-slate-400 gap-3 font-mono">
        <div className="flex items-center gap-4">
          <span>Swath: <span className="text-slate-200">{datasetName}</span></span>
          {imageWidth > 0 && imageHeight > 0 && (
            <span>Full Resolution: <span className="text-slate-200">{imageWidth.toLocaleString()} × {imageHeight.toLocaleString()} px</span></span>
          )}
          <span>Zoom: <span className="text-sky-400 font-semibold">{zoom.toFixed(1)}x</span></span>
        </div>

        <div className="flex items-center gap-4">
          {totalTiles > 0 && (
            <span>Tiles Processed: <span className="text-slate-200">{processedTiles} / {totalTiles}</span></span>
          )}
          {processingTime > 0 && (
            <span>Time: <span className="text-sky-400">{processingTime}s</span></span>
          )}
        </div>
      </div>
    </div>
  );
};
