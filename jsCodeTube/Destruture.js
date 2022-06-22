//destrutre of things

//destruture of arrays

var user =["mallijruna", 6,"se","soloZone"]

//destrure of an array is happening here 
//ok, one thing we notice here that we can give any name here but the number of the values inside the array are same while we are destrutureing

var [name,age,position,company] =user;
console.log(`name is ${name} of age ${age} having a position ${position} in a company called ${company}`);



//destruture of a object
//yeah, what we notice here is we need to give the same name which an object prop having while we are destrure those.

var objOfUser ={
    name:"gana",
    age:8,
    position:"se",
    company:"inube"
}

var {name,age,position1,company} =objOfUser;
console.log(`name is ${name} of age ${age} having a position ${position} in a company called ${company}`);
