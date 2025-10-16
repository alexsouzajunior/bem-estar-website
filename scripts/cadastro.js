const inputRadioYes = document.querySelector('.input__radio_yes');
const inputRadioNo = document.querySelector('.input__radio_no');
const inputHidden = document.querySelector('.input__hidden');
const passwordInput = document.querySelectorAll('.password');
const showPassword = document.querySelectorAll('.showPassword');
const hidePassword = document.querySelectorAll('.hidePassword');

inputRadioYes.addEventListener('click', (() => {
    inputHidden.classList.toggle('active');
}));
inputRadioNo.addEventListener('click', (() => {
    inputHidden.classList.remove('active');
}));

hidePassword.forEach((hiddenPassword => {
    hiddenPassword.addEventListener('click', () => {
        for (let i=0; i < hidePassword.length; i++) {
            hidePassword[i].classList.add('active');
        }
        passwordInput.forEach((inputPassword => {
            if (inputPassword.type = 'password') {
                inputPassword.type = 'text';
            }
            else{
                inputPassword.type = 'password';
            }
        }));
        showPassword.forEach((show => {
            show.classList.add('visible')
        }));
    });
}));

showPassword.forEach((show => {
    show.addEventListener('click', () => {
        for (let i = 0; i < showPassword.length; i++) {
            showPassword[i].classList.remove('visible');
        }
        passwordInput.forEach((inputPassword => {
            if (inputPassword.type = 'text') {
                inputPassword.type = 'password';
            }
        }));
        hidePassword.forEach((hiddenPassword => {
            hiddenPassword.classList.remove('active');
        }));
    });
}));
