const form = document.getElementsByTagName('form')[0];

form.setAttribute('novalidate', '');

form.addEventListener('submit', event => {
    if (!fName.validity.valid || !lName.validity.valid || !email.validity.valid || !password.validity.valid) {
        showError();
        event.preventDefault();
    }
});

// First name field validation
const fName = document.getElementById('fname');
const fNameError = document.querySelector('.first-name .error');
const fNameErrorImg = document.querySelector('.first-name .wrapper-errorimg');

fName.addEventListener('input', () => {
    if (fName.validity.valid) {
        fNameError.textContent = '';
        fNameError.classList.toggle('active', false);
        fNameErrorImg.classList.toggle('active', false);
        fName.classList.toggle('active', false);
    }
});

// Last name field validation
const lName = document.getElementById('lname');
const lNameError = document.querySelector('.last-name .error');
const lNameErrorImg = document.querySelector('.last-name .wrapper-errorimg');

lName.addEventListener('input', () => {
    if (lName.validity.valid) {
        lNameError.textContent = '';
        lNameError.classList.toggle('active', false);
        lNameErrorImg.classList.toggle('active', false);
        lName.classList.toggle('active', false);
    }
});

// Email field validation
const email = document.getElementById('email');
const emailError = document.querySelector('.email .error');
const emailErrorImg = document.querySelector('.email .wrapper-errorimg');

email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.classList.toggle('active', false);
        emailErrorImg.classList.toggle('active', false);
        email.classList.toggle('active', false);
    }
});


// Password field validation
const password = document.getElementById('password');
const passwordError = document.querySelector('.password .error');
const passwordErrorImg = document.querySelector('.password .wrapper-errorimg');

password.addEventListener('input', () => {
    if (password.validity.valid) {
        passwordError.textContent = '';
        passwordError.classList.toggle('active', false);
        passwordErrorImg.classList.toggle('active', false);
        password.classList.toggle('active', false);
    }
});

function showError() {

    // First Name field validation
    if (!fName.validity.valid) {
        if (fName.validity.valueMissing) {
            fNameError.textContent = 'First Name cannot be empty';
        }
        fNameError.classList.toggle('active', true);
        fNameErrorImg.classList.toggle('active', true);
        fName.classList.toggle('active', true);
    }

    // Last Name field validation
    if (!lName.validity.valid) {
        if (lName.validity.valueMissing) {
            lNameError.textContent = 'Last Name cannot be empty';
        }
        lNameError.classList.toggle('active', true);
        lNameErrorImg.classList.toggle('active', true);
        lName.classList.toggle('active', true);
    }

    // Email field validation
    if (!email.validity.valid) {
        if (email.validity.valueMissing) {
            emailError.textContent = 'Email cannot be empty';
        } else if (email.validity.typeMismatch) {
            emailError.textContent = 'Email is not valid';
        }
        emailError.classList.toggle('active', true);
        emailErrorImg.classList.toggle('active', true);
        email.classList.toggle('active', true);
    }

    // Email field validation
    if (!password.validity.valid) {
        if (password.validity.valueMissing) {
            passwordError.textContent = 'Password cannot be empty';
        } else if (password.validity.tooShort) {
            passwordError.textContent = `Password should be at least ${password.minLength} characters`;
        }
        passwordError.classList.toggle('active', true);
        passwordErrorImg.classList.toggle('active', true);
        password.classList.toggle('active', true);
    }
}
