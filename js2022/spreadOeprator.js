// * spread operator

let color = ["red","black","green"];

//without spread
let myFevColor =["red","black","green","blue","yellow"]

//with spread
let myFavourateColor =[...color,"blue","yellow"];

console.log(myFavourateColor)


//rest operator
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
// it depends on when we will use the ... operator.
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10
  