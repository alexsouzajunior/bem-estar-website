const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const card = document.querySelector('.profile__points');
const arrowProfile = document.querySelector('.arrow__profile');
const arrowNavbarBottom = document.querySelector('.arrow__navbar__bottom');
const btnMorePoints = document.getElementById('btn__more__points');

let urlBtnMorePoints = location.href;
btnMorePoints.addEventListener('click', () => {
  location.href = "/pages/desafio-movimenta.html";
});

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open-menu');
});

closeMenu.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('open-menu');
});

arrowProfile.addEventListener('click', () => {
    card.classList.toggle('active');
    arrowProfile.classList.toggle('active');
});

arrowNavbarBottom.addEventListener('click', () => {
    card.classList.toggle('active');
    arrowNavbarBottom.classList.toggle('active');
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },

      breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
      }
    });
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },

      breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
      }
    });

    window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});