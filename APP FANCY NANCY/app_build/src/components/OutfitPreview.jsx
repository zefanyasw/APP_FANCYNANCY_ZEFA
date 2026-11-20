import React, { useState } from 'react';
import { 
  Sparkles, Bookmark, Share2, Dices, RotateCcw, 
  Check, DollarSign, Heart, ExternalLink, ShieldCheck 
} from 'lucide-react';
import { 
  formatIDR, calculateTotalCost, generateShareText, triggerSparkles 
} from '../utils/formatters';

export default function OutfitPreview({ 
  outfit, 
  onRandomize, 
  onSaveOutfit, 
  isSaved,
  onOpenSelector,
  categories 
}) {
  const [copied, setCopied] = useState(false);
  const totalCost = calculateTotalCost(outfit);
  const estimatedRetailCost = totalCost * 4.5; // retail comparison
  const savings = estimatedRetailCost - totalCost;

  const handleCopy = () => {
    const text = generateShareText(outfit);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSave = () => {
    onSaveOutfit();
    triggerSparkles();
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-rose-200/90 shadow-fancy relative overflow-hidden">
      
      {/* Decorative Background Glow */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-pink-100 rounded-full blur-3xl pointer-events-none opacity-60" />
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-amber-100 rounded-full blur-3xl pointer-events-none opacity-60" />

      {/* Header Badge */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-rose-100 text-fancy-pink">
            <Sparkles className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-serif font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
              Head-to-Toe Mannequin
            </h3>
            <p className="text-xs text-rose-500 font-medium">
              Dari Ujung Kepala Hingga Ujung Kaki
            </p>
          </div>
        </div>

        {/* Color Palette Dots */}
        <div className="flex items-center gap-1.5 p-1.5 bg-rose-50 rounded-full border border-rose-100" title="Palet Warna Outfit">
          {categories.map((cat) => {
            const item = outfit[cat.id];
            return (
              <span
                key={cat.id}
                className="w-3.5 h-3.5 rounded-full border border-white shadow-sm"
                style={{ backgroundColor: item?.color || '#FF85A1' }}
              />
            );
          })}
        </div>
      </div>

      {/* Visual Head-to-Toe Stack Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 relative z-10">
        {categories.map((cat, idx) => {
          const item = outfit[cat.id];
          return (
            <div
              key={cat.id}
              onClick={() => onOpenSelector(cat)}
              className="group relative rounded-2xl overflow-hidden bg-rose-50/50 border border-rose-200/80 hover:border-fancy-pink cursor-pointer transition-all hover:shadow-md flex flex-col"
            >
              <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-100">
                <img
                  src={item?.image}
                  alt={item?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-bold text-white flex items-center gap-1">
                  #{idx + 1}
                </div>
              </div>
              <div className="p-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block">
                    {cat.label.replace(/^\d+\.\s*/, '')}
                  </span>
                  <p className="font-serif font-bold text-xs text-slate-800 line-clamp-1 group-hover:text-fancy-pink">
                    {item?.name}
                  </p>
                </div>
                <p className="text-[11px] font-bold text-fancy-pink mt-1">
                  {item ? formatIDR(item.price) : 'Rp 0'}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Budget & Savings Breakdown Box */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-50 via-amber-50/40 to-pink-50 border border-rose-200/80 mb-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Total Estimasi Biaya Thrift (6 Items)
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="font-serif text-3xl font-black text-fancy-pink">
                {formatIDR(totalCost)}
              </span>
              <span className="text-xs line-through text-slate-400">
                Retail Baru: {formatIDR(estimatedRetailCost)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Hemat {formatIDR(savings)} via Thrifting!</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2.5 relative z-10">
        <button
          onClick={handleSave}
          className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm transition-all shadow-sm ${
            isSaved
              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
              : 'bg-fancy-pink text-white hover:bg-rose-600 shadow-fancy'
          }`}
        >
          {isSaved ? <Check className="w-4 h-4" /> : <Heart className="w-4 h-4" />}
          <span>{isSaved ? 'Tersimpan di Vault' : 'Simpan ke Vault'}</span>
        </button>

        <button
          onClick={handleCopy}
          className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-rose-200 text-slate-700 hover:text-fancy-pink hover:bg-rose-50 font-bold text-sm transition-all shadow-sm"
          title="Salin rincian outfit untuk dibagikan ke medsos"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
          <span>{copied ? 'Tersalin!' : 'Bagikan Outfit'}</span>
        </button>

        <button
          onClick={onRandomize}
          className="p-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-sm transition-all shadow-sm hover:scale-105 active:scale-95"
          title="Acak Semua Item Sekali Klik"
        >
          <Dices className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
