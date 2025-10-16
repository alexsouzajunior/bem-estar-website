const cardOne = document.querySelectorAll('.card_one');
const cardTwo = document.querySelectorAll('.card_two');
const cardTree = document.querySelectorAll('.card_tree');
const cardFour = document.querySelectorAll('.card_four');

const cardVideo = document.querySelectorAll('.video__exercicio');
const videoOne = document.querySelectorAll('.exercicio_one');
const videoTwo = document.querySelectorAll('.exercicio_two');
const videoTree = document.querySelectorAll('.exercicio_tree');
const videoFour = document.querySelectorAll('.exercicio_four');


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