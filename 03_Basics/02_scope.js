// var c = 300
// let a = 300

// if(true){
//     let a = 10;
//     const b = 20;
//     console.log("Inner : ",a);
// }

// console.log(a);
// console.log(b)
// console.log(c)

function one(){
    const username = "Pravin";

    function two(){
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);

    // two();
}

one();

if(true){
    const username = "pravin";

    if(username === "pravin"){
        const website = " youtube";
        console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);

//  ========================== Interseting =============================

addOne(5);

function addOne(num){
    return num+1;
}

addTwo(10);  // ---> This will gives an error ----> because we try to access the expression before its initialization 

// This is the function but some times called as expression
const addTwo = function(num){
    return num+2;
}

// const data = addOne(5);
// console.log(data);