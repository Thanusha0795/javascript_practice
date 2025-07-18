// Function example and named function

function product(a,b){
    return a * b
}
console.log(product(5,7));

// function exression & named function expression
var product = function product (a,b){
    d = a+b;
    e = a-b;
    f = a*b;
    g = a/b;
    return {d, e,f,g};
}
  
console.log(product(6,6));


// anonymous function expresssion
let add = function (a,b){
    let d = a+b;
    let e = a-b;
    let f = a*b;
    let g = a/b;
    return {d, e,f,g}; 
}
console.log(add(6,9));

// //anonymous function
// function (a,b){
//     let d = a+b;
//     let e = a-b;
//     let f = a*b;
//     let g = a/b;
//     return {d, e,f,g};
// }(6,6);   //undefind

// Arrow Function
const sum = (a,b) => {
    var d = a+b;
    return d;
}
console.log(sum(9,2));

// Arrow function with single statement 
const sum2 = (a,b) => a+b;
console.log(sum2(9,4));

// Arrow function with single parameter
const square = a => a*a;
console.log(square(5));

const cube  = a  => a*a*a;
console.log(cube(2));

// no arguments
var greet =()=> "Hellow good morning";
console.log(greet());
var send = () => console.log("Hello Gold");
send();
