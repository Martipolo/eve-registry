# ⬡ EF Mining Planner

> An unofficial web tool for **EVE Frontier** players — built on-chain data from the Sui blockchain.

🌐 **Live app:** [https://martipolo.github.io/EF-Mining-Planner/](https://martipolo.github.io/EF-Mining-Planner/)

---

## Features

### ◈ Character Registry
Browse all **12,000+ EVE Frontier characters** registered on the Sui testnet blockchain.
- Search by name or character ID
- Click any character to see their wallet address, tribe, and tenant
- Data refreshed daily via GitHub Actions

### ⬡ SSU Dashboard
Connect as your character and view your **Smart Storage Units** in real time.
- Live blockchain scan via Sui RPC
- See inventory, capacity, and ONLINE/OFFLINE status for each SSU
- Select which SSU to include in your construction stock calculations

## 💡 Getting the most out of EF Mining Planner

> **Use Smart Storage Units, not Field Storage!**
> 
> Field Storage resources are **not recorded on the Sui blockchain**, 
> so this app cannot read them. Store your materials in **SSU** to get 
> accurate stock readings and precise craft calculations.
> SSU also provide better in-game security for your resources.

### ⚙ Construction Planner
Plan your crafting sessions with full **multi-tier calculation**.
- Choose a final product (Building Foam, Reinforced Alloys, Carbon Weave...)
- Enter desired quantity and cargo capacity
- Automatically calculates:
  - Components to craft (Tier 3 → 2)
  - Raw materials needed
  - Intermediates to refine
  - Matrices to mine per asteroid type (SLAG / COMET / CHAR)
  - **Number of mining trips** based on your cargo hold
- Stock from your SSU is deducted automatically

### 📋 Recipes
Full reference of all crafting recipes, organized by tier:
- Step 4 — Final products
- Step 3 — Components
- Step 2 — Intermediates (refining)
- Step 1 — Raw matrices (asteroids)

---

## Architecture

```
eve-registry/
├── index.html          # Character Registry
├── dashboard.html      # SSU Dashboard
├── construction.html   # Construction Planner
├── recipes.html        # Recipe Reference
├── style.css           # Shared styles
├── nav.js              # Navigation + shared state (sessionStorage)
├── sui.js              # Sui blockchain RPC calls + item name resolution
├── recipes.js          # All craft recipes (T0 → T3) + calculator engine
├── database.json       # Auto-generated character list (scraper output)
└── scraper.js          # Node.js blockchain scraper
```

### How the data pipeline works

```
Sui Testnet Blockchain
        ↓
   scraper.js          ← Node.js, queries PlayerProfile objects via GraphQL
        ↓
  database.json        ← { meta: { lastUpdated }, data: [...characters] }
        ↓
GitHub Actions cron    ← Runs daily, commits updated database.json
        ↓
  GitHub Pages         ← Serves the static site
```

The **SSU Dashboard** queries the blockchain live (no caching between sessions), while the **Character Registry** uses the pre-built `database.json` for instant loading.

---

## Adding New Recipes

All recipes are in `recipes.js`. The structure follows 4 tiers:

```js
// Tier 3 — Final product
RECIPES['my_item'] = {
  name: "My Item", batch: 10, machine: "Printer S",
  inputs: [ { name: "Reinforced Alloys", qty: 65 } ]
};

// Tier 2 — Component (crafted from raw materials)
COMPOSANTS["My Component"] = {
  batch: 14, machine: "Refinery M",
  inputs: [ { name: "Nickel-Iron Veins", qty: 1050 } ]
};

// Tier 1 — Intermediate (refined → produces raw materials)
INTERMEDIAIRES["My Intermediate"] = {
  batch: 20, machine: "Refinery S",
  outputs: [ { name: "Silicon Dust", qty: 150 } ]  // ← outputs, not inputs!
};

// Tier 0 — Raw matrix (mined from asteroids → produces intermediates)
MATRICES["My Matrix"] = {
  batch: 40, asteroid: "SLAG", volume: 1,
  outputs: [ { name: "My Intermediate", qty: 30 } ]
};
```

Then add the option in `construction.html`:
```html
<option value="my_item">My Item</option>
```

---

## Tech Stack

- **Frontend:** Vanilla HTML/CSS/JS — no framework, no build step
- **Blockchain:** [Sui Testnet](https://suiexplorer.com/?network=testnet) via JSON-RPC (`fullnode.testnet.sui.io`)
- **Data indexing:** GraphQL endpoint (`graphql.testnet.sui.io`)
- **Hosting:** GitHub Pages (free, static)
- **Automation:** GitHub Actions (daily cron)

---

## Local Development

```bash
git clone https://github.com/Martipolo/ef-mining-planner.git
cd ef-mining-planner

# Run the scraper to regenerate database.json
node scraper.js

# Serve locally (any static server works)
npx serve .
# or
python3 -m http.server 8080
```

> No build step required. Open `index.html` directly or serve with any static server.

---

## Contributing

Pull requests are welcome! Most useful contributions:
- **New recipes** — add to `recipes.js` following the structure above
- **Type ID mappings** — add missing item names to `TYPE_ID_MAP` in `sui.js`
- **Bug fixes** — open an issue or PR

---

## Disclaimer

This is an **unofficial community tool** and is not affiliated with or endorsed by CCP Games.
EVE Frontier is a trademark of CCP hf.

---

*Built by [Ekno](https://martipolo.github.io/EF-Mining-Planner/?q=Ekno) — EVE Frontier player*

## ☕ Support

If EF Mining Planner saves you time, consider buying me a beer!
[ko-fi.com/efminingplanner](https://ko-fi.com/efminingplanner)
