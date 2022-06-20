//promises, async and await

//let us create a some methods over here to understand

var one =()=>{
    return "its a one"
}
var two =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("its two");
        }, 3000);
    })
}
var three =()=>{
    return "its a three"
}

var callMe = async ()=>{
 var one1 =one();
 console.log(one1);

 var two2 =await two();
 console.log(two2);

 var three3 =three();
 console.log(three3);
}

callMe()