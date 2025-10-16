const card = document.querySelector('.profile__points');
const arrowProfile = document.querySelector('.arrow__profile');
const arrowNavbarBottom = document.querySelector('.arrow__navbar__bottom');

arrowProfile.addEventListener('click', () => {
    card.classList.toggle('active');
    arrowProfile.classList.toggle('active');
});

arrowNavbarBottom.addEventListener('click', () => {
    card.classList.toggle('active');
    arrowNavbarBottom.classList.toggle('active');
});

var swiper = new Swiper(".mySwiper", {
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