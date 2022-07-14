const firstName = document.getElementById('first-name');
const firstNameError = document.querySelector('.firstNameError');

const lastName = document.getElementById('last-name');
const lastNameError = document.querySelector('.lastNameError');

const email = document.getElementById('email');
const emailError = document.querySelector('.emailError');

const phoneNumber = document.getElementById('phone-number');
const phoneError = document.querySelector('.phoneError');

const password = document.getElementById('password');
const passError = document.querySelector('.passError');

const passwordConfirmation = document.getElementById('confirm-password');
const passConfirmError = document.querySelector('.passConfirmError');

letters = /[A-Za-z]/
digits = /[0-9]/;
specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
emailSpecialChar = /[`!#$%^&*()+\=\[\]{};':"\\|,<>\/?~]/;
passwordSpecialChar = /[`@#^*()+\=\[\]{};':"\\|,.<>\/?~]/;

firstName.addEventListener('input', () => {
    if(specialChar.test(firstName.value) || digits.test(firstName.value)) firstNameError.innerHTML = 'First name must only contain letters';
    else firstNameError.innerHTML = '';
})

lastName.addEventListener('input', () => {
    if(specialChar.test(lastName.value) || digits.test(lastName.value)) lastNameError.innerHTML = 'Last name must only contain letters';
    else lastNameError.innerHTML = '';
})

email.addEventListener('input', () => {
    if(emailSpecialChar.test(email.value)) emailError.innerHTML = 'Email can only contain these special characters: .-_';
    else emailError.innerHTML = '';
})

phoneNumber.addEventListener('input', () => {
    if(letters.test(phoneNumber.value) || specialChar.test(phoneNumber.value)) phoneError.innerHTML = 'Phone number must only contain numbers';
    else phoneError.innerHTML = '';
})

password.addEventListener('input', () => {
    if(passwordSpecialChar.test(password.value)) passError.innerHTML = 'Password can only contain these special characters: _-$%&!';
    else passError.innerHTML = '';
})

passwordConfirmation.addEventListener('input', () => {
    if(password.value !== passwordConfirmation.value) passConfirmError.innerHTML = 'Passwords do not match';
    else passConfirmError.innerHTML = '';
})

