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
    { id: 'dashboard',    label: '⬡ Dashboard',   href: 'dashboard.html'    },
    { id: 'construction', label: '⚙ Construction', href: 'construction.html' },
    { id: 'recipes',      label: '◧ Recipes',      href: 'recipes.html'      },
  ];

  const tabs = pages.map(p => `
    <a href="${p.href}" class="nav-tab${p.id === activePage ? ' active' : ''}" data-page="${p.id}">
      ${p.label}
    </a>`).join('');

  const logoSVG = `<svg class="nav-logo-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="14,2 24,7.5 24,20.5 14,26 4,20.5 4,7.5" stroke="#f05a22" stroke-width="1.2" fill="none"/>
    <polygon points="14,7 19.5,10.25 19.5,17.75 14,21 8.5,17.75 8.5,10.25" stroke="#b33b12" stroke-width="0.8" fill="#f05a2208"/>
    <circle cx="14" cy="14" r="2.2" fill="#f05a22"/>
    <line x1="14" y1="2" x2="14" y2="7" stroke="#f05a22" stroke-width="0.8" opacity="0.4"/>
    <line x1="14" y1="21" x2="14" y2="26" stroke="#f05a22" stroke-width="0.8" opacity="0.4"/>
    <line x1="4" y1="7.5" x2="8.5" y2="10.25" stroke="#f05a22" stroke-width="0.8" opacity="0.4"/>
    <line x1="24" y1="7.5" x2="19.5" y2="10.25" stroke="#f05a22" stroke-width="0.8" opacity="0.4"/>
    <line x1="4" y1="20.5" x2="8.5" y2="17.75" stroke="#f05a22" stroke-width="0.8" opacity="0.4"/>
    <line x1="24" y1="20.5" x2="19.5" y2="17.75" stroke="#f05a22" stroke-width="0.8" opacity="0.4"/>
  </svg>`;

  document.body.insertAdjacentHTML('afterbegin', `
    <nav>
      <a href="index.html" class="nav-logo">
        ${logoSVG}
        <div class="nav-logo-text">EF MINING<span>PLANNER</span></div>
      </a>
      <div class="nav-tabs">${tabs}</div>
      <div style="margin-left:auto;display:flex;align-items:center;gap:12px">
        <select id="langPicker" onchange="loadLang(this.value)"
          style="background:var(--bg3);border:1px solid var(--border);
                 color:var(--text3);font-family:'Share Tech Mono',monospace;
                 font-size:10px;padding:4px 8px;cursor:pointer;height:28px;outline:none">
          <option value="en">🇬🇧 EN</option>
          <option value="fr">🇫🇷 FR</option>
        </select>
      <div class="nav-char" id="navChar">
        <div class="nav-char-dot"></div>
        <span class="nav-char-name" id="navCharName">—</span>
        <span class="nav-char-x" onclick="NAV.clearChar();location.reload();" title="Disconnect">✕</span>
      </div>
      </div>
    </nav>`);

  NAV.init(activePage);
  initLang();
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

// ══ I18N — Moteur de traduction ═══════════════════════════════════
const SUPPORTED_LANGS = ['en', 'fr'];
let i18nData = {};

// Charger une langue et l'appliquer
async function loadLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
  try {
    const r = await fetch(`lang/${lang}.json`);
    if (!r.ok) throw new Error();
    i18nData = await r.json();
  } catch(e) {
    // Fallback : si le fichier ne charge pas, on garde l'anglais en mémoire
    console.warn(`i18n: could not load lang/${lang}.json`);
    i18nData = {};
  }
  localStorage.setItem('eve_lang', lang);
  // Mettre à jour le sélecteur
  const picker = document.getElementById('langPicker');
  if (picker) picker.value = lang;
  // Appliquer les traductions
  applyTranslations();
}

// Traduire une clé (avec remplacement optionnel de {n})
function t(key, replacements = {}) {
  let text = i18nData[key] || key;
  for (const [k, v] of Object.entries(replacements)) {
    text = text.replace(`{${k}}`, v);
  }
  return text;
}

// Appliquer toutes les traductions sur la page
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.tagName === 'INPUT' && el.placeholder) {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  // Attributs placeholder séparés
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
}

// Initialiser la langue au chargement
function initLang() {
  const saved = localStorage.getItem('eve_lang') || 'en';
  loadLang(saved);
}
