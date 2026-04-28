// ══ RECIPES.JS — Recettes de craft EVE Frontier ══════════════════════
// Flux complet :
// ASTÉROÏDE → miner T0_RAW (Feldspar Crystals, Hydrated Sulfide Matrix, Platinum-Palladium Matrix)
//   → raffiner → T1_INTER (Silica Grains, Hydrocarbon Residue, Iron-Rich Nodules)
//     → raffiner → T0_MATS (Feldspar Crystal Shards, Silicon Dust, Tholin Aggregates, Nickel-Iron Veins...)
//       → crafter → T2 (Reinforced Alloys, Carbon Weave, Thermal Composites)
//         → crafter → T3 (Building Foam)

// ── TIER 3 — Produits finis ───────────────────────────────────────
const RECIPES = {
  building_foam: {
    name:    "Building Foam",
    batch:   10,
    machine: "Printer S",
    inputs: [
      { name: "Reinforced Alloys",  qty: 65 },
      { name: "Carbon Weave",       qty: 65 },
      { name: "Thermal Composites", qty: 65 },
    ]
  },
};

// ── TIER 2 — Composants intermédiaires ───────────────────────────
// Consomment des matières raffinées (T0_MATS)
const T2_RECIPES = {
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

// ── TIER 1 — Matières intermédiaires ─────────────────────────────
// Raffinées depuis les T0_RAW (astéroïdes), produisent des T0_MATS
// Ex: 20 Hydrocarbon Residue → 180 Tholin Aggregates + 20 Troilite Sulfide Grains
const T1_RECIPES = {
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

// ── TIER 0 RAW — Matières premières (minées dans les astéroïdes) ──
// 40 unités minées → produisent des T1_INTER
const T0_RAW_RECIPES = {
  "Platinum-Palladium Matrix": {
    batch: 40, asteroid: "SLAG", volume: 100,
    outputs: [
      { name: "Silica Grains",     qty: 10 },
      { name: "Iron-Rich Nodules", qty: 30 },
    ]
  },
  "Hydrated Sulfide Matrix": {
    batch: 40, asteroid: "COMET", volume: 10,
    outputs: [
      { name: "Hydrocarbon Residue", qty:  20 },
      { name: "Water Ice",           qty: 200 },
    ]
  },
  "Feldspar Crystals": {
    batch: 40, asteroid: "CHAR", volume: 10,
    outputs: [
      { name: "Hydrocarbon Residue", qty: 10 },
      { name: "Silica Grains",       qty: 30 },
    ]
  },
};

// ── Arrondi au batch supérieur ─────────────────────────────────────
function ceilBatch(needed, batchSize) {
  if (needed <= 0) return 0;
  return Math.ceil(needed / batchSize) * batchSize;
}

// ══ CALCULATEUR PRINCIPAL ════════════════════════════════════════
function computeCraft(recipeKey, wantedQty) {
  const recipe = RECIPES[recipeKey];
  if (!recipe) return null;
  const stock = window.ssuStock || {};

  // ── ÉTAPE 1 : T3 — combien de batches du produit final ──────────
  const finalBatches = Math.ceil(wantedQty / recipe.batch);
  const finalQty     = finalBatches * recipe.batch;

  const result = {
    final:      { name: recipe.name, needed: finalQty, batches: finalBatches },
    t2:         {},   // composants intermédiaires
    t0_mats:    {},   // matières raffinées nécessaires
    t1_inter:   {},   // matières intermédiaires à raffiner
    t0_raw:     {},   // matières premières à miner
    byAsteroid: {},   // voyages par astéroïde
  };

  // ── ÉTAPE 2 : T2 — composants à crafter ─────────────────────────
  for (const inp of recipe.inputs) {
    const needed      = inp.qty * finalBatches;
    const inStock     = stock[inp.name] || 0;
    const toCraft     = Math.max(0, needed - inStock);
    const r           = T2_RECIPES[inp.name];
    const batches     = r ? Math.ceil(toCraft / r.batch) : 0;
    const actualCraft = batches * (r?.batch || 1);
    result.t2[inp.name] = { needed, inStock, toCraft, batches, actualCraft, recipe: r };
  }

  // ── ÉTAPE 3 : T0_MATS — matières raffinées nécessaires ──────────
  // Chaque T2 à crafter consomme des T0_MATS
  const t0mats_needed = {};
  for (const [, t2] of Object.entries(result.t2)) {
    if (t2.batches === 0 || !t2.recipe) continue;
    for (const inp of t2.recipe.inputs) {
      t0mats_needed[inp.name] = (t0mats_needed[inp.name] || 0) + inp.qty * t2.batches;
    }
  }
  for (const [name, needed] of Object.entries(t0mats_needed)) {
    const inStock = stock[name] || 0;
    const toMake  = Math.max(0, needed - inStock);
    result.t0_mats[name] = { needed, inStock, toMake };
  }

  // ── ÉTAPE 4 : T1_INTER — intermédiaires à raffiner ──────────────
  // Pour chaque T0_MAT manquant, trouver quel T1 le produit
  // Un T1 peut produire PLUSIEURS T0_MATS à la fois
  // → calculer le nombre de batches T1 nécessaire pour chaque T0_MAT produit
  //   puis prendre le MAX pour ce T1

  const t1_batches_needed = {}; // { t1name: batchesNeeded }

  for (const [t0name, t0data] of Object.entries(result.t0_mats)) {
    if (t0data.toMake <= 0) continue;
    for (const [t1name, t1rec] of Object.entries(T1_RECIPES)) {
      const out = t1rec.outputs.find(o => o.name === t0name);
      if (!out) continue;
      // Combien de batches T1 pour produire assez de ce T0 ?
      const batchesForThis = Math.ceil(t0data.toMake / out.qty);
      t1_batches_needed[t1name] = Math.max(
        t1_batches_needed[t1name] || 0,
        batchesForThis
      );
    }
  }

  for (const [t1name, batches] of Object.entries(t1_batches_needed)) {
    if (batches === 0) continue;
    const t1rec       = T1_RECIPES[t1name];
    const actualCraft = batches * t1rec.batch;
    const inStock     = stock[t1name] || 0;
    // Ce que ce raffinage va produire
    const produces    = t1rec.outputs.map(o => ({
      name: o.name,
      qty:  o.qty * batches,
    }));
    result.t1_inter[t1name] = { batches, actualCraft, inStock, produces, recipe: t1rec };
  }

  // ── ÉTAPE 5 : T0_RAW — matières premières à miner ───────────────
  // Pour chaque T1_INTER à raffiner, il faut des T0_RAW
  // Trouver quel T0_RAW produit ce T1_INTER (via ses outputs)
  for (const [t1name, t1data] of Object.entries(result.t1_inter)) {
    // Chercher le T0_RAW dont un des outputs est ce T1
    for (const [rawName, rawRec] of Object.entries(T0_RAW_RECIPES)) {
      const out = rawRec.outputs.find(o => o.name === t1name);
      if (!out) continue;
      // Combien de batches T0_RAW pour produire assez de T1 ?
      const batchesNeeded = Math.ceil(t1data.actualCraft / out.qty);
      const toMine        = batchesNeeded * rawRec.batch;
      const inStock       = stock[rawName] || 0;
      const toMineNet     = Math.max(0, toMine - inStock);
      // Prendre le max si plusieurs T1 viennent du même T0_RAW
      if (!result.t0_raw[rawName] || toMineNet > result.t0_raw[rawName].toMineNet) {
        result.t0_raw[rawName] = {
          needed: toMine, inStock, toMineNet,
          batches: Math.ceil(toMineNet / rawRec.batch),
          asteroid: rawRec.asteroid,
          volume: rawRec.volume,
        };
      }
    }
  }

  // ── ÉTAPE 6 : Voyages de minage par astéroïde ───────────────────
  for (const [rawName, rawData] of Object.entries(result.t0_raw)) {
    if (rawData.toMineNet <= 0) continue;
    const ast = rawData.asteroid;
    if (!result.byAsteroid[ast]) result.byAsteroid[ast] = [];
    const perTrip  = Math.floor(990 / rawData.volume); // sera surchargé par la soute
    result.byAsteroid[ast].push({
      name: rawName,
      toMine: rawData.toMineNet,
      volume: rawData.volume,
    });
  }

  return result;
}
