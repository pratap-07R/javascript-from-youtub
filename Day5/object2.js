"use strict"

// const tinderuser = new Object()
// const tinderuser = {}

//both are object but first one is singleton and second one is non-singleton

// console.log(tinderuser);




//break

const tinderuser = {}

tinderuser.id = "1254abc"
tinderuser.name = "daisy"
tinderuser.age = 25
tinderuser.location = "new york"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regulatUser = {
    id: "1234abc",
    fullName : {
        userName:{
            firstName: "Pratap",
            lastName: "singh"
        }
    }
}
// console.log(regulatUser.fullName.userName.firstName);

// we can create nested funstion 




//Break

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1+obj2}
//const obj3 = Object.assign({} ,obj1,obj2)  //or you can also use Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2} //easy and mostly use 

// console.log(obj3);



//break


// console.log(tinderuser);
const keysValue = Object.keys(tinderuser); //ths is give us all key value of tinderuser and store as array , and this data is usable mostly time like here we can put loop and lot off operations 
const Value = Object.values(tinderuser); //ths is give us all key value of tinderuser and store as array , and this data is usable mostly time like here we can put loop and lot off operations 

// console.log(keysValue);
// console.log(Value);

const course = {
    coursename: "js in hindi ",
    price: "999",
    courseInstructor: "Ranbir singh",
    courseDuration: "2 month",
}
// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor)