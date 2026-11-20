import React from 'react';
import { X, Trash2, ArrowRight, Heart, Calendar, Sparkles } from 'lucide-react';
import { formatIDR, calculateTotalCost } from '../utils/formatters';

export default function SavedVaultModal({ isOpen, onClose, savedOutfits, onLoadOutfit, onDeleteOutfit }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-rose-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50 border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-2xl bg-rose-100 text-fancy-pink">
              <Heart className="w-5 h-5 fill-fancy-pink" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                My Fancy Thrift Vault
              </h3>
              <p className="text-xs text-rose-500 font-medium">
                {savedOutfits.length} Outfit Tersimpan di Ruang Busana Pribadi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {savedOutfits.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-rose-50 border border-rose-100 flex items-center justify-center text-3xl mx-auto">
                🎀
              </div>
              <h4 className="font-serif font-bold text-lg text-slate-700">Belum Ada Outfit Tersimpan</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Buka tab <strong>Outfit Builder</strong> dan klik tombol <strong>"Simpan ke Vault"</strong> untuk menyimpan kombinasi busana favoritmu!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {savedOutfits.map((saved) => {
                const total = calculateTotalCost(saved.outfit);
                const itemsList = [
                  saved.outfit.head,
                  saved.outfit.faceJewelry,
                  saved.outfit.upperBody,
                  saved.outfit.handBag,
                  saved.outfit.lowerBody,
                  saved.outfit.footwear
                ].filter(Boolean);

                return (
                  <div
                    key={saved.id}
                    className="p-4 rounded-2xl border border-rose-100 bg-rose-50/20 hover:bg-rose-50/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5 flex-1 min-w-0">
                      {/* Mini preview images */}
                      <div className="flex -space-x-3 overflow-hidden shrink-0">
                        {itemsList.slice(0, 4).map((item, idx) => (
                          <img
                            key={idx}
                            src={item.image}
                            alt={item.name}
                            className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-sm"
                          />
                        ))}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <Calendar className="w-3 h-3" />
                          <span>{saved.date}</span>
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm truncate mt-0.5">
                          {saved.title || 'Outfit Fancy Nancy'}
                        </h4>
                        <p className="text-xs font-bold text-fancy-pink">
                          Total: {formatIDR(total)} (6 Items)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                      <button
                        onClick={() => {
                          onLoadOutfit(saved.outfit);
                          onClose();
                        }}
                        className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-fancy-pink text-white text-xs font-bold shadow-sm hover:scale-105 transition-all flex items-center gap-1.5"
                      >
                        <span>Pakai di Builder</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onDeleteOutfit(saved.id)}
                        className="p-2 rounded-xl border border-rose-200 text-slate-400 hover:text-rose-600 hover:bg-rose-100 transition-colors"
                        title="Hapus dari Vault"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-rose-100 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
