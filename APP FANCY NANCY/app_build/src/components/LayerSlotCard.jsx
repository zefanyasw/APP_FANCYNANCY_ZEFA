import React, { useState } from 'react';
import { 
  Crown, Sparkles, Shirt, ShoppingBag, Sparkle, Footprints, 
  RefreshCw, Info, Tag, CheckCircle2, ChevronDown, ChevronUp 
} from 'lucide-react';
import { formatIDR } from '../utils/formatters';

const ICON_MAP = {
  Crown: Crown,
  Sparkles: Sparkles,
  Shirt: Shirt,
  ShoppingBag: ShoppingBag,
  Sparkle: Sparkle,
  Footprints: Footprints
};

export default function LayerSlotCard({ category, item, onOpenSelector }) {
  const [showTips, setShowTips] = useState(false);
  const IconComponent = ICON_MAP[category.icon] || Sparkles;

  return (
    <div className="bg-white rounded-2xl p-4 border border-rose-200/80 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
      
      {/* Decorative colored left edge */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{ backgroundColor: item?.color || '#FF85A1' }}
      />

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        
        {/* Left: Category Icon & Item Preview */}
        <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
          
          {/* Thumbnail */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-rose-50 border border-rose-100 shrink-0">
            {item ? (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-rose-300">
                <IconComponent className="w-6 h-6" />
              </div>
            )}
            <div 
              className="absolute bottom-1 right-1 w-3 h-3 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: item?.color || '#CCC' }}
              title={`Warna: ${item?.color}`}
            />
          </div>

          {/* Details */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-wider uppercase text-rose-500 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100 flex items-center gap-1">
                <IconComponent className="w-3 h-3" />
                {category.label}
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                {item?.aesthetic}
              </span>
            </div>

            <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base leading-tight mt-1 truncate group-hover:text-fancy-pink transition-colors">
              {item ? item.name : 'Belum Dipilih'}
            </h4>

            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-xs font-bold text-fancy-pink">
                {item ? item.priceRange : '-'}
              </span>
              <span className="text-[11px] text-slate-400">
                ({item ? formatIDR(item.price) : 'Rp 0'})
              </span>
            </div>
          </div>

        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-rose-100">
          <button
            onClick={() => setShowTips(!showTips)}
            className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors ${
              showTips 
                ? 'bg-rose-100 text-fancy-pink' 
                : 'bg-rose-50 text-slate-600 hover:bg-rose-100 hover:text-fancy-pink'
            }`}
            title="Lihat kata kunci pencarian thrift dan tips bahan"
          >
            <Info className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tips</span>
            {showTips ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => onOpenSelector(category)}
            className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-fancy-pink text-white text-xs font-bold shadow-sm hover:shadow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Ganti</span>
          </button>
        </div>

      </div>

      {/* Expandable Thrift Hunting Tips & Keywords */}
      {showTips && item && (
        <div className="mt-3.5 pt-3 border-t border-rose-100/80 bg-rose-50/40 rounded-xl p-3 text-xs space-y-2 animate-fadeIn">
          <div>
            <span className="font-bold text-slate-700 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-fancy-pink" />
              Kata Kunci Hunting Thrift (Shopee / Carousell / Pasar):
            </span>
            <p className="text-slate-600 font-mono text-[11px] bg-white p-1.5 rounded-lg border border-rose-100 mt-1 select-all">
              {item.thriftSearchKeywords}
            </p>
          </div>

          <div>
            <span className="font-bold text-slate-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Tips Cek Kualitas Bahan Thrift:
            </span>
            <p className="text-slate-600 text-[11px] mt-0.5 leading-relaxed">
              {item.materialTip}
            </p>
          </div>

          <div className="pt-1 text-slate-500 italic text-[11px] font-fancy text-base">
            ✨ Nancy says: "{item.fancyNancyFact}"
          </div>
        </div>
      )}

    </div>
  );
}
