const cardOne = document.querySelectorAll('.card_one');
const cardTwo = document.querySelectorAll('.card_two');
const cardTree = document.querySelectorAll('.card_tree');
const cardFour = document.querySelectorAll('.card_four');

const cardVideo = document.querySelectorAll('.video__exercicio');
const videoOne = document.querySelectorAll('.exercicio_one');
const videoTwo = document.querySelectorAll('.exercicio_two');
const videoTree = document.querySelectorAll('.exercicio_tree');
const videoFour = document.querySelectorAll('.exercicio_four');
const videoPlayerOne = document.querySelector('.video__player.exercicio_one');
const videoPlayerTwo = document.querySelector('.video__player.exercicio_two');
const videoPlayerTree = document.querySelector('.video__player.exercicio_tree');
const videoPlayerFour = document.querySelector('.video__player.exercicio_four');
const checkBtn = document.querySelectorAll('.check_exercicio');
const modal = document.querySelectorAll('.modal');
const modalClose = document.querySelectorAll('.modal__close');
const modalOverlay = document.querySelectorAll('.overlay__modal');

checkBtn.forEach((check => {
    check.addEventListener('click', () => {
        // check.classList.add('disable__button');
        modal.forEach((modal => {
            modal.classList.toggle('show__modal');
        }))
        modalOverlay.forEach((overlay => {
            overlay.classList.add('show');
        }))
        runConfettiAnimation();
        // checkVideoExercicio();
    })
}))

modalClose.forEach((modalClose => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modal => {
            modal.classList.remove('show__modal');
        }))
        modalOverlay.forEach((overlay => {
            overlay.classList.remove('show');
        }))
    })
}))
for (let e = 0; e<cardOne.length; e++){
    cardOne[e].addEventListener('click', () => {
        for (let i = 0; i<checkBtn.length; i++){
            checkBtn[i].addEventListener('click', () => {
                cardOne[e].style.display = 'none'
            })
        }
    })
}

for (let e = 0; e<cardTwo.length; e++){
    cardTwo[e].addEventListener('click', () => {
        for (let i = 0; i<checkBtn.length; i++){
            checkBtn[i].addEventListener('click', () => {
                cardTwo[e].style.display = 'none';
            })
        }
    })
}

for (let e = 0; e<cardTree.length; e++){
    cardTree[e].addEventListener('click', () => {
        for (let i = 0; i<checkBtn.length; i++){
            checkBtn[i].addEventListener('click', () => {
                cardTree[e].style.display = 'none';
            })
        }
    })
}
for (let e = 0; e<cardFour.length; e++){
    cardFour[e].addEventListener('click', () => {
        for (let i = 0; i<checkBtn.length; i++){
            checkBtn[i].addEventListener('click', () => {
                cardFour[e].style.display = 'none';
            })
        }
    })
}

function checkVideoExercicio() {
    cardOne.forEach((cardVideo => {
            cardVideo.classList.remove('active');
            videoPlayerOne.pause();
            cardVideo.style.display = 'none'
        }));
}

function checkVideoExercicioTwo() {
    cardTwo.forEach((cardVideoTwo => {
            cardVideoTwo.classList.remove('active');
            videoPlayerTwo.pause();
            cardVideoTwo.style.display = 'none'
        }));
}


  const runConfetti = document.querySelector('#hs-run-on-click-run-confetti');
  var colors = [];
  function runConfettiAnimation(){
    confetti({
      particleCount: 200,
      spread: 70,
      origin: {
        y: 1.0
      }
    });
  }

cardOne.forEach((cardVideo => {
    cardVideo.addEventListener('click', () => {
        for (let e = 0; e<checkBtn.length; e++){
            checkBtn[e].style.display = 'flex';
             checkBtn[e].addEventListener('click', () => {
                for (let i = 0; i<cardOne.length; i++) {
                    cardOne[i].classList.remove('active');
                    checkBtn[e].style.display = 'none';
                }
             })
            videoPlayerOne.addEventListener('ended', () => {
                checkBtn[e].classList.add('hide__button');
                videoPlayerOne.classList.remove('show__video');
            })
        }
        videoPlayerOne.addEventListener('ended', () => {
            // checkBtn.forEach((check => {
            //     check.classList.add('hide__button')
            // }))
        })
        videoPlayerOne.play();

        videoPlayerTwo.pause();
        videoPlayerTwo.currentTime = 0;


        videoPlayerTree.pause();
        videoPlayerTree.currentTime = 0;

        videoPlayerFour.pause();
        videoPlayerFour.currentTime = 0;
        })
    })
)
cardTwo.forEach((cardVideo => {
    cardVideo.addEventListener('click', () => {
        for (let e = 0; e<checkBtn.length; e++){
            checkBtn[e].style.display = 'flex';
             checkBtn[e].addEventListener('click', () => {
                for (let i = 0; i<cardTwo.length; i++) {
                    cardTwo[i].classList.remove('active');
                    checkBtn[e].style.display = 'none';
                }
             })
            videoPlayerTwo.addEventListener('ended', () => {
                checkBtn[e].classList.add('hide__button');
                videoPlayerTwo.classList.remove('show__video');
            })
        }
        videoPlayerTwo.addEventListener('ended', () => {
            // checkBtn.forEach((check => {
            //     check.classList.add('hide__button')
            // }))
        })
        videoPlayerOne.pause();
        videoPlayerOne.currentTime = 0;

        videoPlayerTree.pause();
        videoPlayerTree.currentTime = 0;
        
        videoPlayerFour.pause();
        videoPlayerFour.currentTime = 0;

        videoPlayerTwo.play();
    })
}))
cardTree.forEach((cardVideo => {
    cardVideo.addEventListener('click', () => {
        for (let e = 0; e<checkBtn.length; e++){
            checkBtn[e].style.display = 'flex';
             checkBtn[e].addEventListener('click', () => {
                for (let i = 0; i<cardTree.length; i++) {
                    cardTree[i].classList.remove('active');
                    checkBtn[e].style.display = 'none';
                }
             })
            videoPlayerTree.addEventListener('ended', () => {
                checkBtn[e].classList.add('hide__button');
                videoPlayerTree.classList.remove('show__video');
            })
        }
        videoPlayerTwo.pause();
        videoPlayerTwo.currentTime = 0;

        videoPlayerTree.pause();
        videoPlayerTree.currentTime = 0;

        videoPlayerFour.pause();
        videoPlayerFour.currentTime = 0;

        videoPlayerOne.pause();
        videoPlayerOne.currentTime = 0;

        videoPlayerTree.play();
    })
}))
cardFour.forEach((cardVideo => {
    cardVideo.addEventListener('click', () => {
        for (let e = 0; e<checkBtn.length; e++){
            checkBtn[e].style.display = 'flex';
             checkBtn[e].addEventListener('click', () => {
                for (let i = 0; i<cardFour.length; i++) {
                    cardFour[i].classList.remove('active');
                    checkBtn[e].style.display = 'none';
                }
             })
            videoPlayerFour.addEventListener('ended', () => {
                checkBtn[e].classList.add('hide__button');
                videoPlayerFour.classList.remove('show__video');
            })
        }
        videoPlayerTree.pause();
        videoPlayerTree.currentTime = 0;

        videoPlayerTwo.pause();
        videoPlayerTwo.currentTime = 0;
        videoPlayerOne.pause();
        videoPlayerOne.currentTime = 0;

        videoPlayerFour.play();
    })
}))


cardOne.forEach((item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        cardTwo.forEach((cardTwo => {
            cardTwo.classList.remove('active');
        }))
        cardFour.forEach((cardFour => {
            cardFour.classList.remove('active');
        }))
        cardTree.forEach((cardTree => {
            cardTree.classList.remove('active');
        }))
        cardVideo.forEach((card => {
            card.classList.add('active');
        }))
        videoOne.forEach((video => {
            video.classList.add('show__video');
        }))
        videoTwo.forEach((videoTwo => {
            videoTwo.classList.remove('show__video');
        }))
        videoTree.forEach((video => {
            video.classList.remove('show__video');
        }))
        videoFour.forEach((videoFour => {
            videoFour.classList.remove('show__video');
        }))
    })
}))
cardTwo.forEach((item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        cardOne.forEach((cardOne => {
            cardOne.classList.remove('active');
        }))
        cardFour.forEach((cardFour => {
            cardFour.classList.remove('active');
        }))
        cardTree.forEach((cardTree => {
            cardTree.classList.remove('active');
        }))
        cardVideo.forEach((card => {
            card.classList.add('active');
        }))
        videoTwo.forEach((videoTwo => {
            videoTwo.classList.add('show__video');
        }))
        videoOne.forEach((video => {
            video.classList.remove('show__video');
        }))
        videoTree.forEach((videoTree => {
            videoTree.classList.remove('show__video');
        }))
        videoFour.forEach((videoFour => {
            videoFour.classList.remove('show__video');
        }))
    })
}))
cardTree.forEach((item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        cardOne.forEach((cardOne => {
            cardOne.classList.remove('active');
        }))
        cardTwo.forEach((cardTwo => {
            cardTwo.classList.remove('active');
        }))
        cardFour.forEach((cardFour => {
            cardFour.classList.remove('active');
        }))
        cardVideo.forEach((card => {
            card.classList.add('active');
        }))
        videoTree.forEach((video => {
            video.classList.add('show__video');
        }))
        videoOne.forEach((video => {
            video.classList.remove('show__video');
        }))
        videoTwo.forEach((videoTwo => {
            videoTwo.classList.remove('show__video');
        }))
        videoFour.forEach((videoFour => {
            videoFour.classList.remove('show__video');
        }))
    })
}))
cardFour.forEach((item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        cardTree.forEach((cardTree => {
            cardTree.classList.remove('active');
        }))
        cardOne.forEach((cardOne => {
            cardOne.classList.remove('active');
        }))
        cardTwo.forEach((cardOne => {
            cardOne.classList.remove('active');
        }))
        cardVideo.forEach((card => {
            card.classList.add('active');
        }))
        videoOne.forEach((videoOne => {
            videoOne.classList.remove('show__video');
        }))
        videoFour.forEach((videoFour => {
            videoFour.classList.add('show__video');
        }))
        videoTree.forEach((videoTree => {
            videoTree.classList.remove('show__video');
        }))
        videoTwo.forEach((videoTwo => {
            videoTwo.classList.remove('show__video');
        }))
    })
}))

window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
// cardOne.addEventListener('click', () => {
//     cardOne.classList.toggle('active');
// })
// cardTwo.addEventListener('click', () => {
//     cardTwo.classList.toggle('active');
// })
// cardTree.addEventListener('click', () => {
//     cardTree.classList.toggle('active');
// })
// cardFour.addEventListener('click', () => {
//     cardFour.classList.toggle('active');
// })