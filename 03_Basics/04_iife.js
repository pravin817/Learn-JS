//Immediately Invoked Function Expression (IIFE)

// 1) To avoid the pollution from the global scope we need to use te IIFE 
// 2) To immediately invoking the function 

(function chai(){
    // Named IIFE
    console.log(`DB connected`);
})();  //The semicolon is added to stop the context of the function

((name)=>{
    
    console.log(`The DB connected successfully. ${name}`);
})('Pravin')



