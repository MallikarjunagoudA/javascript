// * Destructuring in ES6

// * the destructuring assignment syntax is a js expression that makes it possible to unpack values from arrays or properties from objects into destinct variabkes.

// * Array Destrcturing

var arr =["mallu","anandagoud",25];

var fn =arr[0];
var mn =arr[1];
var age =arr[2];

//using destructuing
let [fn1,mn1,age1] =arr;

//object destructuring.

const stdObj ={
    name :"mallu",
    age :25,
    collage : "biet"
}


let {name,age,collage} =stdObj;