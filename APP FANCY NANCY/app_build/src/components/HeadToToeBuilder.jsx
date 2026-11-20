import React, { useState } from 'react';
import { Sparkles, Dices, RefreshCcw, Layers } from 'lucide-react';
import OutfitPreview from './OutfitPreview';
import LayerSlotCard from './LayerSlotCard';
import ItemSelectorModal from './ItemSelectorModal';
import { THRIFT_CATEGORIES } from '../data/thriftItems';

export default function HeadToToeBuilder({
  outfit,
  onUpdateSlot,
  onRandomize,
  onSaveOutfit,
  isSaved,
  onReset
}) {
  const [selectedCategoryForModal, setSelectedCategoryForModal] = useState(null);

  const handleOpenSelector = (category) => {
    setSelectedCategoryForModal(category);
  };

  const handleCloseSelector = () => {
    setSelectedCategoryForModal(null);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Intro Banner */}
      <div className="text-center max-w-3xl mx-auto pt-2 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-fancy-pink text-xs font-bold mb-3 border border-rose-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Head-to-Toe Styling Engine</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Outfit Thrift <span className="text-fancy-pink italic">Fancy Nancy</span>
        </h1>
        <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Kombinasi busana preloved eksentrik, berkelas, dan penuh pesona dari atas kepala sampai ujung kaki. Temukan inspirasi & kata kunci berburu di pasar loak!
        </p>
      </div>

      {/* Main Builder Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (Sticky Preview & Summary) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
          <OutfitPreview
            outfit={outfit}
            categories={THRIFT_CATEGORIES}
            onRandomize={onRandomize}
            onSaveOutfit={onSaveOutfit}
            isSaved={isSaved}
            onOpenSelector={handleOpenSelector}
          />
        </div>

        {/* Right Column (6 Modular Layer Slots) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between px-2 pb-1">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-fancy-pink" />
              <h2 className="font-serif font-bold text-lg text-slate-900">
                Pilih Lapisan Busana (6 Layers)
              </h2>
            </div>
            <button
              onClick={onReset}
              className="text-xs font-semibold text-rose-500 hover:text-fancy-pink flex items-center gap-1 hover:underline"
            >
              <RefreshCcw className="w-3 h-3" />
              Reset ke Default
            </button>
          </div>

          <div className="space-y-3">
            {THRIFT_CATEGORIES.map((cat) => (
              <LayerSlotCard
                key={cat.id}
                category={cat}
                item={outfit[cat.id]}
                onOpenSelector={handleOpenSelector}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Item Selector Modal */}
      <ItemSelectorModal
        isOpen={!!selectedCategoryForModal}
        category={selectedCategoryForModal}
        selectedItem={selectedCategoryForModal ? outfit[selectedCategoryForModal.id] : null}
        onClose={handleCloseSelector}
        onSelect={(catId, item) => onUpdateSlot(catId, item)}
      />

    </div>
  );
}
