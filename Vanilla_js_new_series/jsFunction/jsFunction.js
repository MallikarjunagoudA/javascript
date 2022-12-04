/*
fuciton in js is also a object.
for more follow 
todo: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
*/


//** regular function */
function calculate (a, b, operator){
    let op =operator;
    let c =0;
    switch(op){
        case '+': return a+b;
        case '-': return a-b;
                break;
        case '/': if(a>b){
                   return a/b;
                   break;
              }else{
                return b/a;
                break;
              }
        case '*': return a*b;    
                 break;
    }
}
calculate(5, 6,"+");


//**function expression */
function calculate1 (a, b, operator){
    let op =operator;
    let c =0;
    switch(op){
        case '+': return a+b;
        case '-': return a-b;
                break;
        case '/': if(b != 0){
                   return a/b;
                   break;
              }else{
                console.log("please provide valid value");
                break;
              }
        case '*': return a*b;    
                 break;
    }
}

calculate(5, 6,"+");


//**ES6 arrow function expression */
/*
The arrow function this will take the outer scope 
arrow function doesn't have the its own this. and we will not use new to invoke the arrow function.
An arrow function expression (also called a fat arrow to distinguish from a hypothetical -> syntax in future JavaScript) has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target. Arrow functions are always anonymous.
*/
 const calculate2 = (a, b, operator) => {
    let op =operator;
    let c =0;
    switch(op){
        case '+': return a+b;
        case '-': return a-b;
                break;
        case '/': if(b != 0){
                   return a/b;
                   break;
              }else{
                console.log("please provide valid value");
                break;
              }
        case '*': return a*b;    
                 break;
    }
}

calculate(5, 6,"+");



//** constructor function */
/*
Here we need to invoke a function with the //? "new" keyword
we need to instantiate the method using the //? "this" keyword
The global this is different from the local this or which is used inside the function. the node will use the global this and browser will use the window this.

*/

function shape(length, width){
    this.length = length;
    this.width = width;

   this.draw = function(){
        console.log(`drawing the shape `+ this.length + ' '+this.width);
    }
}

var square = new shape(5, 5);
square.draw();
var rectangle  = new shape(2,4);


//todo: local variable

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName


  /*
  todo:Predefined functions
JavaScript has several top-level, built-in functions:

? eval()
The eval() method evaluates JavaScript code represented as a string.

? isFinite()
The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.

? isNaN()
The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN() to determine if the value is Not-A-Number.

? parseFloat()
The parseFloat() function parses a string argument and returns a floating point number.

? parseInt()
The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

? decodeURI()
The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.

? decodeURIComponent()
The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.

? encodeURI()
The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

? encodeURIComponent()
The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

? escape()
The deprecated escape() method computes a new string in which certain characters have been replaced by a hexadecimal escape sequence. Use encodeURI or encodeURIComponent instead.

? unescape()
The deprecated unescape() method computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. The escape sequences might be introduced by a function like escape. Because unescape() is deprecated, use decodeURI() or decodeURIComponent instead.
  */