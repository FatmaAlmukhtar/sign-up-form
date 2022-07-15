const email = document.getElementById('email');
const emailError = document.querySelector('.emailError');

const password = document.getElementById('password');
const passError = document.querySelector('.passError');

emailSpecialChar = /[`!#$%^&*()+\=\[\]{};':"\\|,<>\/?~]/;
passwordSpecialChar = /[`@#^*()+\=\[\]{};':"\\|,.<>\/?~]/;

email.addEventListener('input', () => {
    if(emailSpecialChar.test(email.value)) emailError.innerHTML = 'Email can only contain these special characters: .-_';
    else emailError.innerHTML = '';
})

password.addEventListener('input', () => {
    if(passwordSpecialChar.test(password.value)) passError.innerHTML = 'Password can only contain these special characters: _-$%&!';
    else passError.innerHTML = '';
})