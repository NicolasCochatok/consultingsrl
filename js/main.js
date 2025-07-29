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
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        alert('Por favor completa el formulario correctamente.');
        return;
      }
      alert('Consulta enviada');
    });
  }

  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  const lightboxClose = document.getElementById('lightbox-close');

  galleryItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      if (!lightboxImg) return;
      lightboxImg.src = item.getAttribute('href');
      lightbox.classList.add('show');
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('show');
    });
  }
  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) {
        lightbox.classList.remove('show');
      }
    });
  }

  if (window.ScrollReveal) {
    ScrollReveal().reveal('section', { distance: '50px', duration: 800, easing: 'ease-out', origin: 'bottom' });
    ScrollReveal().reveal('.card, .servicio, .gallery-item', { interval: 100 });
  }
});
