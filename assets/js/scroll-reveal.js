/**
 * assets/js/scroll-reveal.js
 * IntersectionObserver para revelar blocos ao scroll
 * Stagger entre blocos adjacentes
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Mostrar tudo imediatamente
    document.querySelectorAll('.reveal, .img-reveal').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0,
    rootMargin: '0px 0px -15% 0px' // 85% do viewport
  });

  // Blocos principais
  document.querySelectorAll('.reveal').forEach((el, index) => {
    // Stagger por posição — grupos de elementos adjacentes
    const delay = parseInt(el.style.transitionDelay) || 0;
    if (!el.style.transitionDelay) {
      // Calcular stagger automático por grupos
      const siblings = el.parentElement
        ? Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'))
        : [];
      const siblingIndex = siblings.indexOf(el);
      if (siblingIndex > 0) {
        el.style.transitionDelay = `${siblingIndex * 80}ms`;
      }
    }
    observer.observe(el);
  });

  // Imagens com clip-path
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        imgObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px' });

  document.querySelectorAll('.img-reveal').forEach(el => imgObserver.observe(el));

  // Numerais outline — desenho de stroke
  const strokeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'draw-stroke 900ms ease-out forwards';
        strokeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.section-num, .section-num-display').forEach(el => {
    // Só aplicar se for outline
    if (getComputedStyle(el).webkitTextStroke !== 'none') {
      el.style.opacity = '0';
      strokeObserver.observe(el);
    }
  });
});
