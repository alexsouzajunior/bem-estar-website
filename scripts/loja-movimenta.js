const loading = document.querySelector('.loading');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const card = document.querySelector('.profile__points');
const arrowProfile = document.querySelector('.arrow__profile');
const arrowNavbarBottom = document.querySelector('.arrow__navbar__bottom');
const btnMorePoints = document.getElementById('btn__more__points');
const modalBeneficioDayOff = document.querySelector('.modal__beneficio__day_off');
const modalBeneficioTreinamentoComCertificado = document.querySelector('.modal__beneficio__treinamento_com_certificado');
const closeModal = document.querySelectorAll('.close-modal');
const overlayModal = document.querySelectorAll('.overlay__modal');

// Modal - Resgate de benefícios

function beneficioDayOff() {
  modalBeneficioDayOff.classList.add('show');
  overlayModal.forEach((overlay => {
    overlay.classList.add('show');
  }))
}
function beneficioTreinamentoComCertificado() {
  modalBeneficioTreinamentoComCertificado.classList.add('show');
  overlayModal.forEach((overlay => {
    overlay.classList.add('show');
  }))
}

closeModal.forEach((close => {
  close.addEventListener('click', () => {
    overlayModal.forEach((overlay => {
      overlay.classList.remove('show');
    }))
    modalBeneficioDayOff.classList.remove('show');
    modalBeneficioTreinamentoComCertificado.classList.remove('show');
    modalBrindeMochila.classList.remove('show');
    modalBrindeCaneca.classList.remove('show');
    modalBrindeGarrafa.classList.remove('show');
    modalBrindePostIt.classList.remove('show');
    modalBrindeCaneta.classList.remove('show');
  })
}))

// Modal - Resgate de brindes
const modalBrindeMochila = document.querySelector('.modal__brinde__mochila');
const modalBrindeCaneca = document.querySelector('.modal__brinde__caneca');
const modalBrindeGarrafa = document.querySelector('.modal__brinde__garrafa');
const modalBrindePostIt = document.querySelector('.modal__brinde__post_it');
const modalBrindeCaneta = document.querySelector('.modal__brinde__caneta');

function brindeMochila(){
  modalBrindeMochila.classList.add('show');
  overlayModal.forEach((overlay => {
    overlay.classList.add('show');
  }))
}
function brindeCaneca(){
  modalBrindeCaneca.classList.add('show');
  overlayModal.forEach((overlay => {
    overlay.classList.add('show');
  }))
}
function brindeGarrafa(){
  modalBrindeGarrafa.classList.add('show');
  overlayModal.forEach((overlay => {
    overlay.classList.add('show');
  }))
}
function brindePostIt(){
  modalBrindePostIt.classList.add('show');
  overlayModal.forEach((overlay => {
    overlay.classList.add('show');
  }))
}
function brindeCaneta(){
  modalBrindeCaneta.classList.add('show');
  overlayModal.forEach((overlay => {
    overlay.classList.add('show');
  }))
}


window.addEventListener('load', () => {
    loading.classList.add('show');
})

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
        clickable: true
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