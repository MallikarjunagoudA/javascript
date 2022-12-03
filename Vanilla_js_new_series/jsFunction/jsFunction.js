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
function calculate (a, b, operator){
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


//**ES6 function expression */
 const calculate = (a, b, operator) => {
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


