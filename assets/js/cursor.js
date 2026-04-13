/**
 * assets/js/cursor.js
 * Cursor personalizado — retículo de engenheiro
 * Toggle via botão no footer
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Não activar em touch/mobile
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.body.classList.remove('custom-cursor');
    return;
  }

  const cursorEl = document.getElementById('custom-cursor');
  const cursorImg = document.getElementById('custom-cursor-img');
  const toggleBtn = document.getElementById('cursor-toggle');

  if (!cursorEl) return;

  let cursorEnabled = localStorage.getItem('cursor-disabled') !== 'true';
  let mouseX = 0, mouseY = 0;
  let rafId = null;

  // Estado inicial
  if (!cursorEnabled) {
    document.body.classList.remove('custom-cursor');
    cursorEl.style.opacity = '0';
    if (cursorImg) cursorImg.style.opacity = '0';
  }

  // Seguir o rato com rAF para performance
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!cursorEnabled) return;

    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      cursorEl.style.left = `${mouseX}px`;
      cursorEl.style.top = `${mouseY}px`;
      if (cursorImg) {
        cursorImg.style.left = `${mouseX}px`;
        cursorImg.style.top = `${mouseY}px`;
      }
    });
  });

  // Detectar tipo de elemento sob o cursor
  document.addEventListener('mouseover', (e) => {
    if (!cursorEnabled) return;

    const target = e.target.closest('img, figure, .card-cover, .book-cover');

    if (target) {
      cursorEl.style.opacity = '0';
      if (cursorImg) cursorImg.style.opacity = '1';
    } else {
      cursorEl.style.opacity = '1';
      if (cursorImg) cursorImg.style.opacity = '0';
    }
  });

  // Sair da janela
  document.addEventListener('mouseleave', () => {
    cursorEl.style.opacity = '0';
    if (cursorImg) cursorImg.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    if (!cursorEnabled) return;
    cursorEl.style.opacity = '1';
  });

  // Toggle no footer
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      cursorEnabled = !cursorEnabled;
      localStorage.setItem('cursor-disabled', !cursorEnabled);

      document.body.classList.toggle('custom-cursor', cursorEnabled);
      cursorEl.style.opacity = cursorEnabled ? '1' : '0';
      if (cursorImg) cursorImg.style.opacity = '0';
    });
  }
});
