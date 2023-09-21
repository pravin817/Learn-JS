const user = {
  username: "Pravin",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this); // this refers to the current context
  },
};

// user.welcomeMessage();

// user.username = "Tejas";

// user.welcomeMessage();

// console.log(this);  // this refer to the global object in brower ---> which is window. while in case of the node js it return {}

// function chai(){
//     const username = "Pravin";
//     console.log(this.username);  // This gives the output undefined
// }

// chai();

// const chai = function(){
//     const username = "Pravin";
//     console.log(this.username);
// }

// chai();

const chai = () => {
  const username = "Pravin";
  console.log(this.username);
};

// chai();

// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }

// const addTwo = (num1,num2)=> num1+num2;
// const addTwo = (num1,num2)=> (num1+num2);
const addTwo = (num1,num2)=> ({name : "Pravin"});

console.log(addTwo(10,20));

const myArray = [1,2,3,4,5,6,7,8,9,10];

// myArray.forEach(()=>{

// })
