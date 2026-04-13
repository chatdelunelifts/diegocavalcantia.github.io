/**
 * assets/js/sidebar.js
 * Indicador de secção activa que desliza no trilho
 * Hamburger mobile + overlay
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initNavIndicator();
  initMobileNav();
  initCVScrollSpy();
});

// ─── INDICADOR DESLIZANTE DA NAV ─────────────────────────────────────────────
function initNavIndicator() {
  const indicator = document.getElementById('nav-indicator');
  const navItems = document.querySelectorAll('.nav-item');
  const activeItem = document.querySelector('.nav-item.active');

  if (!indicator || !navItems.length) return;

  // Posicionar no item activo
  function positionIndicator(item) {
    if (!item) return;
    const itemRect = item.getBoundingClientRect();
    const sidebarRect = indicator.closest('.sidebar').getBoundingClientRect();
    const top = itemRect.top - sidebarRect.top;
    const height = itemRect.height;

    indicator.style.transform = `translateY(${top}px)`;
    indicator.style.height = `${height}px`;
  }

  // Estado inicial
  if (activeItem) {
    // Sem animação na posição inicial
    indicator.style.transition = 'none';
    positionIndicator(activeItem);

    setTimeout(() => {
      indicator.style.transition = 'transform var(--trans-slow), height var(--trans-slow)';
    }, 100);
  }

  // Hover — pré-visualizar posição
  navItems.forEach(item => {
    const link = item.querySelector('a');

    link.addEventListener('mouseenter', () => {
      positionIndicator(item);
    });

    link.addEventListener('mouseleave', () => {
      // Voltar ao activo
      positionIndicator(activeItem || navItems[0]);
    });
  });
}

// ─── HAMBURGER + OVERLAY MOBILE ──────────────────────────────────────────────
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('nav-overlay');

  if (!hamburger || !sidebar) return;

  function openNav() {
    hamburger.classList.add('is-active');
    sidebar.classList.add('is-open');
    overlay.classList.add('is-active');
    overlay.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    // Foco no primeiro link da nav
    const firstLink = sidebar.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeNav() {
    hamburger.classList.remove('is-active');
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-active');
    overlay.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('is-open');
    isOpen ? closeNav() : openNav();
  });

  overlay.addEventListener('click', closeNav);

  // Fechar com Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
      closeNav();
      hamburger.focus();
    }
  });

  // Fechar ao clicar num link (mobile)
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        closeNav();
      }
    });
  });
}

// ─── CV SCROLL-SPY ───────────────────────────────────────────────────────────
// Activa o item do índice CV conforme a secção visível
function initCVScrollSpy() {
  const cvSections = document.querySelectorAll('.cv-section[id]');
  const cvNavItems = document.querySelectorAll('.cv-nav-item');
  const railMarker = document.querySelector('.rail-marker');

  if (!cvSections.length || !cvNavItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        cvNavItems.forEach((item, index) => {
          const link = item.querySelector('a');
          const isActive = link && link.getAttribute('href') === `#${id}`;
          item.classList.toggle('active', isActive);

          // Mover marcador no trilho
          if (isActive && railMarker) {
            const itemRect = item.getBoundingClientRect();
            const railRect = railMarker.closest('.cv-rail').getBoundingClientRect();
            const top = itemRect.top - railRect.top + (itemRect.height / 2) - 4;
            railMarker.style.transform = `translateX(-50%) translateY(${top}px)`;
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  cvSections.forEach(section => observer.observe(section));

  // Clique suave nas secções do CV
  cvNavItems.forEach(item => {
    const link = item.querySelector('a');
    if (!link) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.focus({ preventScroll: true });
      }
    });
  });
}
