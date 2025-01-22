"use strict"

//singleton
//object literals

//Object.create


const mySym = Symbol("myKey1");



const Jsuser = {    //this is object litrelas
    name:  "Pratap",
    age : 19,
    location: "Patna",
    [mySym]: "mykey1",
    email: "viratkohli841415@gmail.com",
    isLocation: true,
    LastloginDays: ["monday", "saturday"],
    "full Name" : "Rana Pratap Singh"  //here don't access the fullname using dot(indexing) method
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]); //beacause behind the code variable name store as a string
// console.log(Jsuser["full Name"]); //acceseble
// console.log(typeof Jsuser.mySym); 


Jsuser.email = "kohligpt@gmail.com"
// Object.freeze(Jsuser)
// Jsuser.email = "kohli@microsoft.com"  //
console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello, how are you?");
}


Jsuser.greeting2 = function(){
    console.log(`Hello, how are you, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());


//NOTE = mostly access our elements help of dot but some time we use squre bracket just like for printing symbols



 
