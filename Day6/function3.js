"use strict"


function toCelcius(forenheight){
    let celcius = (forenheight - 32) * 5/9;
    return celcius;
}
let value = toCelcius(78);
console.log(value);
