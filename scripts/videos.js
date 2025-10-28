const loading = document.querySelector('.loading');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const infoVideoCardIcone = document.querySelector('.info__video');
const btnPlayVideoSection = document.querySelector('.btn__play__video');
const modalVideoAlongamento = document.querySelector('.modal__video__alongamento');
const modalVideoAlongamentoPescoco = document.querySelector('.modal__video__alongamento_pescoco');
const closeModalVideo = document.querySelectorAll('.close-modal-video');
const overlay = document.querySelectorAll('.overlay');

function VideoAlongamento(){
    modalVideoAlongamento.classList.add('show');
    overlay.forEach((overlay => {
        overlay.classList.add('show');
    }))
}
function VideoAlongamentoPescoco(){
    modalVideoAlongamentoPescoco.classList.add('show');
    overlay.forEach((overlay => {
        overlay.classList.add('show');
    }))
}

closeModalVideo.forEach((closeModal => {
    closeModal.addEventListener('click', () => {
        modalVideoAlongamento.classList.remove('show');
        modalVideoAlongamentoPescoco.classList.remove('show');
        overlay.forEach((overlay => {
        overlay.classList.remove('show');
        }))
    })
}))

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


// infoVideoCardIcone.addEventListener('click', () => {
//     modalVideo.forEach((item) => {
//         item.classList.toggle('open');
//     });
//     overlayModal.forEach((item) => {
//         item.classList.toggle('show');
//     });
// });

btnPlayVideoSection.addEventListener('click', () => {
});

window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

var swiper = new Swiper('.slide-videos', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteration: true
    },
    pagination: {
        el: ".swiper-pagination"
    }
})

ScrollReveal({
    distance: '20px',
    duration: 2000
});

window.addEventListener('load', () => {
    ScrollReveal().reveal('.title__videos', {delay: 100, origin: 'left'});
    ScrollReveal().reveal('.container', {scale: .85});
});