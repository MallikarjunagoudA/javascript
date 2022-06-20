/* ****

* the window obj allows execution of code at specified time intervals.
* These intervals are called timeing events.
* the two key methods to use with js are:

setTimeout(function, millisecods)
executes a function after waiting specified number of milliseconds.

setInterval(function,milliseconds)
same as setTimeout(), but repeats the execution of the function continuously.

clearTimeout()
clear the timeOut 

clearInterval()
clear the interval

*/

const res =()=>{
    console.log("setTime method exe");
};

var res1 =setTimeout(() => {
   res(); 
},1000);

console.log(res1)


var res2 =setInterval(() => {
    res()
}, 1000);
 
 console.log(res2)

 clearTimeout(res1)
 clearInterval(res2)
