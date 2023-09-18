function sayMyName() {
  console.log("P");
  console.log("R");
  console.log("A");
  console.log("V");
  console.log("I");
  console.log("N");
  console.log(" ");
  console.log("M");
  console.log("H");
  console.log("A");
  console.log("S");
  console.log("K");
  console.log("E");
}

// sayMyName // This is the reference of the function
// sayMyName();

// Parameters
// function addTwoNumber(a,b){
//     console.log(a+b);
// }

function addTwoNumber(a, b) {
  // let result = a+b;
  // return result;

  return a + b;
}

// Arguments
addTwoNumber(12, 13);

const result = addTwoNumber(10, 20);

// console.log("Result : ",result);

function loginUserMessage(username = "user") {
//   if (username === undefined) {
    if(!username){
    console.log("Please enter the user name");
  } else {
    return `${username} just login In`;
  }
}

// console.log(loginUserMessage("Pravin"));
// console.log(loginUserMessage()); // return  undefined just login In


function calculateCardPrice(val1,val2,...num1){
  return num1;
}

console.log(calculateCardPrice(200,300,400,2000));

const user={
  username:"hitesh",
  price:199
}

function handleObject(anyObject){
  console.log(`Username is : ${anyObject.username} and price is : ${anyObject.price}`);
}

handleObject(user);
handleObject({
  username:"Pravin",
  price:200
});

const myNewArray = [200,400,600,100];

function returnSecondValue(arr){
  return arr[1];
}

// const second = returnSecondValue(myNewArray);
const second = returnSecondValue([100,200,300,400,500,600]);
console.log(second);