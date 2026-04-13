/**
 * assets/js/main.js
 * Diego Cavalcanti · Arquivo Vivo
 * Orquestração principal — carrega módulos e inicializa
 */

'use strict';

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
  let delay = 0;

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
    el.style.transition = `stroke-dashoffset 1.8s ease-out ${i * 30}ms`;
  });

  // Trigger após breve delay
  requestAnimationFrame(() => {
    setTimeout(() => {
      sorted.forEach(el => {
        el.style.strokeDashoffset = '0';
      });
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
  // Actividade académica real aproximada
  const data = {};
  const activities = [
    // Hi-BicLab — 2022-2024
    { start: '2022-03-01', end: '2024-06-30', intensity: 2 },
    // Cycling Cities publicação — 2024
    { start: '2024-01-01', end: '2024-12-31', intensity: 3 },
    // Tese de doutoramento
    { start: '2022-09-01', end: '2026-04-01', intensity: 1 },
    // Technology and Culture — editorial
    { start: '2023-06-01', end: '2026-04-01', intensity: 2 },
  ];

  activities.forEach(({ start, end, intensity }) => {
    const s = new Date(start);
    const e = new Date(end);
    for (let d = new Date(s); d <= e; d.setDate(d.getDate() + 7)) {
      // Actividade esparsa — não todos os dias
      if (Math.random() > 0.6) {
        const dateStr = d.toISOString().split('T')[0];
        data[dateStr] = Math.max(data[dateStr] || 0, intensity);
      }
    }
  });

  // Picos específicos (conferências, publicações)
  ['2024-09-15', '2024-10-02', '2023-11-20', '2023-04-10'].forEach(d => {
    data[d] = 4;
  });

  return data;
}

// ─── FILTROS DE PUBLICAÇÕES ──────────────────────────────────────────────────
function initPubFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubEntries = document.querySelectorAll('[data-type]');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Estado activo
      filterBtns.forEach(b => b.classList.remove('active'));
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

    toggle.addEventListener('click', () => {
      const isOpen = abstract.classList.contains('is-open');

      abstract.classList.toggle('is-open', !isOpen);
      toggle.classList.toggle('is-open', !isOpen);

      const label = toggle.dataset;
      toggle.setAttribute('aria-expanded', !isOpen);
      abstract.setAttribute('aria-hidden', isOpen);
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

      setTimeout(() => {
        window.location.href = destination;
      }, 150);
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
