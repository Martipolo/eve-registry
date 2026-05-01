// ══ RECIPES.JS ═══════════════════════════════════════════════════
//
// FLUX COMPLET (5 étapes) :
//
// ÉTAPE 1 : Miner des MATRICES BRUTES dans les astéroïdes
//   SLAG  → Platinum-Palladium Matrix (40u) → 10 Silica Grains + 30 Iron-Rich Nodules + 8 Palladium
//   COMET → Hydrated Sulfide Matrix   (40u) → 20 Hydrocarbon Residue + 200 Water Ice
//   CHAR  → Feldspar Crystals         (40u) → 10 Hydrocarbon Residue + 30 Silica Grains
//
// ÉTAPE 2 : Raffiner les INTERMÉDIAIRES → donne des MATIÈRES BRUTES
//   10 Iron-Rich Nodules      → 198 Platinum-Group Veins + 20 Nickel-Iron Veins
//   20 Hydrocarbon Residue    → 180 Tholin Aggregates + 20 Troilite Sulfide Grains
//   20 Silica Grains          → 50 Feldspar Crystal Shards + 150 Silicon Dust
//
// ÉTAPE 3 : Crafter les COMPOSANTS depuis les MATIÈRES BRUTES
//   Mini Printer : 1050 Nickel-Iron Veins + 1050 Feldspar Crystal Shards → 14 Reinforced Alloys
//   Field Printer: 105 Silica Grains + 70 Iron-Rich Nodules + 70 Palladium → 8 Reinforced Alloys
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
    name: "Reinforced Alloys", batch: 14, machine: "Mini Printer",
    isSelfCraft: true,
    inputs: [
      { name: "Nickel-Iron Veins",       qty: 1050 },
      { name: "Feldspar Crystal Shards", qty: 1050 },
    ]
  },
  carbon_weave: {
    name: "Carbon Weave", batch: 14, machine: "Mini Printer",
    isSelfCraft: true,
    inputs: [
      { name: "Tholin Aggregates", qty: 3150 },
    ]
  },
  thermal_composites: {
    name: "Thermal Composites", batch: 14, machine: "Mini Printer",
    isSelfCraft: true,
    inputs: [
      { name: "Silicon Dust",            qty:  630 },
      { name: "Tholin Aggregates",       qty: 1260 },
      { name: "Feldspar Crystal Shards", qty:  210 },
    ]
  },
};

// ─────────────────────────────────────────────────────────────────
// ÉTAPE 3 — Composants par machine
// ─────────────────────────────────────────────────────────────────
const MACHINES = ["Mini Printer", "Field Printer"];
const DEFAULT_MACHINE = "Mini Printer";

const COMPOSANTS_BY_MACHINE = {
  "Mini Printer": {
    "Reinforced Alloys": {
      batch: 14,
      inputs: [
        { name: "Nickel-Iron Veins",       qty: 1050 },
        { name: "Feldspar Crystal Shards", qty: 1050 },
      ]
    },
    "Carbon Weave": {
      batch: 14,
      inputs: [
        { name: "Tholin Aggregates", qty: 3150 },
      ]
    },
    "Thermal Composites": {
      batch: 14,
      inputs: [
        { name: "Silicon Dust",            qty:  630 },
        { name: "Tholin Aggregates",       qty: 1260 },
        { name: "Feldspar Crystal Shards", qty:  210 },
      ]
    },
  },
  "Field Printer": {
    "Reinforced Alloys": {
      batch: 8,
      inputs: [
        { name: "Silica Grains",     qty: 105 },
        { name: "Iron-Rich Nodules", qty:  70 },
        { name: "Palladium",         qty:  70 },
      ]
    },
    "Carbon Weave": {
      batch: 14,
      inputs: [
        { name: "Hydrocarbon Residue", qty: 350 },
      ]
    },
    "Thermal Composites": {
      batch: 14,
      inputs: [
        { name: "Hydrocarbon Residue", qty: 140 },
        { name: "Silica Grains",       qty:  90 },
      ]
    },
  },
};

// Alias Mini Printer pour compatibilité avec recipes.html
const COMPOSANTS = COMPOSANTS_BY_MACHINE[DEFAULT_MACHINE];

function getComposantRecipe(name, machine) {
  const m = COMPOSANTS_BY_MACHINE[machine] || COMPOSANTS_BY_MACHINE[DEFAULT_MACHINE];
  return (m && m[name]) || COMPOSANTS_BY_MACHINE[DEFAULT_MACHINE][name] || null;
}

// ─────────────────────────────────────────────────────────────────
// ÉTAPE 2 — Intermédiaires (raffinés → donnent des matières brutes)
// ─────────────────────────────────────────────────────────────────
const INTERMEDIAIRES = {
  "Iron-Rich Nodules": {
    batch: 10, machine: "Refinery",
    outputs: [
      { name: "Platinum-Group Veins", qty: 198 },
      { name: "Nickel-Iron Veins",    qty:  20 },
    ]
  },
  "Hydrocarbon Residue": {
    batch: 20, machine: "Refinery",
    outputs: [
      { name: "Tholin Aggregates",       qty: 180 },
      { name: "Troilite Sulfide Grains", qty:  20 },
    ]
  },
  "Silica Grains": {
    batch: 20, machine: "Refinery",
    outputs: [
      { name: "Feldspar Crystal Shards", qty:  50 },
      { name: "Silicon Dust",            qty: 150 },
    ]
  },
};

// ─────────────────────────────────────────────────────────────────
// ÉTAPE 1 — Matrices brutes (minées dans les astéroïdes)
// ─────────────────────────────────────────────────────────────────
const MATRICES = {
  "Platinum-Palladium Matrix": {
    batch: 40, asteroid: "SLAG", volume: 1,
    outputs: [
      { name: "Silica Grains",     qty: 10 },
      { name: "Iron-Rich Nodules", qty: 30 },
      { name: "Palladium",         qty:  8 },
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

function _computeIntermediaires(result, stock) {
  const t0mats = result.matieres;
  for (const [matName, matData] of Object.entries(t0mats)) {
    if (matData.manque <= 0) continue;
    for (const [interName, interRec] of Object.entries(INTERMEDIAIRES)) {
      const out = interRec.outputs.find(o => o.name === matName);
      if (!out) continue;
      const b = Math.ceil(matData.manque / out.qty);
      const prev = result.intermediaires[interName];
      if (!prev || b > prev.batches) {
        const toUse    = b * interRec.batch;
        const inStock  = stock[interName] || 0;
        const manque   = Math.max(0, toUse - inStock);
        const produces = interRec.outputs.map(o => ({ name: o.name, qty: o.qty * b }));
        result.intermediaires[interName] = { toUse, inStock, manque, batches: b, produces, rec: interRec };
      }
    }
  }
}

// Calcule les matrices à partir des INTERMÉDIAIRES (chemin Mini Printer)
function _computeMatrices(result, stock) {
  for (const [interName, interData] of Object.entries(result.intermediaires)) {
    if (interData.manque <= 0) continue;
    let best = null;
    for (const [matrixName, matrixRec] of Object.entries(MATRICES)) {
      const out = matrixRec.outputs.find(o => o.name === interName);
      if (!out) continue;
      const batches = Math.ceil(interData.manque / out.qty);
      if (!best || batches < best.batches) best = { matrixName, batches, rec: matrixRec };
    }
    if (!best) continue;
    const existing = result.matrices[best.matrixName];
    const batches  = existing ? Math.max(existing.batches, best.batches) : best.batches;
    const toMine   = batches * best.rec.batch;
    const inStock  = stock[best.matrixName] || 0;
    const manque   = Math.max(0, toMine - inStock);
    result.matrices[best.matrixName] = { toMine, inStock, manque, batches, asteroid: best.rec.asteroid, volume: best.rec.volume };
  }
}

// Calcule les matrices directement depuis les MATIÈRES BRUTES (chemin Field Printer)
function _computeMatricesFromMatieres(result, stock) {
  for (const [matName, matData] of Object.entries(result.matieres)) {
    if (matData.manque <= 0) continue;
    let best = null;
    for (const [matrixName, matrixRec] of Object.entries(MATRICES)) {
      const out = matrixRec.outputs.find(o => o.name === matName);
      if (!out) continue;
      const batches = Math.ceil(matData.manque / out.qty);
      if (!best || batches < best.batches) best = { matrixName, batches, rec: matrixRec };
    }
    if (!best) continue;
    const existing = result.matrices[best.matrixName];
    const batches  = existing ? Math.max(existing.batches, best.batches) : best.batches;
    const toMine   = batches * best.rec.batch;
    const inStock  = stock[best.matrixName] || 0;
    const manque   = Math.max(0, toMine - inStock);
    result.matrices[best.matrixName] = { toMine, inStock, manque, batches, asteroid: best.rec.asteroid, volume: best.rec.volume };
  }
}

// Construit result.byAsteroid depuis result.matrices
function _buildByAsteroid(result) {
  result.byAsteroid = {};
  for (const [name, data] of Object.entries(result.matrices)) {
    if (data.manque <= 0) continue;
    const ast = data.asteroid;
    if (!result.byAsteroid[ast]) result.byAsteroid[ast] = [];
    result.byAsteroid[ast].push({ name, toMine: data.manque, volume: data.volume });
  }
}

function computeCraft(recipeKey, wantedQty, machineChoices = {}) {
  const recipe = RECIPES[recipeKey];
  if (!recipe) return null;
  const stock = window.ssuStock || {};

  const result = {
    final: {}, composants: {}, matieres: {}, intermediaires: {}, matrices: {}, byAsteroid: {},
  };

  // ── CAS isSelfCraft : le produit est lui-même le composant final ─
  if (recipe.isSelfCraft) {
    const machine     = machineChoices[recipe.name] || DEFAULT_MACHINE;
    const recipeToUse = getComposantRecipe(recipe.name, machine) || recipe;
    const inStock     = stock[recipe.name] || 0;
    const batches     = Math.ceil(wantedQty / recipeToUse.batch);
    const toCraft     = batches * recipeToUse.batch;
    result.final      = { name: recipe.name, needed: wantedQty, inStock, batches, toCraft, machine };

    for (const inp of recipeToUse.inputs) {
      const needed = inp.qty * batches;
      const inStk  = stock[inp.name] || 0;
      result.matieres[inp.name] = { needed, inStock: inStk, manque: Math.max(0, needed - inStk) };
    }
    _computeIntermediaires(result, stock);
    _computeMatrices(result, stock);
    _computeMatricesFromMatieres(result, stock);
    _buildByAsteroid(result);
    return result;
  }

  // ── CAS NORMAL : produit final avec composants T2 ───────────────
  const finalBatches = Math.ceil(wantedQty / recipe.batch);
  const finalQty     = finalBatches * recipe.batch;
  const finalInStock = stock[recipe.name] || 0;
  result.final = { name: recipe.name, needed: finalQty, batches: finalBatches, inStock: finalInStock };

  // ── ÉTAPE 3 : composants à crafter (avec choix machine par composant)
  for (const inp of recipe.inputs) {
    const needed  = inp.qty * finalBatches;
    const inStock = stock[inp.name] || 0;
    const manque  = Math.max(0, needed - inStock);
    const machine = machineChoices[inp.name] || DEFAULT_MACHINE;
    const rec     = getComposantRecipe(inp.name, machine);
    const batches = rec ? Math.ceil(manque / rec.batch) : 0;
    const toCraft = batches * (rec?.batch || 1);
    result.composants[inp.name] = { needed, inStock, manque, batches, toCraft, rec, machine };
  }

  // ── Matières brutes nécessaires (inputs des composants à crafter)
  const matNeeds = {};
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

  // ── ÉTAPES 2 & 1 : intermédiaires + matrices ────────────────────
  _computeIntermediaires(result, stock);
  _computeMatrices(result, stock);
  _computeMatricesFromMatieres(result, stock);
  _buildByAsteroid(result);

  return result;
}
