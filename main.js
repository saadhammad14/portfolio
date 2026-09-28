// Mobile nav
document.querySelector('.menu')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => document.querySelector('.nav-links')?.classList.remove('open'))
);

// Reveal on scroll (with fallback)
const io = new IntersectionObserver((es) => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
const revs = document.querySelectorAll('.reveal');
revs.forEach(el => io.observe(el));
setTimeout(() => revs.forEach(el => el.classList.add('vis')), 2500);
