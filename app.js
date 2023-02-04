const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar-menu');

// Display mobile menu
const mobileMenu = (e) => {
  menu.classList.toggle('is-active');
  menulinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
