// Activar animaciones y menú
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
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  const form = document.querySelector('.contacto form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Consulta enviada');
      form.reset();
    });
  }
});
