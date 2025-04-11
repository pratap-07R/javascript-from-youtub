"use strict"

//Nested object
//properties value in an object can be other object 

let person = {
    name: 'John',
    age: 30,
    address:{
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
        },
    hobbies: 'playing cricket'
    
}
// console.log(person);
console.log(person.address);
console.log(person.address.street);