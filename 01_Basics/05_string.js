const name = "pravin "

const repoCount = 123;

console.log(name + repoCount + " values");  // This is the old way of the writting code  we will use the modern way of writting code .

console.log(`This is the updated version by using the interpolation : My name is : ${name} and the repocount is : ${repoCount}`);

// we can perform the different operations on the string

console.log(`The string length is : ${name.length}`);

// declare the string 

const str1 = "Hello";

const gameName =new String("Hitesh-Hc");

console.log(str1);
console.log(gameName);

console.log(typeof(str1));
console.log(typeof(gameName));

console.log(gameName[0]);

// console.log(str2.__proto__.length);

console.log(gameName.length);

console.log(gameName.toUpperCase());    // This doesn't change the original string because it is pass by value

console.log(gameName.charAt(0));


// to know the index of the character 
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);

console.log(newString);   // Hite

const newAnotherString = gameName.slice(-8,4);

console.log(newAnotherString);


/* 
    Note : The substring doesn't take the negative number i.e the index start from the end.
*/

// trim 

const newStringOne = "    Pravin Mhaske    ";
console.log(newStringOne);
console.log(newStringOne.trim());

// replace 

const url = "https://www.pravinmhaske.com";

console.log(url);

console.log(url.replaceAll(".","-"));

console.log(url.includes('z'));

console.log(gameName.split('-'));


