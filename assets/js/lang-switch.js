/**
 * assets/js/lang-switch.js
 * Sistema de alternância de idioma PT/EN
 * Usa localStorage para persistir a escolha e substitui textos via data-attributes
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initLangSwitch();
});

function initLangSwitch() {
  const stored = localStorage.getItem('site-lang');
  const htmlLang = document.documentElement.lang || 'pt';
  // Validar idioma — apenas pt ou en
  const validLangs = ['pt', 'en'];
  const currentLang = (stored && validLangs.includes(stored)) ? stored : htmlLang;

  // Sincronizar localStorage com o idioma efectivo (previne divergência)
  localStorage.setItem('site-lang', currentLang);

  // Aplicar idioma guardado
  if (currentLang !== htmlLang) {
    applyLanguage(currentLang);
  }
  updateToggleUI(currentLang);

  // Debounce para evitar cliques rápidos
  let switching = false;

  function switchLang(lang) {
    if (switching || !validLangs.includes(lang)) return;
    switching = true;
    localStorage.setItem('site-lang', lang);
    applyLanguage(lang);
    updateToggleUI(lang);
    // Debounce de 300ms
    setTimeout(() => { switching = false; }, 300);
  }

  // Clique nos botões PT / EN
  document.querySelectorAll('[data-lang-switch]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      switchLang(btn.dataset.langSwitch);
    });
  });

  // Também tratar o botão PT (que não tem data-lang-switch)
  document.querySelectorAll('.lang-btn[lang="pt"]').forEach(btn => {
    if (!btn.hasAttribute('data-lang-switch')) {
      btn.dataset.langSwitch = 'pt';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        switchLang('pt');
      });
    }
  });
}

function updateToggleUI(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('lang') || btn.dataset.langSwitch;
    btn.classList.toggle('active', btnLang === lang);
    if (btnLang === lang) {
      btn.setAttribute('aria-current', 'true');
    } else {
      btn.removeAttribute('aria-current');
    }
  });

  // Actualizar atributo lang do HTML
  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;
}

function applyLanguage(lang) {
  // Trocar todos os elementos com data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = getTranslation(lang, key);
    if (translation) {
      el.textContent = translation;
    }
  });

  // Trocar aria-labels com data-i18n-aria
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    const translation = getTranslation(lang, key);
    if (translation) {
      el.setAttribute('aria-label', translation);
    }
  });
}

/**
 * Dicionário embutido — espelha _data/translations.yml
 * Necessário porque Jekyll gera HTML estático e não temos acesso ao YAML no cliente
 */
const TRANSLATIONS = {
  pt: {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.books': 'Livros',
    'nav.articles': 'Artigos',
    'nav.chapters': 'Capítulos',
    'nav.projects': 'Projectos',
    'nav.teaching': 'Ensino',
    'nav.cv': 'CV',
    'nav.contact': 'Contacto',
    'meta.recent_activity': '◼ ARQUIVO · ACTIVIDADE RECENTE',
    'meta.research_areas': 'ÁREAS DE INVESTIGAÇÃO',
    'meta.verified': 'VERIFICADO',
    'meta.download_cv': 'Descarregar CV',
    'meta.filter_all': 'TODOS',
    'meta.filter_books': 'LIVROS',
    'meta.filter_articles': 'ARTIGOS',
    'meta.filter_chapters': 'CAPÍTULOS',
    'meta.filter_projects': 'PROJECTOS',
    'meta.abstract': 'Resumo',
    'meta.collapse': 'Recolher',
    'meta.expand': 'Expandir',
    'meta.entries': 'ENTRADAS',
    'meta.ongoing': 'EM CURSO',
    'meta.completed': 'CONCLUÍDO',
    'meta.skip_link': 'Saltar para conteúdo',
    'meta.open_nav': 'Abrir navegação',
    'meta.close_nav': 'Fechar navegação',
    'meta.pub_cover': 'Capa de publicação',
    'hero.eyebrow': 'CIUHCT · NOVA FCT · FCT',
    'hero.subtitle.1': 'HISTORIADOR',
    'hero.subtitle.2': 'URBANISMO',
    'hero.subtitle.3': 'LISBOA SÉC. XX',
    'hero.manifesto': 'Cada planta conta uma história de poder. Cada quarteirão, uma política de exclusão.',
    'footer.toggle_cursor': 'Desactivar cursor personalizado',
    'footer.built_with': 'Construído com Jekyll · Hospedado no GitHub Pages',
    'footer.rights': 'Todos os direitos reservados',
    'monogram.role': 'Doutorando · NOVA FCT'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.books': 'Books',
    'nav.articles': 'Articles',
    'nav.chapters': 'Chapters',
    'nav.projects': 'Projects',
    'nav.teaching': 'Teaching',
    'nav.cv': 'CV',
    'nav.contact': 'Contact',
    'meta.recent_activity': '◼ ARCHIVE · RECENT ACTIVITY',
    'meta.research_areas': 'RESEARCH AREAS',
    'meta.verified': 'VERIFIED',
    'meta.download_cv': 'Download CV',
    'meta.filter_all': 'ALL',
    'meta.filter_books': 'BOOKS',
    'meta.filter_articles': 'ARTICLES',
    'meta.filter_chapters': 'CHAPTERS',
    'meta.filter_projects': 'PROJECTS',
    'meta.abstract': 'Abstract',
    'meta.collapse': 'Collapse',
    'meta.expand': 'Expand',
    'meta.entries': 'ENTRIES',
    'meta.ongoing': 'ONGOING',
    'meta.completed': 'COMPLETED',
    'meta.skip_link': 'Skip to content',
    'meta.open_nav': 'Open navigation',
    'meta.close_nav': 'Close navigation',
    'meta.pub_cover': 'Publication cover',
    'hero.eyebrow': 'CIUHCT · NOVA FCT · FCT',
    'hero.subtitle.1': 'HISTORIAN',
    'hero.subtitle.2': 'URBAN PLANNING',
    'hero.subtitle.3': 'LISBON 20TH C.',
    'hero.manifesto': 'Every blueprint tells a story of power. Every city block, a policy of exclusion.',
    'footer.toggle_cursor': 'Disable custom cursor',
    'footer.built_with': 'Built with Jekyll · Hosted on GitHub Pages',
    'footer.rights': 'All rights reserved',
    'monogram.role': 'PhD Candidate · NOVA FCT'
  }
};

function getTranslation(lang, key) {
  return TRANSLATIONS[lang] ? TRANSLATIONS[lang][key] : null;
}
