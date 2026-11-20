import confetti from 'canvas-confetti';
import { THRIFT_ITEMS } from '../data/thriftItems';

export const formatIDR = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const getRandomItem = (category) => {
  const items = THRIFT_ITEMS.filter((i) => i.category === category);
  return items[Math.floor(Math.random() * items.length)];
};

export const generateRandomOutfit = () => {
  return {
    head: getRandomItem('head'),
    faceJewelry: getRandomItem('faceJewelry'),
    upperBody: getRandomItem('upperBody'),
    handBag: getRandomItem('handBag'),
    lowerBody: getRandomItem('lowerBody'),
    footwear: getRandomItem('footwear')
  };
};

export const calculateTotalCost = (outfit) => {
  if (!outfit) return 0;
  return Object.values(outfit).reduce((acc, item) => {
    return acc + (item ? item.price : 0);
  }, 0);
};

export const triggerSparkles = () => {
  try {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FF4D8D', '#FF85A1', '#A855F7', '#FBBF24', '#38BDF8']
    });
  } catch (err) {
    console.log('Confetti effect', err);
  }
};

export const generateShareText = (outfit) => {
  const total = calculateTotalCost(outfit);
  return `✨ OUTFIT THRIFT FANCY NANCY (Head-to-Toe) ✨
-----------------------------------------
👑 1. Head & Hair: ${outfit.head?.name || '-'} (${outfit.head?.priceRange || '-'})
💎 2. Face & Jewelry: ${outfit.faceJewelry?.name || '-'} (${outfit.faceJewelry?.priceRange || '-'})
👗 3. Upper Body: ${outfit.upperBody?.name || '-'} (${outfit.upperBody?.priceRange || '-'})
👜 4. Hands & Bag: ${outfit.handBag?.name || '-'} (${outfit.handBag?.priceRange || '-'})
💃 5. Lower Body: ${outfit.lowerBody?.name || '-'} (${outfit.lowerBody?.priceRange || '-'})
👠 6. Footwear: ${outfit.footwear?.name || '-'} (${outfit.footwear?.priceRange || '-'})
-----------------------------------------
💰 Total Estimasi Thrift: ${formatIDR(total)}
🎀 Dibuat dengan Très Chic Thrifter (Aplikasi Referensi Outfit Fancy Nancy)`;
};
