let score = 33;
let score2 = "33abc"
let score3 = null;
let score4 = undefined;
let score5 = true;


//console.log(typeof score);
//console.log(typeof (score));

let value = Number(score2); // this value is special type of value that is called (Not A Number/NaN)
console.log(value);

console.log(score3);
console.log(score4);
console.log(score5);

// "33" => here 33 is as string 
// "33abc" => NaN not a number

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

// for conversion in one data type to another we use line no 22 method 
//like we use Boolean not boolean
// string to boolean => Boolean(string)
// number to boolean => Boolean(number)
// object to boolean => Boolean(object)
// array to boolean => Boolean(array)


let value2 = 3;
let negValue = -value2;
// console.log(negValue);



// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%5);



let str1 = "Hello ";
let str2 = "Pratap";
// console.log(str1+str2);



let val2= console.log("1"+ 2); //here 1 is string and 2 is integer so js is concate this value where output is not a integer
console.log(typeof(val2));
// console.log(1 + "2");


