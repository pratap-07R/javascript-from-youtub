"use strict"

//basics of functions 
function sayMyName(){
    console.log("P");
    console.log("r");
    console.log("a");
    console.log("t");
    console.log("a");
    console.log("P");
}
// sayMyName()


// function addTwonumbers(number1,number2){
    
//     console.log(number1+number2);
    
// }
// const result = addTwonumbers(6,9)
// console.log("result:" , result); // here output is perfect as you think because the given data is not stored in result 
// console.log(result); // here output is undefined because the result is not stored in result variable


function addTwonumbers(number1,number2){
    
    let result = number1 + number2;
    return result;
    
}
const result = addTwonumbers(6,9)
// console.log("result:" , result);



//break
function loginUserMessage(username = "sam"){ //sam is default value when user not input their name then sam is default value
    if(!username === undefined){
        console.log("username is not provided plz enter Username");
        return ;
    }
    return `${username} just logged in`
}
console.log((loginUserMessage()));
