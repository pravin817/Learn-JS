// let score = "40abc";
let score =  null 

console.log(typeof score);
console.log(typeof(score));

let valuesInNumber = Number(score);
console.log(typeof(valuesInNumber));
console.log(valuesInNumber);


/*
    Note :
        "33" ==> 33
        "33abc" ==> NaN
        true ==> 1 else 0
*/        

let isLoggedIn = "";              // This is a boolean
let BooleanIsLoggedIn = Boolean(isLoggedIn);          // This is a boolean

console.log(typeof(isLoggedIn))
console.log(BooleanIsLoggedIn)

/*
    Notes : 
     
    1 ==> true    0 ===> false
    ""  ===> false
    "pravin" ==> true

*/    

let someNumber = 40;

let stringNumber = String(someNumber);

console.log(someNumber)
console.log(stringNumber)

console.log(typeof (someNumber))
console.log(typeof (stringNumber))


// ################################ OPEARTIONS #####################################################

let value = 3
let negativeValue = -value;

console.log(negativeValue);

// Arithmetic operations 

console.log(3+3);    // 6
console.log(3-3);   // 0
console.log(3*3);   // 9
console.log(3**3);  // 27
console.log(3/3);   // 1
console.log(3%3);   // 0

let str1 = "Hello"
let str2 = " Pravin"

let str3 = str1 + str2;

console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log((3+4)%5*3); // Not good practice

console.log(true);
console.log(false);
console.log(+true); // Always avoid

let num1 , num2, num3;
num1 = num2 = num3 = 10;

console.table([num1,num2,num3]);

let gameCounter = 100;
gameCounter++;

console.log(gameCounter);