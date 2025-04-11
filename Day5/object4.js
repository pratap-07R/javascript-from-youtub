"use strict"

//javascript object properties 
//properties can be changed , added , deleted and some time read only

const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA',
    hasHobbies: true,
    hobbies: ['reading', 'swimming', 'cycling'],
    
}

//accessing the property of an object
// accesing objectname.property
console.log(person.name);
// accessing objectname['property']

console.log(person['name']);
//accessing the property of an object using bracket notation



//you can add new property to an axisting obejct
person.occupation = "software developer"

console.log(person);


//you can delete an delete a property to an object 
delete person.age
console.log(person);

//you can delete a property using bracket notation
delete person['age']
console.log(person);

// the delete keyword deletes both both the value of property and property itself
// the delete keyword does not delete the property from the object but it deletes the property from the object
