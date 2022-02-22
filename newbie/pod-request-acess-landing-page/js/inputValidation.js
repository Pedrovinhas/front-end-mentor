const emailValidation = document.getElementById('mail')
const requestButton = document.querySelector('#request')
const popUpWrong = document.querySelector('.wrong')
const popUpEmpty = document.querySelector('.empty')
const popUpValid = document.querySelector('.valid')
const regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

emailValidation.addEventListener('keyup', () => {
    if(emailValidation.value.match(regExp)) {
        emailValidation.style.border = ".1rem solid #27ae60"
        popUpWrong.style.display = "none"
        popUpValid.style.display = "block"
        popUpValid.style.animation = "fade 1s linear"
        popUpEmpty.style.display = "none"
    } else {
        emailValidation.style.border = ".1rem solid #F47174"
        popUpWrong.style.display = "block"
        popUpWrong.style.animation = "fade 1s linear"
        popUpValid.style.display = "none"
        popUpEmpty.style.display = "none"
    } 

})

requestButton.addEventListener('click', () => {
    if(emailValidation.value == ('')) {
        popUpEmpty.style.display = "block"
        popUpEmpty.style.animation = "fade 1s linear"
        
        popUpWrong.style.display = "none"
    } else {
        popUpEmpty.style.display = "none"
    }
})