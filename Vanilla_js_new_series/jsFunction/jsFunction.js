/*
fuciton in js is also a object.

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



