// if

// if(true){

// }

// if(false){

// }

// if(2==2){

// }

// isUserLoggedIn = true;

// if (isUserLoggedIn) {
// }

// The comparison operators

// <, >,<=,>=,==,!=

// console.log(2=="2");
// console.log(2==="2");

// const temperature = 41;

// if (temperature === 41) {
//   console.log("less than 50");
// } else {
//   console.log("temperture greater than 50");
// }

// console.log("This will excute independently")

// const score = 200;

// if(score > 100){
//     let power = "fly";
//     console.log(`User power : ${power}`);
//     console.log(`User score : ${score}`);
// }

// console.log(`User power : ${power}`);

// shortHand notation

// const balance = 1000;

// if (balance > 500) console.log("Test"), console.log("test 2");  // This is not recommended

// if (balance < 500) {
//   console.log("Less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const isUserLoggedIn = true;
const debitCard = true;
const isLoggedInFromGoogle = false;
const isLoggedInFromEmail = true;

// if(isUserLoggedIn && debitCard && 2==2){
//     console.log("Allow to buy courses");
// }

if(isLoggedInFromEmail || isLoggedInFromGoogle){
    console.log("User LoggedIn")
}

