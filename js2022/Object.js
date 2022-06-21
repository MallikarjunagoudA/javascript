// * ***object literal***

/*
* object literal is simply a key: value pair data struture.
* storing a variables and a functions together in one container.
* we can refer this as an objects.

*/

// * how to create an object

//* 1st way:

/* ******
const stdObj ={
    stdName : "venkaraddi",
    sem : 6,
    stdAddress : "somanakatti",
    getdata1 : function(){
        console.log(`name ${this.stdName} , sem is ${stdObj.sem} `);
    }
}

var a=stdObj.getdata()

console.log(a)//undefined.


//* 2nd Way. not use function keyword.

const stdObj ={
    stdName : "venkaraddi",
    sem : 6,
    stdAddress : "somanakatti",
    getdata (){
        console.log(`name ${this.stdName} , sem is ${stdObj.sem} `);
    }
}
var a=stdObj.getdata()



//* object in objct 

const stdObj ={
    stdName : {
        firstName:"venkaraddi",
        lastName: "Arahunasi"
             },
    sem : 6,
    stdAddress : "somanakatti",
    getdata (){
        console.log(`name ${this.stdName} , sem is ${stdObj.sem} `);
    }
}
// console.table(stdObj)
// console.log(stdObj)
// console.log(stdObj.stdName.lastName)


* What is this object?

* the definition of "this" object is that it contains the current context.
* This object can have different values depending on where it is placed.

// ex 1.
//  console.log(this);
// * it refers to the current context, the global window object.

//* ex 2
const fun =()=>{
    console.log(this);
}
fun();
 
//* for inside the function also the context will be where actually it is.

//* ex 3.
const stdObj ={
    stdName : {
        firstName:"venkaraddi",
        lastName: "Arahunasi"
             },
    sem : 6,
    stdAddress : "somanakatti",
    getdata (){
        console.log(`name ${this.stdName} , sem is ${stdObj.sem} `);
        console.log(this);
    }
}
stdObj.getdata();

//* for object, the context will be within that object only.


*/
