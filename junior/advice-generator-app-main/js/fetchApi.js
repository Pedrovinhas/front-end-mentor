const adviceGenerator = 'https://api.adviceslip.com/advice';
const dice = document.getElementById('dice');
const messageText = document.getElementById('message-text');
const messageNumber = document.getElementById('message-number');
const diceImg = document.querySelector('#dice-img');

dice.addEventListener('click', () => {

    fetch (adviceGenerator, {
        method: 'GET'
    })
        .then (response => response.json())
        .then (data => {
            messageNumber.innerHTML =  (`Advice  #${data.slip.id}` )
            messageText.innerHTML = (`${data.slip.advice}`)
            
            setTimeout(() => {
                messageNumber.classList.add('fade')
                messageText.classList.add('fade')
            })
            messageNumber.classList.remove('fade')
            messageText.classList.remove('fade')
            
         
            const rollDice = () => {
                diceImg.classList.add('active')
            }

            setTimeout(() => {
                rollDice()
            }, 100)

            diceImg.classList.remove('active')

          
          })
        .catch (err => console.error(err));

})




   
