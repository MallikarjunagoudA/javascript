/* Brife Notes:
*  In JavaScript, almost "everything" is an object except primitive
* A primitive value is a value that has no properties or methods.
* A JavaScript object is a collection of named values

* create a js objects:
Create a single object, using an object literal.
Create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create().
 */

 // todo: ways to initialyze the obj
 //1. using literal syntax : whenever we use the this, its create always a new object.
 const obj = {

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
//  var copy4 = _deepcopy(obj);


 //** deep copy:A deep copy means that all of the values of the new variable are copied and disconnected from the original variable.
 //** shall copy:A shallow copy means that certain (sub-)values are still connected to the original variable. 
 


 //todo: delete the object propery

 //** delete objectName.propName : this is evaluated at run time*/ 
//** to delete prperties from the object */
 delete obj.prop2; //fitst option
 delete obj['prop1'];// sec option
 delete obj['prop2'+5];// third option

 //? to interate all over the  enumerable keys of an object key
// var keysArr = Object.keys(Obj);

 //? to interate all over the  enumerable values of an object key
//  var keysArr = Object.values(Obj);

//? to Hide some props or to not allow a specific prop for enumerable or iterable we will define property as enumerable as false.
// Object.defineProperty('non-enumerated-prop1',{
//     Enumerable:false,
//     writeable:false //todo: only available for read purpose
// }); 
obj['non-enumerated-prop1'] ="hello";


 //? to get all the entries like dict we using entries
 var keyValuePairs = Object.entries(obj);

 /**
 
 [
    ["prop1", 0] //each subarray will only contain 2 items
    ["prop2", 1]
    ["prop3", 2]
 ]

 */

 // ** lets take we have the keyvaluesPairs okay, now I want to create an object from it.// browsers get updated after 2019 will have this feature.
var reconstructedObjFromKeyValuePair = Object.fromEntries(keyValuePairs);


//todo: demo code.

//** create of object literal type */
const Student = {
    Name: "Mallikarjunagoud",
    USN: "4bd16cs890",
    Branch: "computer science",
    Status: "single haha"
}

//** create of object using literal  type, create and use later */
const Student2 ={};
    Student2.Name="Mallikarjunagoud";
    Student2.USN= "4bd16cs890";
    Student2.Branch= "computer science";
    Student2.Status= "single haha";

//** create of object using new  type */
const Student1 =new Object();
    Student1.Name="Mallikarjunagoud";
    Student1.USN= "4bd16cs890";
    Student1.Branch= "computer science";
    Student1.Status= "single haha";


// display in console:

console.log(`${Student.Name} is the stuent from ${Student.Branch}`)

//making use in web app:
alert("hello");
document.getElementById("objParagrap").innerHTML = Student.Name + " is from " + Student.Branch + " barnach,has Usn " + Student.USN + " and he is still " + Student.Status;