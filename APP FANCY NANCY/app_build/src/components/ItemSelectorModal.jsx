import React, { useState } from 'react';
import { X, Check, Search, Tag, AlertCircle, Sparkles } from 'lucide-react';
import { THRIFT_ITEMS } from '../data/thriftItems';
import { formatIDR } from '../utils/formatters';

export default function ItemSelectorModal({ isOpen, onClose, category, selectedItem, onSelect }) {
  if (!isOpen || !category) return null;

  const [searchQuery, setSearchQuery] = useState('');
  const [activeAesthetic, setActiveAesthetic] = useState('all');

  const items = THRIFT_ITEMS.filter((item) => item.category === category.id);
  const aesthetics = ['all', ...new Set(items.map((i) => i.aesthetic))];

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.thriftSearchKeywords.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAesthetic = activeAesthetic === 'all' || item.aesthetic === activeAesthetic;
    return matchesSearch && matchesAesthetic;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col border border-rose-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50/50 border-b border-rose-100 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🎀</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                Pilih Item: {category.label}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {category.desc}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/80 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Aesthetic Filter */}
        <div className="p-4 border-b border-rose-100 bg-white space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Cari nama pakaian atau kata kunci thrift..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-rose-50/40 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-fancy-pink/30 focus:border-fancy-pink"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 font-medium mr-1">Vibe:</span>
            {aesthetics.map((aes) => (
              <button
                key={aes}
                onClick={() => setActiveAesthetic(aes)}
                className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-all ${
                  activeAesthetic === aes
                    ? 'bg-fancy-pink text-white shadow-sm'
                    : 'bg-rose-50 text-slate-600 hover:bg-rose-100'
                }`}
              >
                {aes === 'all' ? '✨ Semua' : aes}
              </button>
            ))}
          </div>
        </div>

        {/* Item List Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <p className="text-3xl mb-2">👒</p>
              <p className="font-medium text-slate-600">Tidak ada item yang cocok dengan pencarian.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredItems.map((item) => {
                const isSelected = selectedItem?.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      onSelect(category.id, item);
                      onClose();
                    }}
                    className={`group relative rounded-2xl p-3 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-fancy-pink bg-rose-50/50 shadow-fancy'
                        : 'border-rose-100 hover:border-rose-300 hover:shadow-md bg-white'
                    }`}
                  >
                    <div>
                      {/* Image Preview */}
                      <div className="relative h-44 rounded-xl overflow-hidden mb-3 bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-semibold text-white">
                          {item.aesthetic}
                        </div>
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-fancy-pink text-white flex items-center justify-center shadow-md">
                            <Check className="w-4 h-4 stroke-[3]" />
                          </div>
                        )}
                      </div>

                      {/* Title & Price */}
                      <h4 className="font-serif font-bold text-slate-900 text-sm leading-snug group-hover:text-fancy-pink transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs font-semibold text-fancy-pink mt-1">
                        Est. Thrift: {item.priceRange} ({formatIDR(item.price)})
                      </p>

                      {/* Fancy Nancy Fact */}
                      <p className="text-[11px] italic text-rose-500 mt-1.5 font-fancy text-base leading-tight">
                        "{item.fancyNancyFact}"
                      </p>
                    </div>

                    {/* Thrift Search Keywords Tag */}
                    <div className="mt-3 pt-2.5 border-t border-rose-100 text-[11px] text-slate-500">
                      <div className="flex items-start gap-1">
                        <Tag className="w-3 h-3 text-rose-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">
                          <strong className="text-slate-600">Keywords:</strong> {item.thriftSearchKeywords}
                        </span>
                      </div>
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
