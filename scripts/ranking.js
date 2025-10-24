const loading = document.querySelector('.loading');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const userPosition = document.querySelector('.user__position');

window.addEventListener('load', () => {
    loading.classList.add('show');
})

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open-menu');
});

closeMenu.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('open-menu');
});

window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

window.addEventListener('load', () => {
    userPosition.classList.add('active');
})