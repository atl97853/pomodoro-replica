// functions
function countdown() {
  alert('button was clicked');
}


// variables 
const startButton = document.querySelector('.counter-button > button')
const countdownNumber = document.querySelector('.counter-countdown')

// the program is running
startButton.addEventListener('click', countdown);