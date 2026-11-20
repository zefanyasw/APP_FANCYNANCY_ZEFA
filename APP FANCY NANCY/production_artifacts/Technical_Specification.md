# 🎀 Technical Specification: Fancy Nancy Thrift Head-to-Toe Outfit Reference App
**Document Version:** 1.0.0  
**Author:** Lead Architect & Product Manager (@pm)  
**Status:** Pending User Approval  
**Target Build Folder:** `app_build/`  

---

## 1. Executive Summary
The **Fancy Nancy Thrift Reference App** ("*Très Chic Thrifter*") is a web application designed to guide fashion enthusiasts, thrifters, and creative dressers in crafting extravagant, playful, and maximalist outfits inspired by the whimsical, glamorous aesthetic of "Fancy Nancy"—curated specifically from vintage, pre-loved, and thrifted sources.

The core differentiator is the **Head-to-Toe ("Dari Atas Kepala Sampai Ujung Kaki") Breakdown Engine**, allowing users to either browse curated maximalist thrift looks or interactively assemble and randomize modular outfit layers:
1. **Head & Hair:** Berets, vintage fascinators, tiaras, retro silk scarves, oversized bows, feathered clips.
2. **Face & Jewelry:** Statement cat-eye sunglasses, pearl chokers, layered antique gold chains, chandelier earrings.
3. **Upper Body & Layers:** Victorian ruffle blouses, puff-sleeve organza shirts, faux fur boas, velvet jackets, corset vests.
4. **Hands & Bags:** Beaded kiss-lock purses, lace gloves, vintage wicker baskets, velvet wristlets.
5. **Lower Body:** Multi-tiered tulle skirts, pleated metallic skirts, high-waisted embroidered trousers, polka-dot bloomers.
6. **Legwear & Footwear:** Frill lace socks, patterned tights, vintage Mary Janes, kitten-heel mules, metallic boots.

---

## 2. Requirements & Feature Matrix

### 2.1 Functional Requirements (FR)
- **FR-1: Head-to-Toe Interactive Look Builder (Mannequin / Layer Picker)**
  - Users can toggle through modular categories: Headwear, Eyewear/Jewelry, Top/Layers, Bag/Gloves, Bottoms, and Shoes/Hosiery.
  - Visual preview card showing the assembled full-body ensemble.
  - Real-time thrift price tally (estimated thrift market price in IDR: Rp 15.000 – Rp 150.000 per piece).
- **FR-2: "Thrift Gacha" / Instant Randomizer**
  - One-click "Shuffle Fancy Outfit" button generating eccentric, color-coordinated Fancy Nancy thrift ensembles with animations.
- **FR-3: Curated Lookbook Gallery & Filter Engine**
  - Pre-styled lookbooks categorized by aesthetic moods:
    - *Parisian Bonjour Chic*
    - *Victorian Tea Party Maximalist*
    - *Y2K Glitz & Tulle Thrift*
    - *Eccentric Grandma Chic*
    - *Garden Party Glam*
  - Filter by Vibe, Dominant Color Palette (Fuchsia, Lavender, Gold, Emerald, Pastel), and Budget Tier (Under 100k, 100k-250k, 250k+).
- **FR-4: Thrift Hunting Cheat Sheet & Keywords**
  - Per-item "Thrift Search Keywords" (e.g., *"blus ruffle renda vintage", "rok tutu bertumpuk preloved", "baret wol vintage"*).
  - Material & thrift condition inspection checklist (checking seams, stains, vintage tag identification).
- **FR-5: Outfit Moodboard Saver & Share/Export**
  - Save outfits to local storage favorites ("My Fancy Thrift Vault").
  - Export/Copy outfit summary card to clipboard (for sharing on Instagram/TikTok/WhatsApp).

### 2.2 Non-Functional Requirements (NFR)
- **Performance:** Instant client-side state transitions, snappy interactions, zero latency.
- **Responsiveness:** Flawless mobile-first & desktop responsive layout.
- **Aesthetic / UX:** High-fashion playful aesthetic featuring pastel pinks, lavender, gold foil accents, typography reminiscent of vintage storybook chic, smooth micro-interactions.
- **Zero External API Failure Risk:** Self-contained rich mock database with comprehensive curated thrift items, fallback images, and vector illustrations/icons.

---

## 3. Architecture & Tech Stack

### 3.1 Recommended Technology Stack
- **Framework:** **React 18** with **Vite**
  - *Reasoning:* Lightning-fast dev server, ultra-lightweight bundle, zero backend configuration blockers, robust component ecosystem.
- **Styling:** **Tailwind CSS** with custom extended theme
  - Colors: Fancy Nancy palette (`fancy-pink`, `fancy-lavender`, `fancy-gold`, `fancy-mint`, `fancy-cream`).
  - Google Fonts: *Playfair Display* (Editorial Serif) + *Plus Jakarta Sans* (Clean Body).
- **Icons & Visuals:** **Lucide React** (featherweight, high aesthetic SVG icons) + Curated high-res fashion photography from Unsplash fashion collections.
- **State & Storage:** React Context / Custom Hooks with **Local Storage Persistence** for saved outfits.
- **Build & Packaging:** Node.js / Vite build outputting clean production bundle into `app_build/`.

### 3.2 Directory Structure (`app_build/`)
```
app_build/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   ├── thriftItems.js          # Categorized head-to-toe item catalog with thrift tags & prices
│   │   └── curatedLookbooks.js     # Ready-to-wear Fancy Nancy thrift styles
│   ├── components/
│   │   ├── Navbar.jsx              # Brand header & navigation
│   │   ├── HeadToToeBuilder.jsx    # Interactive 6-tier modular outfit builder
│   │   ├── LayerSlotCard.jsx       # Individual slot selector (Head, Face, Top, etc.)
│   │   ├── OutfitPreview.jsx       # Combined mannequin-style visual card
│   │   ├── LookbookGallery.jsx     # Curated outfit inspiration gallery
│   │   ├── ThriftCheatSheet.jsx    # Keywords & thrifting tips modal/tab
│   │   ├── SavedVaultModal.jsx     # Saved favorites drawer/modal
│   │   └── FilterBar.jsx           # Vibe and budget filter pills
│   └── utils/
│       └── formatters.js           # IDR currency formatter, randomizer helper
```

---

## 4. Component Layout & Data Flow

```
                      +-----------------------------+
                      |          App.jsx            |
                      |  (Active Tab / Global State)|
                      +--------------+--------------+
                                     |
         +---------------------------+---------------------------+
         |                           |                           |
+--------v--------+         +--------v--------+         +--------v--------+
| HeadToToeBuilder|         | LookbookGallery |         | ThriftCheatSheet|
| (Current Outfit)|         | (Curated Looks) |         | (Hunting Guide) |
+--------+--------+         +--------+--------+         +-----------------+
         |                           |
+--------v--------+                  | (Click to Load Look)
| OutfitPreview   |<-----------------+
| + LayerSlotCards|
+--------+--------+
         |
+--------v--------+
| LocalStorage    |
| (Saved Vault)   |
+-----------------+
```

### 4.1 State Management
- `currentOutfit`: Object storing selected item for each slot (`head`, `faceJewelry`, `upperBody`, `handBag`, `lowerBody`, `footwear`).
- `activeMood`: Filter state for lookbooks (`"all"`, `"parisian"`, `"victorian"`, `"y2k"`, `"tea-party"`).
- `savedOutfits`: Array stored in `localStorage` containing favorited combinations with timestamp.

---

## 5. Next Steps & Approval Gate
As specified by our team protocol:
1. Product Manager (@pm) submits this specification for **explicit user review**.
2. Once the user responds with approval (or provides feedback for adjustments), the **Full-Stack Engineer (@engineer)** will immediately implement the complete, running application code inside `app_build/`.
