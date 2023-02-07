const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar-menu');

// Display mobile menu
const mobileMenu = (e) => {
  menu.classList.toggle('is-active');
  menulinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const loginBtn = document.querySelector('.login-btn');

const openModal = function () {
  modal.classList.remove('hidden');
  menulinks.classList.toggle('active');
  overlay.classList.remove('hidden');
};

const clodeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeBtn.addEventListener('click', clodeModal);
overlay.addEventListener('click', clodeModal);
loginBtn.addEventListener('click', openModal);
