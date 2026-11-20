import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, Tag, Check, Heart } from 'lucide-react';
import { CURATED_LOOKBOOKS } from '../data/curatedLookbooks';
import { THRIFT_ITEMS } from '../data/thriftItems';
import { formatIDR, calculateTotalCost, triggerSparkles } from '../utils/formatters';

export default function LookbookGallery({ onLoadLookbook }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const vibes = ['all', 'Parisian Chic', 'Royal Whimsy', 'Victorian Tea Party', 'Diva Extravaganza', 'Y2K Glitz', 'Garden Party'];

  const filteredLooks = activeFilter === 'all'
    ? CURATED_LOOKBOOKS
    : CURATED_LOOKBOOKS.filter((l) => l.vibe === activeFilter);

  const getItemById = (id) => THRIFT_ITEMS.find((item) => item.id === id);

  const handleApplyLook = (look) => {
    const fullOutfit = {
      head: getItemById(look.items.head),
      faceJewelry: getItemById(look.items.faceJewelry),
      upperBody: getItemById(look.items.upperBody),
      handBag: getItemById(look.items.handBag),
      lowerBody: getItemById(look.items.lowerBody),
      footwear: getItemById(look.items.footwear)
    };
    triggerSparkles();
    onLoadLookbook(fullOutfit);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-3 border border-purple-200">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curated Head-to-Toe Lookbooks</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Inspirasi Gaya <span className="text-fancy-pink italic">Très Magnifique</span>
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          Pilihan padu-padan outfit thrift lengkap dari para kurator busana eksentrik. Klik "Gunakan Look" untuk memodifikasi di Outfit Builder!
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 text-xs">
        {vibes.map((v) => (
          <button
            key={v}
            onClick={() => setActiveFilter(v)}
            className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
              activeFilter === v
                ? 'bg-fancy-pink text-white shadow-fancy scale-105'
                : 'bg-white border border-rose-200 text-slate-600 hover:bg-rose-50'
            }`}
          >
            {v === 'all' ? '✨ Semua Gaya' : v}
          </button>
        ))}
      </div>

      {/* Lookbooks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLooks.map((look) => {
          const headItem = getItemById(look.items.head);
          const topItem = getItemById(look.items.upperBody);
          const bottomItem = getItemById(look.items.lowerBody);
          const shoesItem = getItemById(look.items.footwear);
          const bagItem = getItemById(look.items.handBag);
          const jewelryItem = getItemById(look.items.faceJewelry);

          const fullItems = [headItem, jewelryItem, topItem, bagItem, bottomItem, shoesItem].filter(Boolean);
          const totalCost = fullItems.reduce((acc, i) => acc + i.price, 0);

          return (
            <div
              key={look.id}
              className="bg-white rounded-3xl overflow-hidden border border-rose-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                
                {/* Hero Showcase Image */}
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <img
                    src={topItem?.image || headItem?.image}
                    alt={look.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-fancy-pink/90 backdrop-blur-sm text-white text-xs font-bold shadow-sm">
                    {look.badge}
                  </div>

                  {/* Palette Dots */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 p-1 bg-black/40 backdrop-blur-sm rounded-full">
                    {look.dominantColors.map((c, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full border border-white/80"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-300">
                      {look.vibe}
                    </span>
                    <h3 className="font-serif text-lg font-bold leading-tight">
                      {look.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs text-rose-500 font-fancy text-base mb-2">
                    "{look.tagline}"
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {look.description}
                  </p>

                  {/* 6-Items Mini Preview */}
                  <div className="border-t border-b border-rose-100 py-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Rincian 6 Lapisan:
                    </span>
                    <div className="grid grid-cols-6 gap-1.5">
                      {fullItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="h-10 rounded-lg overflow-hidden bg-slate-100 border border-rose-100 relative"
                          title={`${idx + 1}. ${item.name}`}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total Cost */}
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">Estimasi Thrift Lengkap:</span>
                    <span className="font-serif text-base font-bold text-fancy-pink">
                      {formatIDR(totalCost)}
                    </span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => handleApplyLook(look)}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-500 via-fancy-pink to-purple-600 text-white font-bold text-xs shadow-md hover:shadow-fancy hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Gunakan di Outfit Builder</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
