const accountId = 873654;
var accountName = "Pratap singh "
let accountEmail = "pratapsingh787@gmail.com"
let accountPassword = "Pratap@123"
accountcity = "Patna"
let accountState;


// accountId = 243 // because of const declaration

console.log(accountId);

/*
prefer not to use Var 
because of issue in block scope and function scope
*/

console.table([accountEmail, accountId,accountPassword, accountName,accountcity, accountState])