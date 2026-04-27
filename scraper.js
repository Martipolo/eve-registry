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

// Fonction magique pour faire une pause et ne pas se faire bloquer par Sui
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchAll() {
  let results = [];
  
  for (const t of typePatterns) {
    let hasNextPage = true;
    let cursor = null;
    let pageCount = 0;

    console.log(`🚀 Début de l'aspiration totale pour : ${t}`);

    while (hasNextPage) {
      try {
        // On demande 100 joueurs d'un coup
        const response = await fetch(GQL, {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({query: Q_BY_TYPE, variables: {type: t, first: 100, after: cursor}})
        });
        
        const d = await response.json();
        
        // Si la blockchain renvoie une erreur stricte (ex: limite de 10k atteinte)
        if (d.errors) {
            console.error("🛑 Erreur renvoyée par Sui :", JSON.stringify(d.errors));
            break; // On arrête la boucle proprement
        }

        const objects = d?.data?.objects;
        if (!objects) {
            console.log("⚠️ Aucun objet trouvé ou fin de la liste.");
            break;
        }
        
        const nodes = objects.nodes || [];
        if (nodes.length === 0) break; // Sécurité anti-boucle infinie

        // Extraction des données de la page
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
        
        // Affiche la progression
        if (pageCount % 5 === 0) {
          console.log(`📊 Progression : ${results.length} personnages récupérés...`);
        }

        // LA PAUSE STRATÉGIQUE (500 millisecondes)
        await sleep(500);

      } catch (e) {
        console.error("⚠️ Interruption réseau :", e.message);
        break; 
      }
    }
  }
  
  // Sauvegarde finale
  fs.writeFileSync('database.json', JSON.stringify(results));
  console.log(`✅ Extraction terminée : ${results.length} personnages sauvegardés.`);
}

fetchAll();
