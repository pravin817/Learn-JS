# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript

// Get all the buttons
const buttons = document.querySelectorAll('.button');

// get the body
const body = document.querySelector('body');

// Iterate through the buttons
buttons.forEach(function (button) {
  console.log(button);

  // add the event listener to the button
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target.id);

    // get the e.target.id in color
    const color = e.target.id;

    // compare the color one by one update the body based on the color
    if (color === 'grey') {
      body.style.backgroundColor = color;
    } else if (color === 'white') {
      body.style.backgroundColor = color;
    } else if (color === 'blue') {
      body.style.backgroundColor = color;
    } else if (color === 'yellow') {
      body.style.backgroundColor = color;
    }
  });
});

```

## Project 2 Solution

```javascript

// const height = parseInt(document.querySelector('#height').value);

// const weight = parseInt(document.querySelector('#weight').value);

/*
  Note : This use case gives you null values
*/

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter the valid heights ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter the valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // based on the bmi

    if (bmi < 18.6) {
      results.textContent = `${bmi}  UnderWeight`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.textContent = `${bmi} Normal weight`;
    } else if (bmi > 24.9) {
      results.textContent = `${bmi} Overweight`;
    }
  }
});

```

## Project 3

```javascript

const clock = document.querySelector('#clock');

function showTime() {
  setInterval(() => {
    const time = new Date().toLocaleTimeString();
    clock.innerHTML = time;
  }, 1000);
}

showTime();

```

## Project 4 solution added

```javascript


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// validate the guess number
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter the valid number.');
  } else if (guess < 1) {
    alert('Please enter the number greater than 1');
  } else if (guess > 100) {
    alert('Please enter the number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. The Random number was : ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```


## Project - 6 Solution added

```javascript

// generate the random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBg, 1000);
  }

  function changeBg() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

// get the reference of the start and stop button
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
// generate the random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBg, 1000);
  }

  function changeBg() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

// get the reference of the start and stop button
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```