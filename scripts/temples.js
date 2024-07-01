document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  const lastModifiedSpan = document.getElementById('lastModified');
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  yearSpan.textContent = new Date().getFullYear();
  lastModifiedSpan.textContent = document.lastModified;

  hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
      hamburger.textContent = menu.classList.contains('open') ? '✖' : '☰';
  });
});
