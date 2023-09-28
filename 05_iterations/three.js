// for of loop 

// ["string1 ", "string 2","string 3"];

const arr = [1,2,3,4,5];

for (const i of arr) {
    console.log(i);
}

const greetings = "Hello world";

for (const greet of greetings) {
    console.log(greet);
}

// Map 

const map = new Map();

map.set("IN","India");
map.set("USA","United States of America");
map.set("FR","FRANCE");
map.set("IN","India");  // not affected

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key +" : "+value);
}

// how to iterate over the object

const myObj = {
    "game1":"NSF",
    "game2":"Spiderman"
}

// for (const [key,value] of myObj) {
//     console.log(key + " : "+value);
// }
