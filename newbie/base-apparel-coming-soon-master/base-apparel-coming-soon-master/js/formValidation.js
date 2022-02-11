function emailValidation() {
    const form = document.getElementById('form');
    const email = document.getElementById('mail').value;
    const error = document.querySelector('.error');
    const regexp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    

    regexp.match(email.value) ? validated.addClass('error') : error.addClass ('.error');
}




