// ══ RECIPES.JS — Recettes de craft EVE Frontier ══════════════════════
// Source unique des recettes — modifié ici uniquement
// Chargé par construction.html et recipes.html

// ── TIER 3 — Produits finis ───────────────────────────────────────
// Craftés depuis des composants Tier 2 (intermédiaires)
const RECIPES = {
  building_foam: {
    name:    "Building Foam",
    batch:   10,           // unités produites par batch
    machine: "Printer S",
    inputs: [              // quantités pour 1 batch
      { name: "Reinforced Alloys",  qty: 65 },
      { name: "Carbon Weave",       qty: 65 },
      { name: "Thermal Composites", qty: 65 },
    ]
  },
  // Ajouter d'autres produits finis ici
};

// ── TIER 2 — Intermédiaires ───────────────────────────────────────
// Craftés depuis des inputs Tier 1 (raffinés ou bruts)
const T2_RECIPES = {
  "Reinforced Alloys": {
    batch:   14,
    machine: "Refinery M",
    inputs: [
      { name: "Nickel-Iron Veins",       qty: 1050 },
      { name: "Feldspar Crystal Shards", qty: 1050 },
    ]
  },
  "Carbon Weave": {
    batch:   14,
    machine: "Refinery M",
    inputs: [
      { name: "Tholin Aggregates", qty: 3150 },
    ]
  },
  "Thermal Composites": {
    batch:   14,
    machine: "Refinery M",
    inputs: [
      { name: "Silicon Dust",            qty:  630 },
      { name: "Tholin Aggregates",       qty: 1260 },
      { name: "Feldspar Crystal Shards", qty:  210 },
    ]
  },
};

// ── TIER 1 — Raffinés ─────────────────────────────────────────────
// Raffinés dans une Refinery S : on met un raffiné en INPUT
// et on obtient des minerais bruts (T0) en OUTPUT
// Ex: 10 Iron-Rich Nodules → 198 Platinum-Group Veins + 20 Nickel-Iron Veins
const T1_RECIPES = {
  "Iron-Rich Nodules": {
    batch:   10,           // 10 nodules raffinés donnent :
    machine: "Refinery S",
    outputs: [
      { name: "Platinum-Group Veins", qty: 198 },
      { name: "Nickel-Iron Veins",    qty:  20 },
    ]
  },
  "Hydrocarbon Residue": {
    batch:   20,           // 20 résidus raffinés donnent :
    machine: "Refinery S",
    outputs: [
      { name: "Tholin Aggregates",       qty: 180 },
      { name: "Troilite Sulfide Grains", qty:  20 },
    ]
  },
  "Silica Grains": {
    batch:   20,           // 20 grains raffinés donnent :
    machine: "Refinery S",
    outputs: [
      { name: "Feldspar Crystal Shards", qty:  50 },
      { name: "Silicon Dust",            qty: 150 },
    ]
  },
};

// ── TIER 0 — Minerais bruts (astéroïdes) ─────────────────────────
// Minés dans des astéroïdes, raffinés pour donner des T1
// Chaque "batch" = 40 unités minées → outputs ci-dessous
const T0_RECIPES = {
  "Platinum-Palladium Matrix": {
    batch:    40,
    asteroid: "SLAG",
    volume:   100,   // volume d'une unité dans la soute
    outputs: [
      { name: "Silica Grains",     qty: 10 },
      { name: "Iron-Rich Nodules", qty: 30 },
    ]
  },
  "Hydrated Sulfide Matrix": {
    batch:    40,
    asteroid: "COMET",
    volume:   10,
    outputs: [
      { name: "Hydrocarbon Residue", qty:  20 },
      { name: "Water Ice",           qty: 200 },
    ]
  },
  "Feldspar Crystals": {
    batch:    40,
    asteroid: "CHAR",
    volume:   10,
    outputs: [
      { name: "Hydrocarbon Residue", qty: 10 },
      { name: "Silica Grains",       qty: 30 },
    ]
  },
};

// ── Sources des minerais bruts ────────────────────────────────────
// Pour chaque minerai T0, quel astéroïde et quel volume
const T0_SOURCES = {
  "Platinum-Group Veins":    { asteroid: "SLAG",  volume: 10 },
  "Nickel-Iron Veins":       { asteroid: "SLAG",  volume: 10 },
  "Tholin Aggregates":       { asteroid: "COMET", volume: 10 },
  "Troilite Sulfide Grains": { asteroid: "COMET", volume: 10 },
  "Feldspar Crystal Shards": { asteroid: "CHAR",  volume:  1 },
  "Silicon Dust":            { asteroid: "CHAR",  volume:  1 },
  "Water Ice":               { asteroid: "COMET", volume:  1 },
};

// ── Utilitaire : arrondi au batch supérieur ───────────────────────
function ceilBatch(needed, batchSize) {
  if (needed <= 0) return 0;
  return Math.ceil(needed / batchSize) * batchSize;
}

// ── Calculateur principal ─────────────────────────────────────────
// Retourne tout ce qu'il faut pour crafter wantedQty unités
function computeCraft(recipeKey, wantedQty) {
  const recipe = RECIPES[recipeKey];
  if (!recipe) return null;

  const finalBatches = Math.ceil(wantedQty / recipe.batch);
  const finalQty     = finalBatches * recipe.batch;

  const result = {
    final:      { name: recipe.name, needed: finalQty, batches: finalBatches },
    t2:         {},
    t1:         {},
    t0_raw:     {},
    byAsteroid: {},
  };

  // ── TIER 2 : composants nécessaires ────────────────────────────
  for (const inp of recipe.inputs) {
    const stock    = (window.ssuStock || {})[inp.name] || 0;
    const needed   = inp.qty * finalBatches;
    const toCraft  = Math.max(0, needed - stock);
    const r        = T2_RECIPES[inp.name];
    const batches  = r ? Math.ceil(toCraft / r.batch) : 0;
    result.t2[inp.name] = { needed, stock, toCraft, batches, actualCraft: batches * (r?.batch || 1), recipe: r };
  }

  // ── TIER 0 : minerais bruts directement nécessaires pour T2 ────
  // Les T2 consomment directement des minerais bruts (Nickel-Iron Veins, etc.)
  // Ces minerais bruts sont obtenus en raffinant des T1 (Iron-Rich Nodules → Nickel-Iron Veins)
  const t0needs = {};
  for (const [, t2] of Object.entries(result.t2)) {
    if (t2.batches === 0 || !t2.recipe) continue;
    for (const inp of t2.recipe.inputs) {
      t0needs[inp.name] = (t0needs[inp.name] || 0) + inp.qty * t2.batches;
    }
  }
  for (const [name, needed] of Object.entries(t0needs)) {
    const stock  = (window.ssuStock || {})[name] || 0;
    const toMine = Math.max(0, needed - stock);
    result.t0_raw[name] = { needed, stock, toMine };
  }

  // ── TIER 1 : raffinés à utiliser pour obtenir les T0 manquants ─
  // Pour chaque T0 manquant, trouver quel T1 le produit et combien en raffiner
  for (const [t0name, t0data] of Object.entries(result.t0_raw)) {
    if (t0data.toMine <= 0) continue;
    // Trouver le T1 qui produit ce T0
    for (const [t1name, t1rec] of Object.entries(T1_RECIPES)) {
      const out = t1rec.outputs.find(o => o.name === t0name);
      if (!out) continue;
      // Combien de batches T1 pour obtenir assez de T0 ?
      const batches     = Math.ceil(t0data.toMine / out.qty);
      const actualCraft = batches * t1rec.batch;
      if (!result.t1[t1name]) {
        result.t1[t1name] = { batches, actualCraft, recipe: t1rec, produces: [] };
      } else {
        // Prendre le max si ce T1 produit plusieurs T0 différents
        if (batches > result.t1[t1name].batches) {
          result.t1[t1name].batches     = batches;
          result.t1[t1name].actualCraft = actualCraft;
        }
      }
      result.t1[t1name].produces = result.t1[t1name].produces || [];
      result.t1[t1name].produces.push({ t0: t0name, qty: out.qty * batches });
      break;
    }
  }

  // ── Voyages par astéroïde ───────────────────────────────────────
  for (const [name, data] of Object.entries(result.t0_raw)) {
    if (data.toMine <= 0) continue;
    const src = T0_SOURCES[name];
    if (!src) continue;
    const ast = src.asteroid;
    if (!result.byAsteroid[ast]) result.byAsteroid[ast] = [];
    result.byAsteroid[ast].push({ name, ...data, volume: src.volume });
  }

  return result;
}
