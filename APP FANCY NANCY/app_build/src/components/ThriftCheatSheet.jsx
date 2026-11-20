import React, { useState } from 'react';
import { 
  Compass, MapPin, Tag, Sparkles, CheckCircle2, 
  HelpCircle, Copy, Check, Flame, HeartHandshake, ShieldAlert 
} from 'lucide-react';

export default function ThriftCheatSheet() {
  const [copiedKeyword, setCopiedKeyword] = useState(null);

  const copyText = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedKeyword(id);
    setTimeout(() => setCopiedKeyword(null), 2000);
  };

  const KEYWORD_GROUPS = [
    {
      id: 'kw-head',
      category: '1. Head & Hair (Kepala)',
      keywords: [
        'topi baret wol vintage jepang',
        'headpiece bando mutiara pengantin second',
        'fascinator topi pesta inggris jaring',
        'syal sutra vintage floral scarf'
      ]
    },
    {
      id: 'kw-face',
      category: '2. Face & Jewelry (Wajah & Perhiasan)',
      keywords: [
        'kalung mutiara tumpuk vintage pearl choker',
        'kacamata cat eye tebal retro monza',
        'bros cameo kuningan antik eropa',
        'anting kristal chandelier thrift korea'
      ]
    },
    {
      id: 'kw-top',
      category: '3. Upper Body & Layer (Atasan & Luaran)',
      keywords: [
        'blus ruffle renda vintage kerah tinggi',
        'puff sleeve organza blouse pastel',
        'rompi korset brokat tapestri bunga',
        'cardigan rajut bulu leher faux fur preloved'
      ]
    },
    {
      id: 'kw-bag',
      category: '4. Hands & Bags (Tangan & Tas)',
      keywords: [
        'tas manik kisslock vintage beaded bag',
        'sarung tangan renda opera lace gloves',
        'tas rotan anyaman picnic basket thrift',
        'tas jaring metalik 90s party clutch'
      ]
    },
    {
      id: 'kw-bottom',
      category: '5. Lower Body (Bawahan)',
      keywords: [
        'rok tutu tumpuk mekar fuchsia preloved',
        'rok plisket metalik emas vintage accordion',
        'celana jacquard motif bunga tapestry pants',
        'rok kotak-kotak pastel gingham ruffle'
      ]
    },
    {
      id: 'kw-shoes',
      category: '6. Footwear & Hosiery (Alas Kaki)',
      keywords: [
        'sepatu mary jane platform glossy cherry red',
        'mules velvet kitten heel pita vintage',
        'sepatu oxford brogues wanita vintage',
        'kaos kaki renda ruffle frill socks jepang'
      ]
    }
  ];

  const THRIFT_SPOTS = [
    {
      name: 'Pasar Senen (Blok III, Jakarta)',
      badge: 'Surga Vintage Nusantara',
      desc: 'Pusat karung thrift impor terbesar. Kunjungi lantai 3 untuk berburu blus renda brokat, mantel bulu, dan tas manik pesta.',
      tip: 'Datang pagi hari (jam 09.00 - 11.00) saat pedagang baru membuka bal baru.'
    },
    {
      name: 'Pasar Gedebage (Bandung)',
      badge: 'Gudang Rajut & Rok Vintage',
      desc: 'Banyak ragam rok plisket mekar, cardigan rajut pastel bordir, serta jaket velvet dengan harga mulai Rp 15.000.',
      tip: 'Siapkan masker dan jangan ragu tawar-menawar dengan ramah.'
    },
    {
      name: 'Carousell & Shopee Live Vintage',
      badge: 'Thrifting Digital 24 Jam',
      desc: 'Sangat praktis untuk mencari kata kunci spesifik seperti "tapestry corset" atau "fascinator hat" dari seller terkurasi.',
      tip: 'Gunakan fitur filter "Kondisi: Bekas" dan minta detail video resleting & ketiak baju.'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-3 border border-amber-200">
          <Compass className="w-3.5 h-3.5" />
          <span>Thrift Hunting Guide & Keyword Engine</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Panduan Berburu Thrift <span className="text-fancy-pink italic">Fancy Nancy</span>
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          Kamus kata kunci pencarian, lokasi pasar loak terbaik, dan tips higienis mencuci pakaian vintage agar siap tampil memukau!
        </p>
      </div>

      {/* Spot Rekomendasi Thrift */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {THRIFT_SPOTS.map((spot, i) => (
          <div key={i} className="bg-white p-5 rounded-3xl border border-rose-200/80 shadow-sm hover:shadow-md transition-all">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-rose-100 text-fancy-pink inline-block mb-3">
              {spot.badge}
            </span>
            <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-fancy-pink shrink-0" />
              {spot.name}
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {spot.desc}
            </p>
            <div className="mt-4 pt-3 border-t border-rose-100 text-[11px] text-amber-700 bg-amber-50/70 p-2.5 rounded-xl">
              <strong>💡 Pro-Tip:</strong> {spot.tip}
            </div>
          </div>
        ))}
      </div>

      {/* Keyword Cheatsheet Engine */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-fancy">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-fancy-pink" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              Kamus Kata Kunci (Keywords) Berburu Online & Flea Market
            </h3>
          </div>
          <span className="text-xs text-rose-500 font-semibold hidden sm:inline">
            Klik kata kunci untuk menyalin
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {KEYWORD_GROUPS.map((grp) => (
            <div key={grp.id} className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100">
              <h4 className="font-serif font-bold text-sm text-slate-900 mb-2.5 text-fancy-pink">
                {grp.category}
              </h4>
              <div className="space-y-1.5">
                {grp.keywords.map((kw, idx) => {
                  const isCopied = copiedKeyword === `${grp.id}-${idx}`;
                  return (
                    <div
                      key={idx}
                      onClick={() => copyText(kw, `${grp.id}-${idx}`)}
                      className="group flex items-center justify-between p-2 rounded-xl bg-white border border-rose-100 hover:border-fancy-pink cursor-pointer transition-all hover:shadow-sm text-xs"
                    >
                      <span className="font-mono text-slate-700 group-hover:text-fancy-pink">
                        "{kw}"
                      </span>
                      <button className="text-slate-400 group-hover:text-fancy-pink p-1">
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hygiene & Fabric Care Checklist */}
      <div className="bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 rounded-3xl p-6 sm:p-8 border border-rose-200">
        <div className="flex items-center gap-2 mb-4">
          <ShieldAlert className="w-5 h-5 text-fancy-pink" />
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
            Protokol Mencuci & Merawat Baju Thrift Fancy Nancy
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-rose-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1 flex items-center gap-1.5 text-rose-600">
              <CheckCircle2 className="w-4 h-4" /> 1. Rendam Antiseptik / Cuka
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Rendam baju thrift selama 30 menit dengan air hangat dicampur 3 sendok cuka putih atau cairan disinfektan pakaian untuk membunuh tungau & kuman.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-rose-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1 flex items-center gap-1.5 text-purple-600">
              <CheckCircle2 className="w-4 h-4" /> 2. Khusus Renda & Tulle
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Jangan pernah masukkan rok tutu tulle dan blus renda ke mesin cuci pengering. Cukup kucek perlahan menggunakan sampo bayi dan jemur di tempat teduh.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-rose-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1 flex items-center gap-1.5 text-amber-600">
              <CheckCircle2 className="w-4 h-4" /> 3. Uap Steamer (Bukan Setrika)
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Gunakan garment steamer untuk merapikan plisket metalik, renda ruffled, dan bahan velvet agar serat kain tidak gosong atau gepeng.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
