 // everything in js is obj 

 // todo: ways to initialyze the obj

 //1. using literal syntax : whenever we use the this, its create always a new object.

 var obj = {

    //prop 1
    //prop 2
    prop2: ""

 }

 //2. using the "new" keyword : this is the constructor format. and this we are not use often
 var objUsingNew = new Object();


 //3. using the "object.create()" factory method.
 var objUsingCreate = Object.create();



 // ? using the "." operator we can attaching the prop to obj.
obj.prop1 = 2;

// ? using bracket=> this will be helpful when our key name are not static or keyname are computed at run time
obj[2+3] =5;

obj['prop2'] ="hello";

// ? if I want fresh object without any inbuilt or default properties: will pass null for a create method.

var objUsingCreate = Object.create(null); //? this will we will use when we are create the DTO's.



// todo: copy object.

//? usign spread syntax:(shallow copy)
var copy1 = {...obj};


//? using for in looop(deep copy)
var copy2 ={};
for(var key in obj){
    if(obj.hasOwnProperty(key)){
        copy2[key] = obj[key];
    }
}


//? Json.parse + json.stringyfy (deep copy)
 var copy3 = JSON.parse(JSON.stringify(obj));

 //? lodash/unserscore.js
 var copy4 = _deepcopy(obj);


 //** deep copy:A deep copy means that all of the values of the new variable are copied and disconnected from the original variable.
 //** shall copy:A shallow copy means that certain (sub-)values are still connected to the original variable. 
 
  