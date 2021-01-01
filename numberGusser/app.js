const btn = document.querySelector('#guess-btn');
const input = document.querySelector('#guess-input');
const message = document.querySelector('.message');
const minEL = document.querySelector('.min-num');
const maxEL = document.querySelector('.max-num');

let numberOfGuesses = 3;
const maxNum = 10;
const minNum = 1;

minEL.textContent = minNum;
maxEL.textContent = maxNum;

let winningNum = numPicker(minNum, maxNum);

btn.addEventListener('click', playAgain);

btn.addEventListener('click', function(){
    if(numberOfGuesses > 1) {
        check(parseInt(input.value));
    }else {
        message.textContent = `you lost the number was ${winningNum}`;
        input.value = '';
        input.disabled = true;
        btn.value = 'play again';
        btn.classList.add('play-again');
    }
});


function check(num) {

    if(isNaN(num) || num < minNum || num > maxNum){
        setMessage(`Please enter a number between ${minNum} and ${maxNum}`, 'red');
      }
    else if(num === winningNum) {
        setMessage('you won', 'green');
        btn.value = 'play again';
        btn.classList.add('play-again');
    }else {
        numberOfGuesses -= 1;
        input.value = '';
        setMessage(`try again you have ${numberOfGuesses} more guesses`, 'red');
    }
}

function numPicker(min, max) {
    const num = Math.floor((Math.random() * max) + min);
    return num;
}


function playAgain(e) {
    if(e.target.classList.contains('play-again')) {
        window.location.reload();
    }
}


function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
    input.style.borderColor = color;
}