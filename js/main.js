// Activar animaciones scroll y menú
document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) {
    AOS.init({ duration: 1000 });
  }

  const toggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav ul');
  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
});
