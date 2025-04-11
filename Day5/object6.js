"use strict"

//javascript object method
// Object methods are an action that can be performed on object
// A method is a function defenition stored as a property value 

const person = {
    name: 'John',
    age: 30,
    id: 11356,
    // method
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} my id number is ${this.id}  `)
            },
            
    
};
// calling method
person.greet();


//In the example above , 'this' refer to a person object 
//this.name = person.name that means name 
//this.age = person.age that means age
//this.id = person.id that means id
//this.greet = person.greet that means greet method
//this is a keyword in javascript that refer to the current object
//this is used to access the properties of the current object


// if you invoke the greet property with (), it will execute as a function 
// if you invoke the greet property without (), it will return the function definition

let abhiwadan = person.greet;
console.log(abhiwadan);




