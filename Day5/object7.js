"use strict "

//adding a mothod to an objects 

const person = {
    name: 'John',
    age: 30,
    occupation: 'Software Engineer',
    id:564839
};
person.name = function(){
    return (this.name).toUpperCase();
    
}

console.log(person); // JOHN
