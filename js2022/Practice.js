// 4..null and undefined

/*
//null
var nul =null;

console.log(nul);
console.log(typeof(nul));


//undefined
var und ;

console.log(und);
console.log(typeof(und));

*/


// 5..NaN

/*
console.log("a"-"b"); // NaN

var d="hello";
console.log(isNaN(d)); //--false

console.log()
console.log(Number.NaN===NaN)
console.log(isNaN(NaN))
console.log(isNaN(Number.NaN))
console.log(NaN ===NaN)

*/

// 6.. == and ===
/*
var x=5;
var y="5";

console.log(typeof(x))
console.log(typeof(y))

console.log(x==y) //true
console.log(x===y) //false

*/

//7.. For loop

// for in loop



// 8 .. function


//sum is the example
/*
function sum(a, b) {
    return a + b;
}
var c = sum(5, 8);
console.log(c)

//ananymous function

var summ = function (a, b) {
    return total = a + b;
}

var s = summ(5, 9);

console.log(s);



//arrow function
var summ1 =() => {
    return `sum is ${a+b}`;
}

var summ2 =() =>{
    `sum is ${a+b}`
}

var summ3 =() => `sum is ${a+b}`
*/
// 10.. var and let const
/*
//var
function sum(){
    var va =5;
    console.log("inner",va)
    return va;
}
sum();

console.log("innerToOuter",va) //va is declared inside the function sum. its not available outside the function.



//let 
function sum(){
    let va2 =5;
    console.log("va2 declared in fun scoped ",va2)
    if(5==5){
        let va =5;
        console.log("va2 declared in fun scoped and inside one if block scoped ",va2)
        console.log("va declared inside the if loop block scoped only and this is innner if block",va)
    }
    console.log("va declared inside the if loop block scoped only and this is outside the  if block",va)//error

    return va;
}

sum();

console.log("innerToOuter",va2)

console.log("innerToOuter",va) //let 
*/

// `template literels`
/*
var myFirstName ="mallikarjuna";
var myLastName ='Anandagoud';
console.log(`here my details myfirstName ${myFirstName} and my last name is ${myLastName}`)
*/


// 11.. default parameters
/*
function mult(a,b){
    return a*b;
}

console.log(mult(5)) //this will return NaN.


function mult1(a,b=9){
    return a*b;
}

console.log(mult1(5)) //45

*/








