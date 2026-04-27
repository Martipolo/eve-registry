const fs = require('fs');

const GQL = 'https://graphql.testnet.sui.io/graphql';
const typePatterns = [
  '0x28b497559d65ab320d9da4613bf2498d5946b2c0ae3597ccfda3072ce127448c::character::Character'
];
const Q_BY_TYPE = `
query GetByType($type: String, $first: Int, $after: String) {
  objects(filter:{type:$type} first:$first after:$after) {
    nodes { address asMoveObject { contents { json type { repr } } } }
    pageInfo { hasNextPage endCursor }
  }
}`;

async function fetchAll() {
  let results = [];
  
  for (const t of typePatterns) {
    let hasNextPage = true;
    let cursor = null;
    let pageCount = 0;

    console.log(`Début de l'aspiration totale pour : ${t}`);

    while (hasNextPage) {
      try {
        const response = await fetch(GQL, {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({query: Q_BY_TYPE, variables: {type: t, first: 50, after: cursor}})
        });
        
        const d = await response.json();
        const objects = d?.data?.objects;
        if (!objects) break;
        
        const nodes = objects.nodes || [];
        // Transformation des données...
        const parsed = nodes.map(n => {
          const j = n?.asMoveObject?.contents?.json;
          if (!j) return null;
          return {
            address : n.address || '',
            name    : j.metadata?.name || j.name || 'Inconnu',
            itemId  : j.key?.item_id || j.id || '',
            wallet  : j.character_address || '',
            tribe   : j.tribe_id !== undefined ? String(j.tribe_id) : '',
            tenant  : j.key?.tenant || '',
            typeRepr: n?.asMoveObject?.contents?.type?.repr || ''
          };
        }).filter(c => c && c.name);
        
        results = results.concat(parsed);
        hasNextPage = objects.pageInfo?.hasNextPage;
        cursor = objects.pageInfo?.endCursor;
        pageCount++;
        
        // Log de progression pour suivre l'avancement dans la console GitHub
        if (pageCount % 10 === 0) {
          console.log(`📊 Progression : ${results.length} personnages récupérés...`);
        }
      } catch (e) {
        console.error("⚠️ Interruption réseau :", e.message);
        break; 
      }
    }
  }
  
  fs.writeFileSync('database.json', JSON.stringify(results));
  console.log(`✅ Extraction terminée : ${results.length} personnages sauvegardés.`);
}

fetchAll();
