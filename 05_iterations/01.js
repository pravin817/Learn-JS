// for loop

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is the best number.");
//     }
//     console.log(element);
// }

// console.log(index)
// let cnt = 0;
// for (let i = 0; i < 10; i++) {
//   console.log(`The outer : ${i}`);
//   for (let j = 0; j <10; j++) {
//     console.log(`The inner : ${j} and the inner i value : ${i}`);
//     cnt++;
//   }
// }

// console.log(cnt);


const myArray = ["flash","batman","superman"];

// console.log(myArray.length)


/*
    Note : If we access the index outside the length of the array then it will return the undefined.

*/    
for (let i = 0; i <= myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}

// break and continue 

// for (let index = 1; index <=20; index++) {
//     const element = index;

//     if(index == 5){
//         console.log("detected 5")
//         break;
//         // Stopes the excution of the loop
//     }

//     console.log(`Value of i is : ${index}`)
// }

// break and continue 

for (let index = 1; index <=20; index++) {
    const element = index;

    if(index == 5){
        console.log("detected 5")
        continue;  // ek bar mafi 
        // Stopes the excution of the loop
    }

    console.log(`Value of i is : ${index}`)
}