/* ============================================
   KIM'S COFFEE — SCRIPT.JS
   ============================================ */
 
/* ── 1. SCROLL REVEAL (Intersection Observer) ── */
const revealEls = document.querySelectorAll('.reveal');
 
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // anima só uma vez
    }
  });
}, { threshold: 0.12 });
 
revealEls.forEach(el => revealObserver.observe(el));
 
 
/* ── 2. HEADER — muda estilo ao rolar ── */
const header = document.getElementById('header');
 
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
 
 
/* ── 3. MENU HAMBURGUER (mobile) ── */
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');
 
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
});
 
// Fecha o menu ao clicar em um link
nav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
  });
});
 
 
/* ── 4. TABS DO CARDÁPIO ── */
const tabBtns   = document.querySelectorAll('.tab-btn');
const cardItems = document.querySelectorAll('.card-item');
 
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Atualiza botão ativo
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
 
    const tab = btn.dataset.tab;
 
    cardItems.forEach(item => {
      if (item.dataset.cat === tab) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
 
// Mostra apenas "cafes" no carregamento inicial
cardItems.forEach(item => {
  if (item.dataset.cat !== 'cafes') {
    item.style.display = 'none';
  } else {
    item.style.display = 'block';
  }
});