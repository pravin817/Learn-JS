// Singleton --> constructor --> makes it singleton 

// Object Literal

// onreject.create() ; // Singleton

// How to access the symbol inside the object

const mySmb = Symbol("key1");

const JsUser ={
    name : "Pravin",
    "full name":"Pravin Mhaske",
    [mySmb] :"KeyOne",
    age :21,
    location:"Nashik",
    email:"Pravin@google.com",
    isLoggedIn : false,
    lastLoginDays:["monday","saturday"]
}

// access the data inside the object 

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);

// Access the symbols from the object
// console.log(JsUser[mySmb]);

// console.log(typeof JsUser[mySmb]);


// How to change the values 
JsUser.email = "Pravin@chatgpt.com";

// console.log(JsUser);
// console.log(JsUser["email"]);

// We can put the lock on the object

// Object.freeze(JsUser);

// As we freeze the object it doesn't allow us to make the changes
JsUser.email = "pravin@gmail.com";

// console.log(JsUser);
// console.log(JsUser.email);

JsUser.greeting  = function(){
    console.log("Hello JsUser");
}

JsUser.greetingTwo  = function(){
    console.log(`Hello JsUser, ${this.name}`);
}

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// JsUser.greeting();
// JsUser.greetingTwo();