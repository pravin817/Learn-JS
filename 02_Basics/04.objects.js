// const tinderUser = new Object();   // This is a singleton object as we created it with the help of the constructor

// const tinderUser2 = {};

// console.log(tinderUser);
// console.log(tinderUser2);

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Pravin",
      lastName: "Mhaske",
    },
  },
};

// ?. This is know as the Optional chaining ---> We don't want to use nested if...else

console.log(regularUser.fullName?.userFullName.firstName);

// We can combine the object

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

const obj4 = { 5: "a", 6: "b" };

// const obj3 = {obj1,obj2};

// const obj3 = Object.assign({},obj1,obj2,obj4);

const obj3 = { ...obj1, ...obj2, ...obj4 };

console.log(obj3);

// If we get the data from the DB

const user = [
  {
    id: 1,
    email: "p1@gmail.com",
  },
  {
    id: 2,
    email: "p2@gmail.com",
  },
  {
    id: 3,
    email: "p3@gmail.com",
  },
];

// user.map((u)=>{
//     console.log(u);
// })

console.log(tinderUser);
console.log(Object.keys(tinderUser));  // The return type is the array

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

// To check the property is belong to that object

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName : "Js hindi",
    price :999,
    courseInstructor:"Hitesh"
}

// console.log(course.courseInstructor);

// The syntatic sugar format 

const {courseName, price, courseInstructor:instructor} = course;

console.log(courseName);
console.log(price);
// console.log(courseInstructor);
console.log(instructor)


// Concept of react  ---> Object destructure
const navbar = ({companyName})=>{

}

// const navbar = (props.companyName)=>{

// }

navbar(companyName = "Pravin")

// JSON Data 

// {
//     "name":"Hitesh",
//     "courseName":"Js in Hindi",
//     "price":"Free"
// }