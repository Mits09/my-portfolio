// script.js

// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll reveal animations (basic)
const sections = document.querySelectorAll('.section');
const revealOnScroll = () => {
  const scrollY = window.scrollY + window.innerHeight - 100;
  sections.forEach(section => {
    if (scrollY > section.offsetTop) {
      section.classList.add('reveal');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
