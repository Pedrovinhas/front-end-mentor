const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

function countDown() {
    const Countdown = new Date('03-21-2022');
    const now = new Date()

    const distance = Countdown - now;
    console.log(now)
    console.log(Countdown)

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

    document.querySelector('.days').innerHTML = days
    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes    
    document.querySelector('.seconds').innerHTML = seconds 
}


setInterval(countDown, 1000)
