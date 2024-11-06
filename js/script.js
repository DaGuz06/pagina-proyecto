//menu desplegable
document.querySelector('.menu-icon').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
});
