/**
 * assets/js/main.js
 * Diego Cavalcanti · Arquivo Vivo
 * Orquestração principal — carrega módulos e inicializa
 */

'use strict';

// ─── CONSTANTES ──────────────────────────────────────────────────────────────
const ANIMATION_STAGGER_MS = 80;
const PAGE_EXIT_DELAY_MS = 150;
const SCROLL_AFFORDANCE_THRESHOLD = 8;
const CONTRIBUTION_WEEKS = 52;
const CONTRIBUTION_DAYS = 7;
const STROKE_STAGGER_MS = 30;

// ─── INICIALIZAÇÃO ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Animação do edifício SVG no hero
  initBuildingAnimation();

  // Régua horizontal com numeração
  initRuler();

  // Contribution graph
  initContributionGraph();

  // Filtros de publicações
  initPubFilters();

  // Abstract colapsável
  initAbstractToggle();

  // Transição de saída de página
  initPageTransition();

  // Scroll progress na sidebar
  initScrollProgress();

  // Scroll affordance nos filtros mobile
  initFilterScrollAffordance();

});

// ─── EDIFÍCIO SVG — STROKE DASHARRAY ANIMATION ───────────────────────────────
function initBuildingAnimation() {
  const svg = document.querySelector('.building-svg');
  if (!svg) return;

  // Respeitar reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    svg.querySelectorAll('path, line, rect, polyline, polygon, circle').forEach(el => {
      el.style.strokeDasharray = 'none';
      el.style.strokeDashoffset = '0';
    });
    return;
  }

  const elements = svg.querySelectorAll('path, line, rect, polyline, polygon, circle');

  // Loading state — indicar que animação está a preparar
  svg.setAttribute('aria-busy', 'true');
  svg.classList.add('is-loading');

  // Ordenar de baixo para cima (por posição Y aproximada)
  const sorted = Array.from(elements).sort((a, b) => {
    const aBox = a.getBoundingClientRect();
    const bBox = b.getBoundingClientRect();
    return bBox.top - aBox.top; // baixo → cima
  });

  sorted.forEach((el, i) => {
    const length = el.getTotalLength ? el.getTotalLength() : 200;
    el.style.strokeDasharray = length;
    el.style.strokeDashoffset = length;
    el.style.transition = `stroke-dashoffset 1.8s ease-out ${i * STROKE_STAGGER_MS}ms`;
  });

  // Trigger após breve delay
  requestAnimationFrame(() => {
    setTimeout(() => {
      sorted.forEach(el => {
        el.style.strokeDashoffset = '0';
      });
      svg.classList.remove('is-loading');
      svg.setAttribute('aria-busy', 'false');
      svg.classList.add('is-drawn');
    }, 300);
  });
}

// ─── RÉGUA HORIZONTAL ────────────────────────────────────────────────────────
function initRuler() {
  const rulers = document.querySelectorAll('.page-ruler');
  rulers.forEach(ruler => {
    const width = ruler.offsetWidth;
    const fragment = document.createDocumentFragment();

    for (let i = 100; i < width; i += 100) {
      const num = document.createElement('span');
      num.textContent = i;
      num.style.cssText = `
        position: absolute;
        left: ${i}px;
        bottom: 2px;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 9px;
        color: #5A5A5A;
        transform: translateX(-50%);
        letter-spacing: 0.05em;
        user-select: none;
        pointer-events: none;
      `;
      fragment.appendChild(num);
    }

    ruler.style.position = 'relative';
    ruler.appendChild(fragment);
  });
}

// ─── CONTRIBUTION GRAPH ──────────────────────────────────────────────────────
function initContributionGraph() {
  const container = document.getElementById('contribution-graph');
  if (!container) return;

  // Dados reais das publicações — extraídos de meta tags ou gerados
  // Aqui: placeholder com actividade sintética baseada no CV
  const activityData = generateActivityData();

  const startDate = new Date('2020-01-01');
  const endDate = new Date();
  const weeks = [];

  let current = new Date(startDate);
  // Começar na segunda-feira
  current.setDate(current.getDate() - current.getDay() + 1);

  while (current <= endDate) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const dateStr = current.toISOString().split('T')[0];
      week.push({
        date: dateStr,
        level: activityData[dateStr] || 0
      });
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
  }

  const grid = document.createElement('div');
  grid.style.display = 'flex';
  grid.style.gap = '3px';

  weeks.forEach(week => {
    const weekEl = document.createElement('div');
    weekEl.style.cssText = 'display:flex;flex-direction:column;gap:3px;';

    week.forEach(day => {
      const dayEl = document.createElement('div');
      dayEl.className = 'graph-day';
      dayEl.dataset.level = day.level;
      dayEl.dataset.date = day.date;
      dayEl.setAttribute('title', `${day.date}${day.level > 0 ? ' · actividade: ' + day.level : ''}`);
      dayEl.setAttribute('tabindex', day.level > 0 ? '0' : '-1');
      weekEl.appendChild(dayEl);
    });

    grid.appendChild(weekEl);
  });

  container.appendChild(grid);
}

function generateActivityData() {
  // Usar dados reais das publicações injectados via data-attribute no template
  const container = document.getElementById('contribution-graph');
  const data = {};

  try {
    const pubs = JSON.parse(container.dataset.publications || '[]');
    const typeIntensity = { book: 4, chapter: 3, article: 3, project: 2 };

    pubs.forEach(pub => {
      const year = pub.year;
      const intensity = typeIntensity[pub.type] || 1;

      // Distribuir actividade ao longo do ano da publicação
      // Meses de pico: submissão (~3 meses antes), publicação
      const months = [0, 3, 6, 9]; // Q1-Q4 spread
      months.forEach(m => {
        const d = new Date(year, m, 15);
        const dateStr = d.toISOString().split('T')[0];
        data[dateStr] = Math.max(data[dateStr] || 0, intensity);
      });

      // Meses adjacentes com menor intensidade
      for (let m = 0; m < 12; m += 2) {
        const d = new Date(year, m, 1);
        const dateStr = d.toISOString().split('T')[0];
        data[dateStr] = Math.max(data[dateStr] || 0, Math.max(1, intensity - 1));
      }
    });
  } catch (e) {
    // Fallback silencioso — graph vazio
  }

  return data;
}

// ─── FILTROS DE PUBLICAÇÕES ──────────────────────────────────────────────────
function initPubFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubEntries = document.querySelectorAll('[data-type]');

  if (!filterBtns.length) return;

  function applyFilter(btn) {
    const filter = btn.dataset.filter;

    // Estado activo
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    // Filtrar entradas
    pubEntries.forEach(entry => {
      if (filter === 'all' || entry.dataset.type === filter) {
        entry.style.display = '';
        entry.removeAttribute('aria-hidden');
      } else {
        entry.style.display = 'none';
        entry.setAttribute('aria-hidden', 'true');
      }
    });
  }

  filterBtns.forEach((btn, index) => {
    // Garantir que buttons são focáveis e têm role
    if (!btn.hasAttribute('role')) btn.setAttribute('role', 'button');
    if (!btn.hasAttribute('tabindex')) btn.setAttribute('tabindex', '0');
    if (!btn.hasAttribute('aria-pressed')) btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');

    btn.addEventListener('click', () => applyFilter(btn));

    // Suporte de teclado: Enter e Space activam o filtro
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        applyFilter(btn);
      }
      // Setas esquerda/direita para navegar entre filtros
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const next = filterBtns[(index + 1) % filterBtns.length];
        next.focus();
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = filterBtns[(index - 1 + filterBtns.length) % filterBtns.length];
        prev.focus();
      }
    });
  });
}

// ─── ABSTRACT COLAPSÁVEL ─────────────────────────────────────────────────────
function initAbstractToggle() {
  const toggles = document.querySelectorAll('.abstract-toggle');

  toggles.forEach(toggle => {
    const targetId = toggle.dataset.target;
    const abstract = document.getElementById(targetId);

    if (!abstract) return;

    function toggleAbstract() {
      const isOpen = abstract.classList.contains('is-open');

      abstract.classList.toggle('is-open', !isOpen);
      toggle.classList.toggle('is-open', !isOpen);

      toggle.setAttribute('aria-expanded', !isOpen);
      abstract.setAttribute('aria-hidden', isOpen);
    }

    toggle.addEventListener('click', toggleAbstract);

    // Suporte de teclado
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleAbstract();
      }
    });
  });
}

// ─── TRANSIÇÃO DE SAÍDA DE PÁGINA ────────────────────────────────────────────
function initPageTransition() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('a[href]').forEach(link => {
    // Apenas links internos
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') ||
        href.startsWith('http') || link.hasAttribute('target')) return;

    link.addEventListener('click', (e) => {
      const destination = link.href;

      e.preventDefault();
      document.body.classList.add('page-exiting');

      // Navegar imediatamente se reduced-motion, senão aguardar animação
      const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : PAGE_EXIT_DELAY_MS;
      setTimeout(() => {
        window.location.href = destination;
      }, delay);
    });
  });
}

// ─── SCROLL PROGRESS ─────────────────────────────────────────────────────────
function initScrollProgress() {
  const fill = document.getElementById('scroll-fill');
  if (!fill) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    fill.style.width = `${Math.min(100, progress)}%`;
  }, { passive: true });
}

// ─── SCROLL AFFORDANCE NOS FILTROS (mobile) ─────────────────────────────────
function initFilterScrollAffordance() {
  const filters = document.querySelector('.pub-filters');
  if (!filters) return;

  function updateScrollState() {
    const { scrollLeft, scrollWidth, clientWidth } = filters;
    const scrollEnd = scrollWidth - clientWidth;
    const threshold = SCROLL_AFFORDANCE_THRESHOLD;

    filters.classList.remove('scrolled-end', 'scrolled-middle');

    if (scrollLeft > threshold && scrollLeft < scrollEnd - threshold) {
      filters.classList.add('scrolled-middle');
    } else if (scrollLeft >= scrollEnd - threshold) {
      filters.classList.add('scrolled-end');
    }
  }

  filters.addEventListener('scroll', updateScrollState, { passive: true });
  // Verificar estado inicial após layout
  requestAnimationFrame(updateScrollState);
}
