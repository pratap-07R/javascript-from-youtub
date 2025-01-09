"use strict"; //treat all js code as newer version

// console.log(3<2);
// console.log(3>2);
// console.log(3<=2);
// console.log(3>=2);
// console.log(3==2);


// console.log(null > 0);
// console.log(null < 0);
// console.log(null <= 0);
// console.log(null >= 0);
// console.log(null == 0);
// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);



// NOTE-  (==) => double equal to check comparision and (===) check even data type is same or not



/*****************************************    data type    ******************************************** */ 
//Primitive 
//there are 7 primitive data types => String, Number, Boolean, Null, Undefiened, Symbol, BigInt

// Refrence data type(non primitive data type)
// there are 4 refrence data types => Array, Object, Function, Date


//note => js is dynamically typed language which means variable can hold values diffrents type on runtime 


//memory => two type of memory in js 1.Stack 2.Heap
//stack(primitive), Heap(Non-primitive )

let myYoutubName = "pratap singh";
let anotherName = myYoutubName;
anotherName = "Rana ";

//console.log(myYoutubName);
//console.log(anotherName);  // in primitive data type(stack) we have get copy value not original/refrence value

let userOne = {
    name: "pratap singh",
    age: 20,
    email: "user@gmail.com"
}
let userTwo = userOne;
userTwo.name = "sumit";

console.log(userOne);
console.log(userTwo); // in this we get adject same value after change we called it Heap 
