const score = 500

const balance = new Number(100000);

console.log(score);
console.log(balance);

// printing the data types of the above variables 
console.table([typeof(score), typeof(balance)]);

console.log(score.toString().length);

// can be used in ecommerse
console.log(score.toFixed(2));

const otherNumber = 23.890;

console.log(otherNumber.toPrecision(3));

// The hundred numbers 
// it will convert it to the local string
const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));

// Js provides the MIN_VALUE, MAX_VALUE 


// ========================= Maths ===========================================
// by default in js 


console.log(Math);

console.log(Math.abs(-233));
console.log(Math.abs(33));

// The round of 
console.log(Math.round(3.2));
console.log(Math.round(3.4));
console.log(Math.round(3.5));
console.log(Math.round(3.7));
console.log(Math.round(3.9));

// floor and the ceil values
console.log(Math.floor(3.4));
console.log(Math.ceil(3.4));

// MAx and min

console.log(Math.max(1,2,3,3,4,5,6,7,8,90));
console.log(Math.min(1,2,3,3,4,5,6,7,8,90));


// to generate the random numbers 
console.log(Math.random());  // this provides the values form the 0 to 1

console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min + 1) + min));



