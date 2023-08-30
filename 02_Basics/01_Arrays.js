// Array

// The array indexing is started from the zero 

/*
Note : In case of array shallow copy takes place.
*/    

// The array declarations in js 

const arr1 = [1,2,3,4,5];
const myHeros = ["Shaktiman", "Naagraj"];

const arr2 = new Array(1,true,"Thank you", 122, 'a');



const myArr = [0,1,2,3,4,5,6];

console.log(myArr);

console.log(myArr[0]);

// Array methods 

arr1.push(6);
arr1.push(7);
arr1.pop();


//Array unshift()  ----> To add the eleemnt at the starting of the array

arr1.unshift(10);  // Add the element at the starting of the array   
arr1.shift();      // removes the elements from the starting of the array


// check if the 10 is present in arr1 
console.log(arr1.includes(1));  // returns true or false
console.log(arr1.indexOf(1));   // if the element is present then it return the index else it returns the -1 i.e not present

const newArr = arr1.join();         // This operation will assign the elements of the int to the string

console.log(newArr);
console.log(typeof newArr);

// slice and splice 

// slice  

const a1 = [0,1,2,3,4,5,6];
console.log("A : ",a1);
const a2 = a1.slice(1,3);
console.log(a2);
console.log("B : ",a1);

// splice

const a3 = a1.splice(1,3);

console.log("C : ",a1);

console.log(a3);

/*
    Note : The main diffrence between the slice and splice 
        1) The range slice ---> Not included        |     splice ----> included
        2) The original array ----> Not affected    |     Splice -----> The original array affected
        3) The original array is as it is           |     Splice -----> The portion of the array is removed from the array
*/

// console.log(arr1);