const navList = document.querySelector('.menu-navegation');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('menu-navegation-active');
} );