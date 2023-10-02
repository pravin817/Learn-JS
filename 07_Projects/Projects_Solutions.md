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
