const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "swift",
};

// for (const key in myObj) {
//     console.log(myObj[key])
// }

for (const key in myObj) {
  console.log(`${key} : ${myObj[key]}`);
}

// Question : can forin loop works on array

const arr = [1,2,3,4,5,6];

for (const key in arr) {
    console.log(`The key is : ${key} and the value is : ${arr[key]}`);
}

// we can't iterate over the map and object using for in loop 

/*
    Note : If you want to use the loops in object we need to use the for in loop.

*/

