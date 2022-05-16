
//example for the "for Loop"
console.log("for loop");
const arr =["a","b","v","d"];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//example for the "for of"
// mostly  used for the arrays
console.log("for of");
for(const n of arr){
    console.log(n);
}


//example for the "for in"
//max of the time used for the objects
var obj ={
    a:"hi",
    b:"helllo",
    c:"namaste",
    d:"chu cha"
};
//getting keys of obj
console.log("keys of obj");
for(const n in obj){
    console.log(n);
}

//getting values of obj
console.log("values of obj");
for(const n in obj){
    console.log(obj[n]);
}


