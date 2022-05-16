/*a project which uses the setInterval and setTimeOut
setInterval =>
        its mainly execute the fuction within the set time

setTimeOut =>
its mainly execute the fuction after the set time.

*/


var counter =document.querySelector(".counter");
var follower =document.querySelector(".followers");

var count =1;
setInterval(() => {
    if(count <1000){
        count++;
        counter.innerHTML=count;
    }
}, 1);

setTimeout(() => {
    follower.innerHTML ="followers on soloLearn"
}, 17000);