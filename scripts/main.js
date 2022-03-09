const form = document.getElementsByTagName('form')[0];

form.setAttribute('novalidate', '');

form.addEventListener('submit', event => {
    if (!fName.validity.valid || !lName.validity.valid || !email.validity.valid || !password.validity.valid) {
        showError();
        event.preventDefault();
    }
});

// validating on user input to show a red border on input elements

// First name field validation
const fName = document.getElementById('fname');
const fNameError = document.querySelector('.first-name .error');

fName.addEventListener('input', () => {
    if (fName.validity.valid) {
        fNameError.textContent = '';
        fNameError.parentElement.classList.toggle('error', false);
    }
});

// Last name field validation
const lName = document.getElementById('lname');
const lNameError = document.querySelector('.last-name .error');

lName.addEventListener('input', () => {
    if (lName.validity.valid) {
        lNameError.textContent = '';
        lNameError.parentElement.classList.toggle('error', false);
    }
});

// Email field validation
const email = document.getElementById('email');
const emailError = document.querySelector('.email .error');

email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.parentElement.classList.toggle('error', false);
    }
});


// Password field validation
const password = document.getElementById('password');
const passwordError = document.querySelector('.password .error');

password.addEventListener('input', () => {
    if (password.validity.valid) {
        passwordError.textContent = '';
        passwordError.parentElement.classList.toggle('error', false);
    }
});

function showError() {

    // First Name field validation
    fName.value = fName.value.trim();
    if (!fName.validity.valid) {
        if (fName.validity.valueMissing || fName.value.trim() === '') {
            fNameError.textContent = 'First Name cannot be empty';
        }
        fNameError.parentElement.classList.toggle('error', true);
    }

    // Last Name field validation
    lName.value = lName.value.trim();
    if (!lName.validity.valid) {
        if (lName.validity.valueMissing) {
            lNameError.textContent = 'Last Name cannot be empty';
        }
        lNameError.parentElement.classList.toggle('error', true);
    }

    // Email field validation
    email.value = email.value.trim();
    if (!email.validity.valid) {
        if (email.validity.valueMissing) {
            emailError.textContent = 'Email cannot be empty';
        } else if (email.validity.typeMismatch) {
            emailError.textContent = 'Email is not valid';
        }
        emailError.parentElement.classList.toggle('error', true);
    }

    // Email field validation
    password.value = password.value.trim();
    if (!password.validity.valid) {
        if (password.validity.valueMissing) {
            passwordError.textContent = 'Password cannot be empty';
        } else if (password.validity.tooShort) {
            passwordError.textContent = `Password should be at least ${password.minLength} characters`;
        }
        passwordError.parentElement.classList.toggle('error', true);
    }
}
