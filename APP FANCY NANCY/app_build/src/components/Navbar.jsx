import React from 'react';
import { Sparkles, Dices, BookmarkHeart, Compass, Shirt, BookOpen, Crown } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onRandomize, savedCount, onOpenVault }) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-rose-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Tagline */}
          <div 
            onClick={() => setActiveTab('builder')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-fancy-pink via-rose-400 to-amber-300 flex items-center justify-center shadow-fancy text-white text-2xl group-hover:scale-105 transition-transform">
              🎀
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-slate-900 group-hover:text-fancy-pink transition-colors">
                  Très Chic
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-rose-100 text-fancy-pink font-semibold border border-rose-200 hidden sm:inline-block">
                  Fancy Nancy Style
                </span>
              </div>
              <p className="text-xs text-rose-500 font-medium tracking-wide">
                Head-to-Toe Thrift & Preloved Outfit Guide
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 bg-rose-50/70 border border-rose-200/60 rounded-2xl">
            <button
              onClick={() => setActiveTab('builder')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'builder'
                  ? 'bg-white text-fancy-pink shadow-sm border border-rose-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-rose-100/50'
              }`}
            >
              <Shirt className="w-4 h-4 text-fancy-pink" />
              Outfit Builder
            </button>

            <button
              onClick={() => setActiveTab('lookbooks')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'lookbooks'
                  ? 'bg-white text-fancy-pink shadow-sm border border-rose-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-rose-100/50'
              }`}
            >
              <BookOpen className="w-4 h-4 text-purple-500" />
              Curated Looks
            </button>

            <button
              onClick={() => setActiveTab('cheatsheet')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'cheatsheet'
                  ? 'bg-white text-fancy-pink shadow-sm border border-rose-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-rose-100/50'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-500" />
              Thrift Cheatsheet
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onRandomize}
              className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-rose-400 to-fancy-pink text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-fancy hover:scale-[1.02] active:scale-95 transition-all"
              title="Acak Outfit Kepala sampai Kaki!"
            >
              <Dices className="w-4 h-4 animate-spin-slow" />
              <span className="hidden sm:inline">Thrift Gacha</span>
              <span className="sm:hidden">Gacha</span>
            </button>

            <button
              onClick={onOpenVault}
              className="relative p-2.5 rounded-xl border border-rose-200 bg-white hover:bg-rose-50 text-slate-700 hover:text-fancy-pink transition-all shadow-sm"
              title="Lihat Outfit Tersimpan"
            >
              <BookmarkHeart className="w-5 h-5 text-fancy-pink" />
              {savedCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-fancy-pink text-white text-[11px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  {savedCount}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden items-center justify-around py-2.5 border-t border-rose-100 text-xs font-semibold text-slate-600">
          <button
            onClick={() => setActiveTab('builder')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${
              activeTab === 'builder' ? 'text-fancy-pink font-bold bg-rose-50' : ''
            }`}
          >
            <Shirt className="w-4 h-4" />
            Builder
          </button>
          <button
            onClick={() => setActiveTab('lookbooks')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${
              activeTab === 'lookbooks' ? 'text-fancy-pink font-bold bg-rose-50' : ''
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Lookbooks
          </button>
          <button
            onClick={() => setActiveTab('cheatsheet')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${
              activeTab === 'cheatsheet' ? 'text-fancy-pink font-bold bg-rose-50' : ''
            }`}
          >
            <Compass className="w-4 h-4" />
            Tips & Keywords
          </button>
        </div>
      </div>
    </header>
  );
}
