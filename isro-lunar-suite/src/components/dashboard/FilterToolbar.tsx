import React from 'react';
import { FilterMode } from '../../types/lunar';

interface FilterToolbarProps {
  currentFilter: FilterMode;
  onSelectFilter: (filter: FilterMode) => void;
}

export const FilterToolbar: React.FC<FilterToolbarProps> = ({
  currentFilter,
  onSelectFilter,
}) => {
  const filters: Array<{ id: FilterMode; label: string }> = [
    { id: 'REGOLITH_MONO', label: 'Monochrome' },
    { id: 'IIRS_FALSE_COLOR', label: 'Infrared (2.9µm)' },
    { id: 'TOPO_SHADOW', label: 'Topography' },
    { id: 'ALBEDO_RATIO', label: 'Albedo Map' },
  ];

  return (
    <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs">
      {filters.map((f) => {
        const isActive = currentFilter === f.id;
        return (
          <button
            key={f.id}
            onClick={() => onSelectFilter(f.id)}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              isActive
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
};
