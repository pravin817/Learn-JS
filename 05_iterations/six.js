// const coding = ["Js","c","c++","Java","Python","Ruby"];

// /*
//     Note : The forEach loop return the undefined.
// */

// const values = coding.forEach((item)=>{
//     console.log(item);
// });

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

// The filter return the array that satisfy the condition 
// const newNums = myNums.filter((num)=>num>4);


// const newNums = myNums.filter((num)=>{
//     return num>4;
// });

// Apply same on the array by using the forEach loop

// const newNums = [];
// myNums.forEach((num)=>{
//     if (num>4) {
//         newNums.push(num);
//     }
// })

// console.log(myNums);
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

  // get the names of the books who has the genres 'History'

// const userBooks = books.filter((bk)=>bk.genre === "History");

// The list of the books that are publish after 2000

const userBooks = books.filter((bk)=> { 
    return bk.publish >= 1995 && bk.genre === "History"

});

console.log(userBooks);