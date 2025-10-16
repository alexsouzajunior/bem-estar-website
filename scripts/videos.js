const modalVideo = document.querySelectorAll('.modal__video');
const modalClose = document.querySelectorAll('.modal__close');
const overlayModal = document.querySelectorAll('.overlay__modal');
const infoVideoCardIcone = document.querySelector('.info__video');
const btnPlayVideoSection = document.querySelector('.btn__play__video');


infoVideoCardIcone.addEventListener('click', () => {
    modalVideo.forEach((item) => {
        item.classList.toggle('open');
    });
    overlayModal.forEach((item) => {
        item.classList.toggle('show');
    });
});

btnPlayVideoSection.addEventListener('click', () => {
    modalVideo.forEach((item) => {
        item.classList.toggle('open');
    });
    overlayModal.forEach((item) => {
        item.classList.toggle('show');
    });
});

modalClose.forEach((close) => {
    close.addEventListener('click', () => {
        modalVideo.forEach((item) => {
            item.classList.remove('open');
        });
        overlayModal.forEach((item) => {
            item.classList.remove('show');
        });
    });
});

window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});