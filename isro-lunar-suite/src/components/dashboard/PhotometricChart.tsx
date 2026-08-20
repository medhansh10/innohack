import React, { useMemo } from 'react';
import { HapkeParameters } from '../../types/lunar';
import { generatePhaseCurveData } from '../../utils/hapkeEngine';

interface PhotometricChartProps {
  currentHapke: HapkeParameters;
  nominalIncidence: number;
}

export const PhotometricChart: React.FC<PhotometricChartProps> = ({
  currentHapke,
  nominalIncidence,
}) => {
  const points = useMemo(() => {
    return generatePhaseCurveData(currentHapke, nominalIncidence, 108);
  }, [currentHapke, nominalIncidence]);

  const maxReflectance = useMemo(() => {
    return Math.max(...points.map((p) => Math.max(p.theoreticalHapke, p.observedData))) * 1.15;
  }, [points]);

  const SVG_WIDTH = 500;
  const SVG_HEIGHT = 200;
  const PADDING = { top: 15, right: 20, bottom: 30, left: 45 };

  const plotWidth = SVG_WIDTH - PADDING.left - PADDING.right;
  const plotHeight = SVG_HEIGHT - PADDING.top - PADDING.bottom;

  const scaleX = (phase: number) => PADDING.left + (phase / 110) * plotWidth;
  const scaleY = (val: number) =>
    PADDING.top + plotHeight - (val / Math.max(0.1, maxReflectance)) * plotHeight;

  const hapkePath = useMemo(() => {
    return points.reduce((acc, p, i) => {
      const x = scaleX(p.phaseAngle);
      const y = scaleY(p.theoreticalHapke);
      return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
    }, '');
  }, [points, maxReflectance]);

  return (
    <div className="flex flex-col rounded-2xl bg-[#0d131f] border border-slate-800 p-5 space-y-3 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
        <div>
          <h3 className="text-sm font-semibold text-slate-100">
            Reflectance Response
          </h3>
          <p className="text-xs text-slate-400">
            Bidirectional reflectance (I/F) vs. phase angle (α)
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 bg-sky-400 rounded-full" />
            <span>Fitted Model</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Sample Points</span>
          </div>
        </div>
      </div>

      <div className="w-full aspect-[2.5/1] bg-[#090e18] rounded-xl border border-slate-800/80 p-2">
        <svg viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} className="w-full h-full select-none">
          {/* X Grid */}
          {[0, 30, 60, 90].map((alpha) => {
            const x = scaleX(alpha);
            return (
              <g key={`gx-${alpha}`}>
                <line
                  x1={x}
                  y1={PADDING.top}
                  x2={x}
                  y2={SVG_HEIGHT - PADDING.bottom}
                  stroke="#1e293b"
                />
                <text
                  x={x}
                  y={SVG_HEIGHT - PADDING.bottom + 14}
                  fill="#64748b"
                  fontSize="9"
                  textAnchor="middle"
                >
                  {alpha}°
                </text>
              </g>
            );
          })}

          {/* Y Grid */}
          {[0, 0.1, 0.2].map((val) => {
            if (val > maxReflectance) return null;
            const y = scaleY(val);
            return (
              <g key={`gy-${val}`}>
                <line
                  x1={PADDING.left}
                  y1={y}
                  x2={SVG_WIDTH - PADDING.right}
                  y2={y}
                  stroke="#1e293b"
                />
                <text
                  x={PADDING.left - 6}
                  y={y + 3}
                  fill="#64748b"
                  fontSize="9"
                  textAnchor="end"
                >
                  {val.toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* Model Curve */}
          <path
            d={hapkePath}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
          />

          {/* Observed Points */}
          {points
            .filter((_, idx) => idx % 3 === 0)
            .map((p, idx) => (
              <circle
                key={`pt-${idx}`}
                cx={scaleX(p.phaseAngle)}
                cy={scaleY(p.observedData)}
                r={2}
                fill="#94a3b8"
              />
            ))}
        </svg>
      </div>
    </div>
  );
};
