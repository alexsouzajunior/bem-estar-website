const loading = document.querySelector('.loading');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');

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
    loading.classList.add('show');
})

ScrollReveal({
    distance: '20px',
    duration: 2000
});

window.addEventListener('load', () => {
    ScrollReveal().reveal('.hero__title', {delay: 200, origin: 'left'});
    ScrollReveal().reveal('.hero__paragraph', {delay: 400, origin: 'left'});
    
    ScrollReveal().reveal('.title__section', {delay: 100, origin: 'left'});
    ScrollReveal().reveal('.paragraph__section', {delay: 200, origin: 'left'});
    ScrollReveal().reveal('.image__section', {delay: 300, origin: 'right'});

    ScrollReveal().reveal('.game__section__content h2', {delay: 100, origin: 'bottom'});
    ScrollReveal().reveal('.game__section__content p', {delay: 200, origin: 'bottom'});
    ScrollReveal().reveal('.game__section__button', {delay: 300, origin: 'bottom'});

    ScrollReveal().reveal('.section__dicas .title', {delay: 100, origin: 'bottom'});
    ScrollReveal().reveal('.section__dicas .paragraph', {delay: 200, origin: 'bottom'});
    ScrollReveal().reveal('.container .card__item', {scale: .85});
    ScrollReveal().reveal('.about__project', {delay: 100, origin: 'bottom'});
});