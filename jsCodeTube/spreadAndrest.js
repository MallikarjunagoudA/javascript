//spread => destruture a array into indivisual elements
//rest => make a array by a indivisual elements

//spread
console.log("spread");
const sumOne =(a,b) =>{
    return a+b
}
var a=[1,2,3,4]
//here usually we use
console.log(a[0],a[1]);
//but by using the spred we can pass the elements and remaining elements in the array are ingnore by the function.
console.log(sumOne(...a));

console.log("rest");
//rest
const sumTwo =(...args)=>{
    console.log(args);
    var sum=0;
    for (const arg of args) {
        sum+=arg;
    }
    return sum;
}
console.log(sumTwo(1,2,3,4,5,6));


console.log("rest advance");
//rest advance
const sumThree =(a,b,...args)=>{
    console.log(args);
    var multi =a*b
    var sum1=0;
    for (const arg of args) {
        sum1+=arg;
    }
    return [multi,sum1];
}
console.log(sumThree(9,2,3,4,5,6,8,9));
