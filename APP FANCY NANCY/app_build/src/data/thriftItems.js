export const THRIFT_CATEGORIES = [
  { id: 'head', label: '1. Head & Hair', icon: 'Crown', desc: 'Topi baret, tiara, fascinator & pita rambut' },
  { id: 'faceJewelry', label: '2. Face & Jewelry', icon: 'Sparkles', desc: 'Kacamata unik, kalung mutiara, anting chandelier' },
  { id: 'upperBody', label: '3. Upper Body & Layer', icon: 'Shirt', desc: 'Blus renda ruffle, rompi korset, jaket velvet' },
  { id: 'handBag', label: '4. Hands & Bags', icon: 'ShoppingBag', desc: 'Tas manik kiss-lock, sarung tangan renda' },
  { id: 'lowerBody', label: '5. Lower Body', icon: 'Sparkle', desc: 'Rok tutu bertumpuk, rok lipit metalik, celana jacquard' },
  { id: 'footwear', label: '6. Footwear & Hosiery', icon: 'Footprints', desc: 'Kaos kaki renda, Mary Janes, kitten heels' }
];

export const THRIFT_ITEMS = [
  // --- 1. HEAD & HAIR ---
  {
    id: 'head-1',
    category: 'head',
    name: 'Vintage French Wool Beret (Fuchsia Pink)',
    price: 35000,
    priceRange: 'Rp 30.000 - Rp 45.000',
    thriftSearchKeywords: 'topi baret wol vintage, beret hat preloved jepang/korea',
    materialTip: 'Pastikan bahan wool masih padat dan tidak berlubang (moth holes). Cuci dry clean atau rendam air dingin.',
    aesthetic: 'Parisian Chic',
    color: '#FF1493',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Nancy menyukai beret karena terdengar sangat *très élégant*!'
  },
  {
    id: 'head-2',
    category: 'head',
    name: 'Pearled Tiara Headband & Organza Bow',
    price: 25000,
    priceRange: 'Rp 20.000 - Rp 35.000',
    thriftSearchKeywords: 'bando mutiara pengantin preloved, headpiece tiara pesta second',
    materialTip: 'Cek apakah kawat bando masih kokoh dan butiran faux pearl tidak ada yang rontok.',
    aesthetic: 'Royal Whimsy',
    color: '#FDF4FF',
    image: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Tiara membuat hari biasa seketika berubah menjadi resepsi istana.'
  },
  {
    id: 'head-3',
    category: 'head',
    name: '90s Floral Silk Bandana / Scarf',
    price: 20000,
    priceRange: 'Rp 15.000 - Rp 30.000',
    thriftSearchKeywords: 'scarf sutra vintage motif bunga, syal leher satin thrift bandung',
    materialTip: 'Tes kelembutan bahan sutra/satin. Hindari jika jahitan tepi (rolled hem) sudah terurai.',
    aesthetic: 'Retro Glamour',
    color: '#F472B6',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Bisa diikat di kepala ala diva bioskop klasik era 1950-an!'
  },
  {
    id: 'head-4',
    category: 'head',
    name: 'Vintage Feather & Net Fascinator Hat',
    price: 45000,
    priceRange: 'Rp 40.000 - Rp 60.000',
    thriftSearchKeywords: 'fascinator hat jaring bulu, topi pesta vintage inggris preloved',
    materialTip: 'Periksa kebersihan bulu halus dan pastikan jaring penutup wajah tidak robek.',
    aesthetic: 'Victorian Tea Party',
    color: '#C084FC',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Fascinator adalah aksesoris wajib saat pesta minum teh bersama pangeran khayalan.'
  },

  // --- 2. FACE & JEWELRY ---
  {
    id: 'jewelry-1',
    category: 'faceJewelry',
    name: 'Multi-Strand Faux Pearl Collar Choker',
    price: 30000,
    priceRange: 'Rp 25.000 - Rp 45.000',
    thriftSearchKeywords: 'kalung mutiara tumpuk vintage, pearl choker thrift monza',
    materialTip: 'Periksa apakah pengait (clasp) masih mengunci dengan rapat dan warna mutiara tidak mengelupas.',
    aesthetic: 'Parisian Chic',
    color: '#FFFBEB',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Prinsip Nancy: mutiara tidak pernah cukup cuma satu helai!'
  },
  {
    id: 'jewelry-2',
    category: 'faceJewelry',
    name: 'Vintage Oversized Cat-Eye Sunglasses (Glitter Frame)',
    price: 40000,
    priceRange: 'Rp 35.000 - Rp 50.000',
    thriftSearchKeywords: 'kacamata cat eye vintage, kacamata retro frame tebal wanita thrift',
    materialTip: 'Cek engsel baut kacamata jangan sampai dol atau kendor parah.',
    aesthetic: 'Diva Extravaganza',
    color: '#EC4899',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Kacamata ini memberi aura selebriti papan atas yang sedang menyamar.'
  },
  {
    id: 'jewelry-3',
    category: 'faceJewelry',
    name: 'Antique Gold Baroque Cameo Brooch & Drop Earrings',
    price: 35000,
    priceRange: 'Rp 30.000 - Rp 50.000',
    thriftSearchKeywords: 'bros cameo antik kuningan, anting kristal chandelier vintage',
    materialTip: 'Cari yang bermaterial kuningan atau pewter agar awet. Bersihkan dengan lap microfiber.',
    aesthetic: 'Victorian Tea Party',
    color: '#D97706',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Bros cameo antik ini terlihat seperti warisan bangsawan kerajaan Prancis.'
  },
  {
    id: 'jewelry-4',
    category: 'faceJewelry',
    name: 'Y2K Chunky Heart Charm Layered Necklace',
    price: 25000,
    priceRange: 'Rp 20.000 - Rp 35.000',
    thriftSearchKeywords: 'kalung rantai tebal y2k, liontin hati puffy thrift aksesoris',
    materialTip: 'Pastikan rantai tidak karatan dan lapisi bening jika bahan alloy mudah menghitam.',
    aesthetic: 'Y2K Glitz',
    color: '#F43F5E',
    image: 'https://images.unsplash.com/photo-1611591475879-1144a9e5fa4e?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Berdenting ceria setiap kali kamu melangkah penuh pesona.'
  },

  // --- 3. UPPER BODY & LAYERS ---
  {
    id: 'top-1',
    category: 'upperBody',
    name: 'Victorian High-Neck Ruffle Blouse (Cream Lace)',
    price: 55000,
    priceRange: 'Rp 45.000 - Rp 75.000',
    thriftSearchKeywords: 'blus ruffle renda victoria, kemeja kerut leher vintage thrift korea',
    materialTip: 'Periksa lingkar leher dan ketiak dari noda kuning. Pastikan kancing kerang masih lengkap.',
    aesthetic: 'Victorian Whimsy',
    color: '#FEF3C7',
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Ruffle renda bertingkat adalah perwujudan kemewahan sejati.'
  },
  {
    id: 'top-2',
    category: 'upperBody',
    name: 'Organza Puff-Sleeve Fairy Blouse (Lavender)',
    price: 65000,
    priceRange: 'Rp 50.000 - Rp 85.000',
    thriftSearchKeywords: 'atasan organza lengan balon, puff sleeve blouse pastel thrift',
    materialTip: 'Bahan organza rawan robek di sambungan bahu, periksa jahitan obras dalamnya.',
    aesthetic: 'Royal Whimsy',
    color: '#D8B4FE',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Lengan balon sebesar awan permen kapas membuat postur tubuh terlihat megah.'
  },
  {
    id: 'top-3',
    category: 'upperBody',
    name: 'Vintage Floral Brocade Corset Vest',
    price: 75000,
    priceRange: 'Rp 65.000 - Rp 95.000',
    thriftSearchKeywords: 'rompi korset brokat tapestri, vintage tapestry vest tali pita thrift',
    materialTip: 'Pastikan boning/tulang korset tidak patah atau menusuk keluar kain.',
    aesthetic: 'Parisian Chic',
    color: '#BE185D',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Tapestri bermotif mawar ini cocok untuk jalan-jalan ke taman kastil.'
  },
  {
    id: 'top-4',
    category: 'upperBody',
    name: 'Pastel Cardigan with Faux Fur Collar & Pearl Buttons',
    price: 85000,
    priceRange: 'Rp 70.000 - Rp 110.000',
    thriftSearchKeywords: 'cardigan bulu leher vintage, rajut kancing mutiara thrift jepang',
    materialTip: 'Cek apakah bulu leher bisa dilepas-pasang dan rajutan tidak melar di pergelangan tangan.',
    aesthetic: 'Diva Extravaganza',
    color: '#FBCFE8',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Bulu leher halus (faux fur) memberi sentuhan diva Hollywood era klasik.'
  },

  // --- 4. HANDS & BAGS ---
  {
    id: 'bag-1',
    category: 'handBag',
    name: 'Vintage Beaded Kiss-Lock Evening Purse',
    price: 45000,
    priceRange: 'Rp 35.000 - Rp 60.000',
    thriftSearchKeywords: 'tas manik pesta kisslock vintage, beaded clutch retro thrift pasar senen',
    materialTip: 'Goyangkan perlahan untuk memastikan rajutan manik-manik tidak rontok berserakan.',
    aesthetic: 'Parisian Chic',
    color: '#FDE047',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Bunyi *klik* dari pengait kiss-lock adalah suara paling memuaskan di dunia.'
  },
  {
    id: 'bag-2',
    category: 'handBag',
    name: 'Sheer White Lace Opera Wrist Gloves',
    price: 20000,
    priceRange: 'Rp 15.000 - Rp 30.000',
    thriftSearchKeywords: 'sarung tangan renda putih pendek, lace gloves vintage thrift',
    materialTip: 'Pastikan karet pergelangan tangan masih lentur dan serat renda tidak ada yang tercabut.',
    aesthetic: 'Victorian Tea Party',
    color: '#FFFFFF',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Cara paling anggun untuk melambaikan tangan kepada para penggemar!'
  },
  {
    id: 'bag-3',
    category: 'handBag',
    name: 'Woven Wicker Picnic Basket Bag with Silk Bow',
    price: 50000,
    priceRange: 'Rp 40.000 - Rp 70.000',
    thriftSearchKeywords: 'tas rotan vintage anyaman, picnic basket bag pita satin thrift',
    materialTip: 'Periksa apakah anyaman rotan ada yang patah tajam atau berjamur.',
    aesthetic: 'Garden Party',
    color: '#FBBF24',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Cukup untuk membawa cermin kecil, pita cadangan, dan permen rasa raspberry.'
  },
  {
    id: 'bag-4',
    category: 'handBag',
    name: '90s Metallic Mesh Chain Crossbody',
    price: 55000,
    priceRange: 'Rp 45.000 - Rp 75.000',
    thriftSearchKeywords: 'tas jaring metalik vintage 90s, metal mesh bag chain thrift',
    materialTip: 'Cek cincin sambungan metal mesh jangan sampai renggang atau sobek.',
    aesthetic: 'Y2K Glitz',
    color: '#E5E7EB',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Berkilau indah di bawah sinar lampu diskotik atau matahari sore.'
  },

  // --- 5. LOWER BODY ---
  {
    id: 'bottom-1',
    category: 'lowerBody',
    name: 'Multi-Tiered Voluminous Tulle Tutu Skirt (Hot Pink)',
    price: 65000,
    priceRange: 'Rp 50.000 - Rp 85.000',
    thriftSearchKeywords: 'rok tutu bertumpuk fuchsia, tulle skirt tumpuk panjang thrift bali',
    materialTip: 'Pastikan furing dalam tidak robek dan karet pinggang elastis masih kencang.',
    aesthetic: 'Royal Whimsy',
    color: '#EC4899',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Jika gaun tidak mekar saat kamu berputar, itu belum cukup fancy!'
  },
  {
    id: 'bottom-2',
    category: 'lowerBody',
    name: 'Pleated Metallic Champagne Gold Midi Skirt',
    price: 60000,
    priceRange: 'Rp 45.000 - Rp 80.000',
    thriftSearchKeywords: 'rok plisket metalik emas vintage, accordion pleated midi skirt thrift',
    materialTip: 'Periksa lipatan plisket apakah masih tajam dan tidak hilang akibat salah setrika.',
    aesthetic: 'Parisian Chic',
    color: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Menangkap cahaya emas dengan sangat dramatis di setiap langkah.'
  },
  {
    id: 'bottom-3',
    category: 'lowerBody',
    name: 'Vintage Floral Jacquard High-Waisted Cigarette Pants',
    price: 70000,
    priceRange: 'Rp 55.000 - Rp 90.000',
    thriftSearchKeywords: 'celana jacquard motif bunga thrift, vintage tapestry trousers wanita',
    materialTip: 'Periksa resleting samping dan kelonggaran pinggul karena kain jacquard biasanya tidak melar.',
    aesthetic: 'Eccentric Diva',
    color: '#831843',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Celana ala nyonya aristokrat yang gemar berkebun bunga mawar langka.'
  },
  {
    id: 'bottom-4',
    category: 'lowerBody',
    name: 'Pastel Lilac Gingham Ruffle Midi Skirt',
    price: 45000,
    priceRange: 'Rp 35.000 - Rp 60.000',
    thriftSearchKeywords: 'rok kotak-kotak pastel ruffle, gingham tiered skirt thrift korea',
    materialTip: 'Bahan katun mudah dicek, pastikan tidak ada noda pudar di lipatan kain.',
    aesthetic: 'Garden Party',
    color: '#C084FC',
    image: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Sangat cocok dipadukan saat menggelar selimut piknik di atas rumput hijau.'
  },

  // --- 6. FOOTWEAR & HOSIERY ---
  {
    id: 'shoes-1',
    category: 'footwear',
    name: 'Frill Ruffle Lace Ankle Socks & Glossy Mary Janes',
    price: 85000,
    priceRange: 'Rp 70.000 - Rp 120.000',
    thriftSearchKeywords: 'sepatu mary jane platform glossy, kaos kaki renda ruffle jepang',
    materialTip: 'Periksa lem sol bawah sepatu Mary Jane dan pastikan tali strap gesper tidak retak.',
    aesthetic: 'Royal Whimsy',
    color: '#BE185D',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Sepatu Mary Jane merah ceri adalah ciri khas Nancy untuk melangkah riang.'
  },
  {
    id: 'shoes-2',
    category: 'footwear',
    name: 'Pointed Velvet Kitten-Heel Mules (Lavender Bow)',
    price: 90000,
    priceRange: 'Rp 75.000 - Rp 130.000',
    thriftSearchKeywords: 'mules velvet kitten heel, sepatu selop pita vintage thrift batam',
    materialTip: 'Periksa tapak tumit kitten heel (heel tip) apakah perlu diganti di tukang sol.',
    aesthetic: 'Parisian Chic',
    color: '#A855F7',
    image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Tinggi hak yang pas untuk tetap anggun tanpa membuat kaki pegal berlebihan.'
  },
  {
    id: 'shoes-3',
    category: 'footwear',
    name: 'Polka-Dot Sheer Tights with Retro Two-Tone Brogues',
    price: 75000,
    priceRange: 'Rp 60.000 - Rp 100.000',
    thriftSearchKeywords: 'sepatu oxford vintage wanita thrift, stocking polkadot transparan',
    materialTip: 'Cek kondisi kulit sepatu oxford apakah butuh semir ulang dan solnya masih tebal.',
    aesthetic: 'Victorian Tea Party',
    color: '#1E293B',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Kombinasi polkadot dan brogues vintage menciptakan gaya quirky nan akademis.'
  },
  {
    id: 'shoes-4',
    category: 'footwear',
    name: 'Metallic Rose Gold Ankle Boots',
    price: 110000,
    priceRange: 'Rp 85.000 - Rp 150.000',
    thriftSearchKeywords: 'boots metalik emas/pink thrift pasar senen, ankle boots pesta second',
    materialTip: 'Cek bagian lekukan depan jangan sampai kulit sintetis mengelupas (peeling).',
    aesthetic: 'Y2K Glitz',
    color: '#FB7185',
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80',
    fancyNancyFact: 'Sepatu boots ini membuat setiap trotoar jalanan serasa karpet merah Paris Fashion Week.'
  }
];
