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

  const heroSlides = document.querySelectorAll('.hero-slider .slide');
  const prevBtn = document.querySelector('.hero-slider .prev');
  const nextBtn = document.querySelector('.hero-slider .next');
  let heroCurrent = 0;
  function showHeroSlide(index){
    heroSlides[heroCurrent].classList.remove('active');
    heroCurrent = (index + heroSlides.length) % heroSlides.length;
    heroSlides[heroCurrent].classList.add('active');
  }
  if(heroSlides.length){
    setInterval(()=>showHeroSlide(heroCurrent+1),5000);
    if(prevBtn) prevBtn.addEventListener('click',()=>showHeroSlide(heroCurrent-1));
    if(nextBtn) nextBtn.addEventListener('click',()=>showHeroSlide(heroCurrent+1));
  }
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
    ScrollReveal().reveal('.card, .servicio, .gallery-item', { interval: 100 });
  }

  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const slides = carousel.querySelectorAll('img');
    let current = 0;
    slides[current].classList.add('active');
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 3000);
  }
});
