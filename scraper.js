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

    console.log(`Début de l'aspiration pour le type: ${t}`);

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
        
        console.log(`Page ${pageCount} récupérée. Total en mémoire : ${results.length}`);
      } catch (e) {
        console.error("Erreur durant la pagination :", e.message);
        break; // On arrête la boucle en cas de plantage réseau de Sui
      }
    }
  }
  
  // On sauvegarde tout dans le fichier JSON
  fs.writeFileSync('database.json', JSON.stringify(results));
  console.log(`Terminé ! Fichier database.json généré avec ${results.length} personnages.`);
}

fetchAll();