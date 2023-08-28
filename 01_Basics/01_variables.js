const accountId = 12345
let accountEmail = "pravin@google.com"
var accountPassword = "1234"
accountCity = "Nashik"

let accountState;

// accountId = 12 // we can't change 

console.log(accountId);

accountEmail = "p@p.com"
accountPassword = "2121212"
accountCity = "Bangaluru"

/*
    Note : Please don't use the var 
         Because the issue with the block scope and functional scope
*/    

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
