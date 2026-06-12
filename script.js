const header = document.querySelector('.site-header');
const navLinks = document.querySelectorAll('.nav-links a');
const setHeaderShadow = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
setHeaderShadow();
window.addEventListener('scroll', setHeaderShadow, { passive: true });
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.removeAttribute('aria-current'));
    link.setAttribute('aria-current', 'page');
  });
});
