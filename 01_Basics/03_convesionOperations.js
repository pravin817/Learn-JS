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