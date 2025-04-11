"use strict"

//Objects
//Objects are variables too. but it contains many values
//means the code assign many values
//An object literals is a list of NAME:VALUE pairs inside {} braces


let friends = { name: "arpit" , age : 20, email: "arpit@387" , address: "jalalpur"}
console.log(friends.name, friends.age);



//Spaces and line breaks are not important , An object intializer can span multiples lines


const car={
    name:"BMW",
    model:"M5",
    year:2017,
    color:"black",
    price:50000

}
console.log(car.name,car.model,car.year,car.color,car.price);



//create a new object and then add four properties

let bike = new Object();  // you can also use only {}

bike.name = "honda";
bike.model = "CBR500R";
bike.year = 2018;
bike.color = "red";
console.log(bike.name,bike.model);





//you can access object properties in two way 
//1. dot notation
//2. bracket notation
//dot notation is used when the property name is a valid JavaScript identifier
//bracket notation is used when the property name is not a valid JavaScript identifier
//or when you want to dynamically access a property by its name
//or when the property name is a variable
//or when the property name is a string that is not a valid JavaScript identifier


