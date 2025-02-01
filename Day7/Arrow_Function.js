"use strict"


const user = {
    username: "Pratap",
    password: 999,

    welcomeMessage: function(){
        console.log(`Welcome to website ${this.username}`); //'this' reffer as current context 
        console.log(this);
        
    }

}
// user.welcomeMessage()  //output: Welcome to website Pratap
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);




//break

function code(){
    console.log(this);
}
code()

//break

// const chai = function(){
//     let username = "Riya"
//     console.log(this.username);
// }


const chai = () => {         //this is arrow function
    let username = "Riya"
    console.log(this);
}
// chai()



//break
// we learn full detais about arrow functions 

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,8));



// const addTwo = (num1, num2) => num1+num2  //this is called implicit return 
// console.log(addTwo(3,9));



//if we use curly braccess then we must have use return function and if we use pranthisis then we dont use return function 
// const addTwo = (num1, num2) => (num1+num2 ) 
console.log(addTwo(3,8));


const addTwo = (num1, num2) => ({username: "Pratap"}) 
console.log(addTwo(3,8));


