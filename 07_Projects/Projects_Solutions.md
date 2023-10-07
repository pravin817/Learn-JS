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