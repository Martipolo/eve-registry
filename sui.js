// ══ SUI.JS — Fonctions blockchain Sui ════════════════════════════════
// Centralise tous les appels RPC Sui et la résolution des noms d'items
// Chargé par dashboard.html uniquement

const SUI_RPC   = "https://fullnode.testnet.sui.io:443";
const EVE_API   = "https://world-api-utopia.uat.pub.evefrontier.com/v2/types/";

const TARGET_TYPE = "0x28b497559d65ab320d9da4613bf2498d5946b2c0ae3597ccfda3072ce127448c::access::OwnerCap<0x28b497559d65ab320d9da4613bf2498d5946b2c0ae3597ccfda3072ce127448c::storage_unit::StorageUnit>";

// ── Mapping Type ID → Nom lisible ────────────────────────────────
// Évite les appels API inutiles pour les items courants
const TYPE_ID_MAP = {
  "77801": "Nickel-Iron Veins",
  "77802": "Feldspar Crystal Shards",
  "77803": "Silicon Dust",
  "77804": "Tholin Aggregates",
  "77805": "Platinum-Group Veins",
  "77806": "Water Ice",
  "88083": "Platinum-Palladium Matrix",
  "88084": "Hydrated Sulfide Matrix",
  "88085": "Feldspar Crystals",
  "88234": "Troilite Sulfide Grains",
  "89258": "Hydrocarbon Residue",
  "89259": "Silica Grains",
  "89260": "Iron-Rich Nodules",
  "84182": "Reinforced Alloys",
  "84210": "Carbon Weave",
  "88561": "Thermal Composites",
  "88083": "Platinum-Palladium Matrix",
};

let nameCache = {};

// ── Appel RPC Sui ────────────────────────────────────────────────
async function callSui(method, params) {
  const r = await fetch(SUI_RPC, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
    signal: AbortSignal.timeout(15000),
  });
  return r.json();
}

// ── Résolution du nom d'un item par type_id ──────────────────────
async function getItemName(typeId) {
  if (TYPE_ID_MAP[typeId]) return TYPE_ID_MAP[typeId];
  if (nameCache[typeId])   return nameCache[typeId];
  try {
    const res = await fetch(`${EVE_API}${typeId}?format=json`, {
      signal: AbortSignal.timeout(5000)
    });
    const d = await res.json();
    nameCache[typeId] = d.name || `ID ${typeId}`;
    return nameCache[typeId];
  } catch {
    return `ID ${typeId}`;
  }
}

// ── Récupère tous les objets possédés par un wallet (paginé) ─────
async function getOwnedObjects(wallet, addLog) {
  let allObjects = [];
  let cursor = null;
  let safetyCount = 0;

  while (safetyCount < 20) {
    safetyCount++;
    const page = await callSui("suix_getOwnedObjects", [
      wallet,
      { options: { showContent: true, showType: true } },
      cursor || null,
      50
    ]);
    const pageData = page.result?.data || [];
    allObjects = allObjects.concat(pageData);
    if (addLog) addLog(`  page ${safetyCount}: ${pageData.length} objets (total: ${allObjects.length})`);
    const nextCursor = page.result?.nextCursor;
    const hasNext    = page.result?.hasNextPage === true;
    if (!hasNext || !nextCursor || pageData.length === 0) break;
    if (nextCursor === cursor) { if (addLog) addLog('  ⚠️ curseur identique, arrêt', '#d29922'); break; }
    cursor = nextCursor;
  }
  return allObjects;
}

// ── Scan complet des SSU d'un personnage ─────────────────────────
async function scanSSU(ownerWallet, addLog) {
  addLog(`Scanning wallet: ${ownerWallet.slice(0, 20)}...`);

  // 1. Tous les objets du wallet
  const allObjects = await getOwnedObjects(ownerWallet, addLog);
  const caps = allObjects.filter(o => o.data?.type === TARGET_TYPE);
  addLog(`${allObjects.length} objects scanned → ${caps.length} storage key(s) found.`);

  if (caps.length === 0) return { ssuCards: [], stock: {} };

  const ssuCards = [];
  const stock    = {};

  for (let i = 0; i < caps.length; i++) {
    const cap = caps[i];
    addLog(`SSU ${i + 1}/${caps.length}...`);

    try {
      const ssuId = cap.data?.content?.fields?.authorized_object_id;
      if (!ssuId) { addLog(`⚠️ Cap ${i+1} : no authorized_object_id`, '#d29922'); continue; }

      // 2. Lire l'objet SSU
      const ssuObj = await callSui("sui_getObject", [ssuId, { showContent: true }]);
      if (!ssuObj.result?.data) { addLog(`⚠️ SSU ${ssuId.slice(0,12)}... not found`, '#d29922'); continue; }

      const fields    = ssuObj.result.data.content.fields;
      const ssuName   = fields.metadata?.fields?.name || `Storage Unit ${i + 1}`;
      const statusVar = fields.status?.fields?.status?.variant || 'UNKNOWN';
      addLog(`✓ ${ssuName} [${statusVar}]`);

      // 3. Dynamic Fields → inventaires
      const dfRes  = await callSui("suix_getDynamicFields", [ssuId]);
      const dfList = dfRes.result?.data || [];

      let items   = [];
      let usedCap = 0;
      let maxCap  = 2000000;

      for (const df of dfList) {
        const invObj = await callSui("sui_getObject", [df.objectId, { showContent: true }]);
        const raw    = invObj.result?.data?.content?.fields;
        if (!raw) continue;
        const inv  = raw.value?.fields || raw;
        usedCap   += parseInt(inv.used_capacity || '0');
        maxCap     = parseInt(inv.max_capacity  || '2000000');
        const contents = inv.items?.fields?.contents || [];
        for (const item of contents) {
          const d = item.fields?.value?.fields;
          if (!d) continue;
          const tname = await getItemName(d.type_id);
          items.push({ name: tname, qty: parseInt(d.quantity), type_id: d.type_id });
          stock[tname] = (stock[tname] || 0) + parseInt(d.quantity);
        }
      }

      ssuCards.push({ name: ssuName, id: ssuId, items, maxCap, usedCap, status: statusVar });

    } catch (err) {
      addLog(`⚠️ SSU ${i+1} erreur : ${err.message}`, '#d29922');
    }
  }

  return { ssuCards, stock };
}
