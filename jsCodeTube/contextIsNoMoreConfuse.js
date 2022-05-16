// #Rules
/*
1. Functions in js are scaned and made available.
2. Variable in the js are scanded and made Undefined.
*/

//ex => 1
sayHello();

function sayHello() {
    console.log("Hello");
}

/* *************here it will through the error***************because the sayHi is a variable. 
sayHi();

const sayHi =function (){
    console.log("Hi");
}
*/

//ex => 2
console.log(num); //declared but after this line. so through the undefined. 
console.log(number);//this will give a error because `let is not a globle variable to declare.
var num=2;
let number=10;
console.log(num);

//inside the add() we add the same num variable here it wil take num value as 5
function add (){
var num=5;
let number =20;
    console.log(num);
    console.log(number);
}

add();

//again taking the global variabe declared.
console.log(num);
console.log(number);