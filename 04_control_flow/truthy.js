// const userEmail = "p@pravin.ai";
const userEmail = [];

if (userEmail) {
  console.log("Got the user Email");
} else {
  console.log("Can't get the user email");
}


// falsy values 
// 1) false 
// 2) 0
// 3) -0
// 4) BigInt (0n) 
// 5) null
// 6) undefined
// 7) NaN

// truthy values 

// 1) "0"
// 2) " "
// 3) 'false'
// 4) []
// 5) {}
// 6) function(){}

// If the data type is array then 

if(userEmail.length === 0){
    console.log("Array is empty")
}

// to check for the object 

const emptyObject = {}

// Object.keys(objName)  ---> this will convert the object to the array then we will find the length of the array 

if(Object.keys(emptyObject).length === 0){
    console.log("The object is empty.");
}

// Nullish Coalesing Operator (??)

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;

val1 = undefined ?? null ?? 10 ??20;

console.log(val1);

/*
    Note : The  Nullish Coalesing Operator (??) and the ternary opertaors are the different.
*/


// ternary operator (?:)

// condition ? true : false;

const iceTeaprice = 100;

iceTeaprice <= 80 ? console.log("less than 80"):console.log("greater than 80");

