// Arrays


// * Traversal of an array
// * Searching and filter in an array.
// * How to sort and compare an array.
// * How to insert, add, Replace and Delete elements in an array(curd).
// * Map(), Reduce(), Filter().

//create a array.

var myFriends =['Mint','Hanamanth','Lokesh','sunil','vijja','Mint']

var milage =[65,34,45,56,61,78,89,90];

var numArr =[1,3,44,55,11,33]
/*****************************
console.table(myFriends)

// to get the length

var arrLen =myFriends.length;

console.log(arrLen);

//traverse the array

for(var i=0; i<arrLen; i++){
    console.log(myFriends[i])
}
 //in es6 we have for in and for of
 
 for(var element in myFriends){
     console.log(element);
     console.log(myFriends[element])
 }

 //uing for in loop -- will give the index of the array



 //using for of  --will give the value of array.

 for(var ele of myFriends){
   //  console.log(ele);
 }


 //array.prototype.foreach()

 myFriends.forEach(function(ele,index,arr){
     console.table(ele)
     console.assert(!(ele=="vijja"),"say hi")
     console.log(index)
     console.table(arr)
 })


 // the same using the fat arrow function.
 myFriends.forEach((ele,index,arr)=>{
    console.table(ele)
    console.assert(!(ele=="vijja"),"say hi")
    console.log(index)
    console.table(arr)
})




// 2.. searching and filter in array.
// indexOf(), lastIndexOf() and includes() will used for search
// * a... array.prototype.indexOf()

// * Returns the first or least index of an element within the array equal to an element, or -1 if none is found. 
// * It search the element from the 0th index number.

var myBestieIndex = myFriends.indexOf("Mint")

console.log(myBestieIndex);
//here mint is at 0th and 5th index but its returns least one.



// * b... Array.prototype.lastIndexOf()
// * Returns the last  index of an element within the array equal to an element, or -1 if none is found. 
// * It search the element from the last index number.

var myBestieIndex = myFriends.lastIndexOf("Mint")
var myIndex = myFriends.lastIndexOf("Mallikarjun")
console.log(myBestieIndex);
console.log(myIndex);



// * c... Array.prototype.Includes()
// * returns the boolean true or false
// * search from the forword.

var check =myFriends.includes("Mint")
var check2 =myFriends.includes("mint")
console.log(check)
console.log(check2)




// * d... Array.prototype.Find()
// * used for search
// * used for search with filtration.
// * It returns the found element in the array if some element satisfied the testing function. or returns the Undefinded. 
// * Only problem that it returns the single value.

var t=milage[0];
var least=milage.find((ele,index,arr)=>{
    if(t>ele){
        t=ele;
    }
    return t;
})
console.log(least)

//not yet clear.

// * e... Array.prototype.FindIndex()

//not yet clear.



// **CURD operations on Array**

// * f.. Array.prototype.Push()
// *The push() method adds one or more elelmetns to the end of an array and returns the new length of the array.

var num =[1,2,3,4,7,8]

var count =num.push(11,44,33,22)

console.log(`changed length ${count} and array is ${num}`)



// * f.. Array.prototype.Unshift()
// *The push() method adds one or more elelmetns to the begining of an array and returns the new length of the array.

var num1 =[1,2,3,4,7,8]

var count =num1.unshift(11,44,33,22)

console.log(`changed length ${count} and array is ${num1}`)


// * g.. Array.prototype.pop()
// * The pop() method removes the last element from an array and returns the that  element.
// * This method changes the length of the array.
// * Undefined is returned if the array is not modified.

var numArr =[1,3,44,55,11,33]

var popped =numArr.pop() //33

console.log(popped)


var numArr1 =[]

var popped1 =numArr1.pop() //undefined

console.log(popped1)



// * h.. Array.prototype.Shift()
// * The Shift() method removes the first element from an array and returns the that  element.
// * This method changes the length of the array.
// * Undefined is returned if the array is not modified.


var shiftedEle= numArr.shift()

console.log(shiftedEle+' array is  '+ numArr);



// * challenges:

// 1. what is the return value of the splice method
// 2. update march to March (update)?
// 3. deleter June from an array?
// 4. add dec at the end of an array.

//these needs to done with one method.

// **** i.. Array.prototype.splice()  ****

// * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// * @param start — The zero-based location in the array from which to start removing elements.
// * @param deleteCount — The number of elements to remove.
// * @returns — An array containing the elements that were deleted.


// *** myArray.splice('start_index', 'No_of_elements_to_delete','element_needs_to_be_add');

const months =['jan','march','april','june','july']

//sol4
// var spliceinsertRereturned =months.splice(5,0,"dec")
//console.log(spliceRereturned,months);

//if i want to add at the end 
var spliceinsertRereturned =months.splice(months.length,0,"dec")
console.log(spliceRereturned,months);

//sol1
//// * @returns — An array containing the elements that were deleted.

//sol2
 
const month =['jan','march','april','june','july']
var spliceUpdate =month.splice(month.indexOf('march'),month.indexOf('march'),'March')
//console.log(month);

//sol3

var spliceDelete =month.splice(month.indexOf('june'),1)
//var spliceDelete =month.splice(3,1)
// console.log(month)
// console.log(spliceDelete)


   
// * Array.prototype.map()



* let newArray =arr.map(caback(currentValue[,index[,array]]{
    	return element for newArray, after executing something
  }[,thisArg];


// * returns a new array containg the results of calling function on every element in this array.
// * It returns a new array without mutating original array.


//example 1

const evenNum=[2,4,6,8,10,12,14,16];

var moreThenTen =evenNum.map((currentValue,index,arr)=>{
return currentValue>10
})
// console.log("original",evenNum); // [ 2, 4, 6, 8, 10, 12, 14, 16 ]
// console.log("newArr",moreThenTen);//[ false, false, false, false, false, true, true, true ]


// * challenges

// 1.. find the square root of the each element in an array
// let arr =[25,36,49,64,81];

// 2. multiply each element by 2 and return only those elements which are greater than 10?
// let arr =[2,3,4,6,8,5];

//challenge 1 and example 2

let arr1 =[25,36,49,64,81];

const squareRootArray =arr1.map((cv,i,arr)=>
    Math.sqrt(cv)
)

// console.log("original",arr1); 
// console.log("newArr",squareRootArray);

//challenge 2 and ex 3

let arr2 =[2,3,4,6,8,5];

const res =arr2.map((cv,i,arr)=>  cv*2 ).filter((cv,i,arr)=>cv>10)

// console.log("original",arr2); 
// console.log("newArr",res);

// ****Reduce Method....
// * Flatten an array means to convert the 3d or 2d array into a single dimensional array.
// * The reduce() method executes a reducer function (that you provide) on each element of the array. resulting in a single output value.
// * The reducer function takes four arguments:

// +accumulator
// +current value
// +current Index
// +Source array

// * Reduce will use when required the sum or avg of the array.

let myAvgArray = [3,4,5,6];

const mySum =myAvgArray.reduce((accumulator, currentValue,index,array)=>{
      return  accumulator += currentValue;
})
// console.log(mySum)
// console.log(mySum/myAvgArray.length)

const res2 =arr2.map((cv,i,arr)=>  cv*2 ).filter((cv,i,arr)=>cv>10).reduce((acc,cv,i,arr)=> acc+=cv)
// console.log(res2);

//at first accumulator will contains the value none.

const mySum1 =myAvgArray.reduce((accumulator, currentValue,index,array)=>{
    return  accumulator += currentValue;
},7)
console.log(mySum1)

//Here 7 will assign to the accumulator first and next value will operate as per requirement.

// To get the Flatten array from 2d to single d we need to do cancat.

var twoDarr =[
    [1],
    [2],
    [3],
    [5],
    [9]]

    const flatArr =twoDarr.reduce((acc,cv)=> acc.concat(cv))
    console.log(twoDarr)
    console.log(flatArr)




    // * Filter()

// * Returns the elements of an array that meet the condition specified in a callback function.
// * @param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
// * @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

   let myAvgArray = [3,4,5,6];
   var val = myAvgArray.filter((cv,i,arr)=>{
       return (cv%2==0)
   })
   console.log(val)

       */