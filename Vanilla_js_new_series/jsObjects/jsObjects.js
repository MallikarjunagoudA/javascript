 // everything in js is obj 

 // todo: ways to initialyze the obj

 //1. using literal syntax : whenever we use the this, its create always a new object.

 var obj = {

    prop1:1,
    prop2:2,
    prop2: "hello"

 }

 console.log(obj.prop1);

 //2. using the "new" keyword : this is the constructor format. and this we are not use often
 var objUsingNew = new Object();


 //3. using the "object.create()" factory method.
 var objUsingCreate = Object.create(null);



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
 
  
 //**  day 2 */

 //todo: delete the object propery

 //** delete objectName.propName : this is evaluated at run time*/ 
//** to delete prperties from the object */
 delete obj.prop2; //fitst option
 delete obj['prop1'];// sec option
 delete obj['prop2'+5];// third option

 //? to interate all over the  enumerable keys of an object key
var keysArr = Object.keys(Obj);


//? to Hide some props or to not allow a specific prop for enumerable or iterable we will define property as enumerable as false.

Object.defineProperty('non-enumerated-prop1',{
    Enumerable:false,
    writeable:false //todo: only available for read purpose
}) 

obj['non-enumerated-prop1'] ="hello";


 //? to interate all over the  enumerable values of an object key
 var keysArr = Object.values(Obj);


 //? to get all the entries like dict we using entries

 var keyValuePairs = Object.entries(obj);

 /**
 
 [
    ["prop1", 0] //each subarray will only contain 2 items
    ["prop2", 1]
    ["prop3", 2]
 ]

 */

 // ** lets take we have the keyvaluesPairs okay, now I want to create an object from it.

var reconstructedObjFromKeyValuePair = Object.fromEntries(keyValuePairs);
// browsers get updated after 2019 will have this feature.

function Iamclicked(){
    document.getElementById("objVal").setAttribute(obj.prop2);
}