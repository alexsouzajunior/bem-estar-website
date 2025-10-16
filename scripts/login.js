const passwordInput = document.querySelector('.password');
const showPassword = document.querySelector('.showPassword');
const hidePassword = document.querySelector('.hidePassword');

showPassword.addEventListener('click', (() => {
    if (passwordInput.type = 'password'){
        showPassword.classList.remove('visible');
        hidePassword.classList.remove('active');
    }
    else{
        passwordInput.type = 'password';
    }
}));

hidePassword.addEventListener('click', (() => {
    if (passwordInput.type = 'password'){
        passwordInput.type = 'text';
        hidePassword.classList.add('active');
        showPassword.classList.add('visible');
    }
    else{
        passwordInput.type = 'password';
    }
}));