// ══ NAV.JS — Navigation & état global partagé ════════════════════════
// Chargé en premier sur toutes les pages
// Stocke le personnage sélectionné via sessionStorage pour persister entre pages

const NAV = {

  // ── Initialisation de la nav ────────────────────────────────────
  init(activePage) {
    // Marquer l'onglet actif
    document.querySelectorAll('.nav-tab').forEach(t => {
      if (t.dataset.page === activePage) t.classList.add('active');
    });

    // Restaurer le personnage depuis sessionStorage
    const saved = sessionStorage.getItem('eve_selected_char');
    if (saved) {
      try {
        window.selChar = JSON.parse(saved);
        this.updateCharBadge();
      } catch(e) { sessionStorage.removeItem('eve_selected_char'); }
    }

    // Restaurer les stocks SSU
    const savedStock = sessionStorage.getItem('eve_ssu_stock');
    if (savedStock) {
      try { window.ssuStock = JSON.parse(savedStock); } catch(e) {}
    }
  },

  // ── Sauvegarder le perso sélectionné ───────────────────────────
  saveChar(char) {
    window.selChar = char;
    sessionStorage.setItem('eve_selected_char', JSON.stringify(char));
    this.updateCharBadge();
  },

  // ── Sauvegarder les stocks SSU ──────────────────────────────────
  saveStock(stock) {
    window.ssuStock = stock;
    sessionStorage.setItem('eve_ssu_stock', JSON.stringify(stock));
  },

  // ── Effacer le perso ────────────────────────────────────────────
  clearChar() {
    window.selChar = null;
    window.ssuStock = {};
    sessionStorage.removeItem('eve_selected_char');
    sessionStorage.removeItem('eve_ssu_stock');
    sessionStorage.removeItem('eve_dash_loaded');
    this.updateCharBadge();
  },

  // ── Mettre à jour le badge nav ──────────────────────────────────
  updateCharBadge() {
    const el = document.getElementById('navChar');
    const nm = document.getElementById('navCharName');
    if (!el || !nm) return;
    if (window.selChar) {
      nm.textContent = window.selChar.name || '—';
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  },

  // ── Dashboard chargé ? ──────────────────────────────────────────
  isDashLoaded() {
    return sessionStorage.getItem('eve_dash_loaded') === '1';
  },

  setDashLoaded(v) {
    if (v) sessionStorage.setItem('eve_dash_loaded', '1');
    else    sessionStorage.removeItem('eve_dash_loaded');
  },
};

// État global (accessible par toutes les pages)
window.selChar  = null;
window.ssuStock = {};

// ── HTML de la nav (injecté dans chaque page) ─────────────────────
function injectNav(activePage) {
  const pages = [
    { id: 'registry',     label: '◈ Registry',      href: 'index.html'         },
    { id: 'dashboard',    label: '⬡ Dashboard',      href: 'dashboard.html'     },
    { id: 'construction', label: '⚙ Construction',   href: 'construction.html'  },
    { id: 'recipes',      label: '📋 Recettes',       href: 'recipes.html'       },
  ];

  const tabs = pages.map(p => `
    <a href="${p.href}" class="nav-tab${p.id === activePage ? ' active' : ''}" data-page="${p.id}">
      ${p.label}
    </a>`).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <nav>
      <div class="nav-logo">EVE<span>//</span>FRONTIER</div>
      <div class="nav-tabs">${tabs}</div>
      <div class="nav-char" id="navChar">
        <div class="nav-char-dot"></div>
        <span class="nav-char-name" id="navCharName">—</span>
        <span class="nav-char-x" onclick="NAV.clearChar();location.reload();" title="Déconnexion">✕</span>
      </div>
    </nav>`);

  NAV.init(activePage);
}

// ── Utilitaires communs ───────────────────────────────────────────
function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function setStatus(ns, type, msg) {
  const dot = document.getElementById(ns + 'Dot');
  const txt = document.getElementById(ns + 'Status');
  if (dot) dot.className = 'dot ' + type;
  if (txt) txt.textContent = msg;
}

function cp(id, label, btn) {
  const v = document.getElementById(id)?.textContent;
  if (v && v !== '—') {
    navigator.clipboard.writeText(v).then(() => {
      btn.textContent = '[ copied! ]';
      setTimeout(() => btn.textContent = label, 1500);
    });
  }
}
