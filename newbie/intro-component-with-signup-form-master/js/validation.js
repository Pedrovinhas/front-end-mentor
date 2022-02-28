const firstName = document.getElementById('name');
const lastName = document.getElementById('last-name');
const password = document.getElementById('password');
const email = document.getElementById('email');
const formSubmit = document.getElementById('submit');
const wrong = document.querySelectorAll('.wrong-name');
const icon = document.querySelectorAll('i');
const popup = document.querySelector('.popup');
const regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;





const validateName = () => {
    if (firstName.value == "") {
        wrong[0].style.display = "block";
        icon[0].style.display = "block";
    }
    else {
        popup.style.display = 'block'
    }
}

const validateLastName = () => {
    if (lastName.value == "") {
        wrong[1].style.display = "block";
        icon[1].style.display = "block";
    }
    else {
        console.log ('ok')
    }
}

const validatePassword = () => {
    if (password.value == "") {
        wrong[3].style.display = "block";
        icon[3].style.display = "block";
    } else {
        console.log ('ok')
    }
}

const validateEmail = () => {
    if(email.value.match(regExp)) {
        ''
    } else {
        wrong[2].style.display = "block";
        icon[2].style.display = "block";
    }
}

formSubmit.addEventListener('click', () => {
    validateName();
    validateLastName();
    validatePassword();
    validateEmail();
}) 


