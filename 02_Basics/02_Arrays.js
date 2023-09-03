/*
    Notes:
        1) The concate returns the new array 
*/        

const marvel_heros = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros);

// console.log(marvel_heros);   //  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);

// we can use the concate 

// const allHeros = marvel_heros.concat(dc_heros);    

// console.log(allHeros);  // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// spread operator

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
console.log(marvel_heros);
console.log(dc_heros);

const anotherArray = [1,2,3,[4,5,6],7,[8,[9,10]]];

const real_another_array = anotherArray.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("Pravin"));  // false

// convert to the array 
console.log(Array.from("Pravin"));
console.log(Array.from({name : "Pravin"}));  // Interesting ---> IMP Point to be noted 

// convert the variables to the array 
let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

let score = Array.of(score1,score2,score3,score4);

console.log(score);