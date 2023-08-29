// The datatypes are divided into two categories primitive and non primitive data types based on the call by value and call by reference 

// primitive ====> 7    ====> call by value

// 7 types 
// 1) String 
// 2) Number
// 3) Boolean
// 4) null
// 5) undefined 
// 6) Symbol
// 7) BigInt 

// reference type ====> Non premitive 

// array , objects ,function 

const score = 100

const scoreValue = 100.3

const isLoggedIn = false;

const temp = null;

const user = undefined;

console.table([typeof(score),typeof(scoreValue),typeof(isLoggedIn), typeof(temp),typeof(user)])

// const score:number = 100  // typescript syntax


// the symbols in js 
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false ---> This are the diffrent hence the answer is false

const bigNumber = 12345678987654321n

console.log(typeof(bigNumber));

console.log(bigNumber);

// reference variables 
// array , objects ,function 

const heros = ["shaktiman","naagraj","dooga"];

// object : in key -value pair 

const data = {
    name : "pravin",
    age : 21
}

console.log(data);

// function 

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof(myFunction))   // returns the function called as object function

console.log(typeof data);

// ====================================    The stack and Heap memory  ==========================

// primitive type (stack) , non primitive type (heap)

let ytName = "Pravin Mhaske";

let anotherYtName = "Learn with pravin";

console.log(ytName);
console.log(anotherYtName);

// Let's check for the objects 

const userOne = {
    email:"Pravin@google.com",
    upi :"pravin@ybl"
}

const userTwo = userOne;

userTwo.email = "test@google.com"

console.log(userOne.email);
console.log(userTwo.email);
