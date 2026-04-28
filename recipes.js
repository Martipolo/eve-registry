// ══ RECIPES.JS ═══════════════════════════════════════════════════
//
// FLUX COMPLET (5 étapes) :
//
// ÉTAPE 1 : Miner des MATRICES BRUTES dans les astéroïdes
//   SLAG  → Platinum-Palladium Matrix (40u) → 10 Silica Grains + 30 Iron-Rich Nodules
//   COMET → Hydrated Sulfide Matrix   (40u) → 20 Hydrocarbon Residue + 200 Water Ice
//   CHAR  → Feldspar Crystals         (40u) → 10 Hydrocarbon Residue + 30 Silica Grains
//
// ÉTAPE 2 : Raffiner les INTERMÉDIAIRES → donne des MATIÈRES BRUTES
//   10 Iron-Rich Nodules      → 198 Platinum-Group Veins + 20 Nickel-Iron Veins
//   20 Hydrocarbon Residue    → 180 Tholin Aggregates + 20 Troilite Sulfide Grains
//   20 Silica Grains          → 50 Feldspar Crystal Shards + 150 Silicon Dust
//
// ÉTAPE 3 : Crafter les COMPOSANTS depuis les MATIÈRES BRUTES
//   1050 Nickel-Iron Veins + 1050 Feldspar Crystal Shards → 14 Reinforced Alloys
//   3150 Tholin Aggregates                                → 14 Carbon Weave
//   630 Silicon Dust + 1260 Tholin Agg + 210 Feldspar CS  → 14 Thermal Composites
//
// ÉTAPE 4 : Crafter le PRODUIT FINAL
//   65 Reinforced Alloys + 65 Carbon Weave + 65 Thermal Composites → 10 Building Foam

// ─────────────────────────────────────────────────────────────────
// ÉTAPE 4 — Produit final
// ─────────────────────────────────────────────────────────────────
const RECIPES = {
  building_foam: {
    name: "Building Foam", batch: 10, machine: "Printer S",
    inputs: [
      { name: "Reinforced Alloys",  qty: 65 },
      { name: "Carbon Weave",       qty: 65 },
      { name: "Thermal Composites", qty: 65 },
    ]
  },
  reinforced_alloys: {
    name: "Reinforced Alloys", batch: 14, machine: "Refinery M",
    inputs: [
      { name: "Nickel-Iron Veins",  qty: 1050 },
      { name: "Feldspar Crystal Shards",  qty: 1050 },
    ]
  },
};

// ─────────────────────────────────────────────────────────────────
// ÉTAPE 3 — Composants (craftés depuis les matières brutes)
// ─────────────────────────────────────────────────────────────────
const COMPOSANTS = {
  "Reinforced Alloys": {
    batch: 14, machine: "Refinery M",
    inputs: [
      { name: "Nickel-Iron Veins",       qty: 1050 },
      { name: "Feldspar Crystal Shards", qty: 1050 },
    ]
  },
  "Carbon Weave": {
    batch: 14, machine: "Refinery M",
    inputs: [
      { name: "Tholin Aggregates", qty: 3150 },
    ]
  },
  "Thermal Composites": {
    batch: 14, machine: "Refinery M",
    inputs: [
      { name: "Silicon Dust",            qty:  630 },
      { name: "Tholin Aggregates",       qty: 1260 },
      { name: "Feldspar Crystal Shards", qty:  210 },
    ]
  },
};

// ─────────────────────────────────────────────────────────────────
// ÉTAPE 2 — Intermédiaires (raffinés → donnent des matières brutes)
// ─────────────────────────────────────────────────────────────────
const INTERMEDIAIRES = {
  "Iron-Rich Nodules": {
    batch: 10, machine: "Refinery S",
    outputs: [
      { name: "Platinum-Group Veins", qty: 198 },
      { name: "Nickel-Iron Veins",    qty:  20 },
    ]
  },
  "Hydrocarbon Residue": {
    batch: 20, machine: "Refinery S",
    outputs: [
      { name: "Tholin Aggregates",       qty: 180 },
      { name: "Troilite Sulfide Grains", qty:  20 },
    ]
  },
  "Silica Grains": {
    batch: 20, machine: "Refinery S",
    outputs: [
      { name: "Feldspar Crystal Shards", qty:  50 },
      { name: "Silicon Dust",            qty: 150 },
    ]
  },
};

// ─────────────────────────────────────────────────────────────────
// ÉTAPE 1 — Matrices brutes (minées dans les astéroïdes)
//           → donnent des intermédiaires après raffinage
// ─────────────────────────────────────────────────────────────────
const MATRICES = {
  "Platinum-Palladium Matrix": {
    batch: 40, asteroid: "SLAG", volume: 1,
    outputs: [
      { name: "Silica Grains",     qty: 10 },
      { name: "Iron-Rich Nodules", qty: 30 },
    ]
  },
  "Hydrated Sulfide Matrix": {
    batch: 40, asteroid: "COMET", volume: 1,
    outputs: [
      { name: "Hydrocarbon Residue", qty:  20 },
      { name: "Water Ice",           qty: 200 },
    ]
  },
  "Feldspar Crystals": {
    batch: 40, asteroid: "CHAR", volume: 1,
    outputs: [
      { name: "Hydrocarbon Residue", qty: 10 },
      { name: "Silica Grains",       qty: 30 },
    ]
  },
};

// ─────────────────────────────────────────────────────────────────
// CALCULATEUR
// ─────────────────────────────────────────────────────────────────
function computeCraft(recipeKey, wantedQty) {
  const recipe = RECIPES[recipeKey];
  if (!recipe) return null;
  const stock = window.ssuStock || {};

  // Utilitaire : arrondi au batch supérieur
  const ceil = (needed, batch) => needed <= 0 ? 0 : Math.ceil(needed / batch) * batch;

  const result = {
    final:         {},  // produit final
    composants:    {},  // étape 3 : composants à crafter
    matieres:      {},  // matières brutes nécessaires (inputs des composants)
    intermediaires:{},  // étape 2 : intermédiaires à raffiner
    matrices:      {},  // étape 1 : matrices à miner
    byAsteroid:    {},  // regroupé par astéroïde pour les voyages
  };

  // ── ÉTAPE 4 : produit final ─────────────────────────────────────
  const finalBatches    = Math.ceil(wantedQty / recipe.batch);
  const finalQty        = finalBatches * recipe.batch;
  result.final = { name: recipe.name, needed: finalQty, batches: finalBatches };

  // ── ÉTAPE 3 : composants à crafter ─────────────────────────────
  for (const inp of recipe.inputs) {
    const needed   = inp.qty * finalBatches;
    const inStock  = stock[inp.name] || 0;
    const manque   = Math.max(0, needed - inStock);
    const rec      = COMPOSANTS[inp.name];
    const batches  = rec ? Math.ceil(manque / rec.batch) : 0;
    const toCraft  = batches * (rec?.batch || 1);
    result.composants[inp.name] = { needed, inStock, manque, batches, toCraft, rec };
  }

  // ── Matières brutes nécessaires (inputs des composants à crafter)
  const matNeeds = {}; // { nom: quantité_totale_nécessaire }
  for (const [, comp] of Object.entries(result.composants)) {
    if (comp.batches === 0 || !comp.rec) continue;
    for (const inp of comp.rec.inputs) {
      matNeeds[inp.name] = (matNeeds[inp.name] || 0) + inp.qty * comp.batches;
    }
  }
  for (const [name, needed] of Object.entries(matNeeds)) {
    const inStock = stock[name] || 0;
    const manque  = Math.max(0, needed - inStock);
    result.matieres[name] = { needed, inStock, manque };
  }

  // ── ÉTAPE 2 : intermédiaires à raffiner ────────────────────────
  // Pour chaque matière brute manquante, trouver quel intermédiaire la produit
  // Un intermédiaire peut produire plusieurs matières → prendre le max de batches
  const interBatches = {}; // { nom_inter: batches_necessaires }

  for (const [matName, matData] of Object.entries(result.matieres)) {
    if (matData.manque <= 0) continue;
    for (const [interName, interRec] of Object.entries(INTERMEDIAIRES)) {
      const out = interRec.outputs.find(o => o.name === matName);
      if (!out) continue;
      // Batches nécessaires pour produire assez de cette matière
      const b = Math.ceil(matData.manque / out.qty);
      interBatches[interName] = Math.max(interBatches[interName] || 0, b);
    }
  }

  for (const [interName, batches] of Object.entries(interBatches)) {
    if (batches === 0) continue;
    const rec      = INTERMEDIAIRES[interName];
    const toUse    = batches * rec.batch; // quantité d'intermédiaire à raffiner
    const inStock  = stock[interName] || 0;
    const manque   = Math.max(0, toUse - inStock);
    // Ce que ce raffinage va produire
    const produces = rec.outputs.map(o => ({ name: o.name, qty: o.qty * batches }));
    result.intermediaires[interName] = { toUse, inStock, manque, batches, produces, rec };
  }

  // ── ÉTAPE 1 : matrices à miner ─────────────────────────────────
  // Pour chaque intermédiaire manquant, choisir la MEILLEURE matrice source
  // (celle qui produit le plus de cet intermédiaire par batch = moins de voyages)
  // Chaque intermédiaire est traité indépendamment.

  for (const [interName, interData] of Object.entries(result.intermediaires)) {
    if (interData.manque <= 0) continue;

    // Trouver toutes les matrices qui produisent cet intermédiaire
    let best = null;
    for (const [matrixName, matrixRec] of Object.entries(MATRICES)) {
      const out = matrixRec.outputs.find(o => o.name === interName);
      if (!out) continue;
      const batches = Math.ceil(interData.manque / out.qty);
      // Choisir celle qui demande le moins de batches (= produit le plus par batch)
      if (!best || batches < best.batches) {
        best = { matrixName, batches, rec: matrixRec };
      }
    }
    if (!best) continue;

    // Ajouter ou prendre le max si déjà calculé (cas où 2 intermédiaires viennent de la même matrice)
    const existing = result.matrices[best.matrixName];
    const batches  = existing ? Math.max(existing.batches, best.batches) : best.batches;
    const toMine   = batches * best.rec.batch;
    const inStock  = stock[best.matrixName] || 0;
    const manque   = Math.max(0, toMine - inStock);
    result.matrices[best.matrixName] = {
      toMine, inStock, manque, batches,
      asteroid: best.rec.asteroid, volume: best.rec.volume
    };
  }

  // ── Voyages par astéroïde ───────────────────────────────────────
  for (const [matrixName, data] of Object.entries(result.matrices)) {
    if (data.manque <= 0) continue;
    const ast = data.asteroid;
    if (!result.byAsteroid[ast]) result.byAsteroid[ast] = [];
    result.byAsteroid[ast].push({
      name: matrixName, toMine: data.manque, volume: data.volume
    });
  }

  return result;
}
