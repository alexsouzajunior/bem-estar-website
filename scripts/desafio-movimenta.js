const loading = document.querySelector('.loading');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
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
const mensageSuccess = document.querySelector('.mensage__success__container');

// const startMinutes = 10;
// const timeZero = 0;
// let time = startMinutes * 60;

// const timeCounter = document.getElementById('time');

// setInterval(updateCounter, 1000);

// function updateCounter() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 10 ? '0' + seconds : seconds;
    
//     timeCounter.innerHTML = `${minutes}:${seconds}`;
//     time--;
// }

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open-menu');
});

closeMenu.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('open-menu');
});

window.addEventListener('load', () => {
    loading.classList.add('show');
})

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

  let = mensageSuccess.style.opacity = 0;
  let = mensageSuccess.style.display = 'none'

cardOne.forEach((cardVideo => {
    cardVideo.addEventListener('click', () => {
        let = mensageSuccess.style.opacity = 0;
            videoPlayerOne.addEventListener('ended', () => {
                videoPlayerOne.classList.remove('show__video');
                mensageSuccess.style.opacity = 1;
                mensageSuccess.style.display = 'flex';
                runConfettiAnimation();
                cardVideo.style.opacity = 0;
                cardVideo.style.display = 'none';
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
        let = mensageSuccess.style.opacity = 0;
        videoPlayerTwo.addEventListener('ended', () => {
            videoPlayerTwo.classList.remove('show__video');
            mensageSuccess.style.opacity = 1;
            mensageSuccess.style.display = 'flex';
            runConfettiAnimation();
            cardVideo.style.opacity = 0;
            cardVideo.style.display = 'none';
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
        let = mensageSuccess.style.opacity = 0;
            videoPlayerTree.addEventListener('ended', () => {
                videoPlayerTree.classList.remove('show__video');
                mensageSuccess.style.opacity = 1;
                mensageSuccess.style.visibility = 'visible';
                runConfettiAnimation();
                cardVideo.style.opacity = 0;
                cardVideo.style.display = 'none';
            })
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
    })
)
cardFour.forEach((cardVideo => {
    cardVideo.addEventListener('click', () => {
        let = mensageSuccess.style.opacity = 0;
            videoPlayerFour.addEventListener('ended', () => {
                videoPlayerFour.classList.remove('show__video');
                mensageSuccess.style.opacity = 1;
                mensageSuccess.style.display = 'flex';
                runConfettiAnimation();
                cardVideo.style.opacity = 0;
                cardVideo.style.display = 'none';
            })
        
        videoPlayerTree.pause();
        videoPlayerTree.currentTime = 0;

        videoPlayerTwo.pause();
        videoPlayerTwo.currentTime = 0;
        videoPlayerOne.pause();
        videoPlayerOne.currentTime = 0;

        videoPlayerFour.play();
        })
    })
)


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