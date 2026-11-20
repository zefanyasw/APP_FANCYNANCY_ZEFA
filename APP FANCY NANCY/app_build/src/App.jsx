import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeadToToeBuilder from './components/HeadToToeBuilder';
import LookbookGallery from './components/LookbookGallery';
import ThriftCheatSheet from './components/ThriftCheatSheet';
import SavedVaultModal from './components/SavedVaultModal';
import { THRIFT_ITEMS } from './data/thriftItems';
import { generateRandomOutfit, triggerSparkles } from './utils/formatters';

const DEFAULT_OUTFIT = {
  head: THRIFT_ITEMS.find((i) => i.id === 'head-1'),
  faceJewelry: THRIFT_ITEMS.find((i) => i.id === 'jewelry-1'),
  upperBody: THRIFT_ITEMS.find((i) => i.id === 'top-1'),
  handBag: THRIFT_ITEMS.find((i) => i.id === 'bag-1'),
  lowerBody: THRIFT_ITEMS.find((i) => i.id === 'bottom-1'),
  footwear: THRIFT_ITEMS.find((i) => i.id === 'shoes-1')
};

export default function App() {
  const [activeTab, setActiveTab] = useState('builder');
  const [currentOutfit, setCurrentOutfit] = useState(DEFAULT_OUTFIT);
  const [savedOutfits, setSavedOutfits] = useState([]);
  const [isVaultOpen, setIsVaultOpen] = useState(false);

  // Load saved outfits from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('fancy_thrift_vault');
      if (stored) {
        setSavedOutfits(JSON.parse(stored));
      }
    } catch (err) {
      console.error('Error loading vault:', err);
    }
  }, []);

  // Sync saved outfits to localStorage
  const updateSavedOutfits = (newList) => {
    setSavedOutfits(newList);
    try {
      localStorage.setItem('fancy_thrift_vault', JSON.stringify(newList));
    } catch (err) {
      console.error('Error saving to localStorage:', err);
    }
  };

  // Check if current combination is already saved
  const isCurrentOutfitSaved = savedOutfits.some((saved) => {
    return (
      saved.outfit.head?.id === currentOutfit.head?.id &&
      saved.outfit.faceJewelry?.id === currentOutfit.faceJewelry?.id &&
      saved.outfit.upperBody?.id === currentOutfit.upperBody?.id &&
      saved.outfit.handBag?.id === currentOutfit.handBag?.id &&
      saved.outfit.lowerBody?.id === currentOutfit.lowerBody?.id &&
      saved.outfit.footwear?.id === currentOutfit.footwear?.id
    );
  });

  const handleUpdateSlot = (categoryId, item) => {
    setCurrentOutfit((prev) => ({
      ...prev,
      [categoryId]: item
    }));
  };

  const handleRandomize = () => {
    const random = generateRandomOutfit();
    setCurrentOutfit(random);
    triggerSparkles();
  };

  const handleReset = () => {
    setCurrentOutfit(DEFAULT_OUTFIT);
  };

  const handleSaveOutfit = () => {
    if (isCurrentOutfitSaved) return;

    const newEntry = {
      id: 'outfit-' + Date.now(),
      title: `${currentOutfit.upperBody?.name || 'Outfit'} & ${currentOutfit.lowerBody?.name || 'Tutu'}`,
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      outfit: { ...currentOutfit }
    };

    updateSavedOutfits([newEntry, ...savedOutfits]);
  };

  const handleDeleteSavedOutfit = (id) => {
    const filtered = savedOutfits.filter((item) => item.id !== id);
    updateSavedOutfits(filtered);
  };

  const handleLoadOutfit = (outfit) => {
    setCurrentOutfit(outfit);
    setActiveTab('builder');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9FA]">
      
      {/* Top Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onRandomize={handleRandomize}
        savedCount={savedOutfits.length}
        onOpenVault={() => setIsVaultOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === 'builder' && (
          <HeadToToeBuilder
            outfit={currentOutfit}
            onUpdateSlot={handleUpdateSlot}
            onRandomize={handleRandomize}
            onSaveOutfit={handleSaveOutfit}
            isSaved={isCurrentOutfitSaved}
            onReset={handleReset}
          />
        )}

        {activeTab === 'lookbooks' && (
          <LookbookGallery
            onLoadLookbook={handleLoadOutfit}
          />
        )}

        {activeTab === 'cheatsheet' && (
          <ThriftCheatSheet />
        )}
      </main>

      {/* Saved Outfits Vault Modal */}
      <SavedVaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
        savedOutfits={savedOutfits}
        onLoadOutfit={handleLoadOutfit}
        onDeleteOutfit={handleDeleteSavedOutfit}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-rose-200/80 py-8 px-4 sm:px-6 mt-16 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-2xl">
            <span>✨</span>
            <span className="font-serif font-black text-slate-800">Très Chic Thrifter</span>
            <span>🎀</span>
          </div>
          <p className="font-fancy text-lg text-rose-500 italic">
            "Anyone can be ordinary, but it takes courage, creativity, and a touch of vintage flair to be fancy!"
          </p>
          <div className="text-xs text-slate-400">
            Aplikasi Referensi Outfit Thrift Fancy Nancy dari Ujung Kepala Sampai Ujung Kaki • Dibangun dengan React & Tailwind CSS
          </div>
        </div>
      </footer>

    </div>
  );
}
