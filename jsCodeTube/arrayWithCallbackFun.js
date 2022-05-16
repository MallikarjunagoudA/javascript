const arr1 =  [1,2,3,4,5,"mallu","venku",true,false];
const arr =[2,4,6,8,10];

//pop
console.log(arr);
arr.pop();
console.log(`pop ${arr}`);
console.log(arr);
//push
console.log(arr);
arr.push(12);
console.log(`push : ${arr}`);

//shift
console.log(arr);
arr.shift();
console.log(`shift : ${arr} `);
console.log(arr);


//unshift
console.log(arr);
arr.unshift(99);
console.log(`unshift : ${arr}`);


//every
console.log(arr);

//tredional function using

//1.
/*
function even(num){
    return num%2===0;
}
let IsEven = arr.every(even);
console.log('befor shift =>'+IsEven);

arr.shift();
 IsEven = arr.every(even);
console.log('after shift =>'+IsEven);

//2.
const even = function (num){
    return num%2===0;
}
let IsEven = arr.every(even);
console.log('befor shift =>'+IsEven);

arr.shift();
 IsEven = arr.every(even);
console.log('after shift =>'+IsEven);



//3.
const even =  (num) => {
    return num%2===0;
}
let IsEven = arr.every(even);
console.log('befor shift =>'+IsEven);

arr.shift();
 IsEven = arr.every(even);
console.log('after shift =>'+IsEven);


//4.
let IsEven = arr.every((e) =>{
    return e%2===0});
console.log('befor shift =>'+IsEven);

arr.shift();
 IsEven = arr.every((e) =>{
    return e%2===0});
console.log('after shift =>'+IsEven);
*/
//5.

let IsEven = arr.every((e) =>( e%2===0));
console.log('befor shift =>'+IsEven);

arr.shift();
 IsEven = arr.every((e) =>( e%2===0));
console.log('after shift =>'+IsEven);


//fill and filters in arrays

/*
=>note: most of the cases the 
        a. start Range: inclusive
        b. End Range:   Exclusive

=>Fill:
    ArrayName.Fill(1,2,3);
     a. 1=>filling value
     b. 2=>start Range
     c. 3=>end Range

=>Filter
 Note: whenever we are using the filter we will get the new array.
  

*/

//fill
//1.passing 1 param
let arr2 =[1,2,3,4,5,6,7,8,0];
console.log("we are in fill section");
console.log('filling one value');
const arr3 =arr2.fill(17); 
console.log(`arr2 after fill use only passing one parameter => ${arr3}`);

//2. passing 2 param
let arr4 =[1,2,3,4,5,6,7,8,0];
console.log("we are in fill section");
//console.log('filling one value');
const arr5 =arr4.fill(17,3);//here 3 will be a start range and its inclusive 
console.log(`arr2 after fill use only passing one parameter => ${arr5}`);

//3. passing 3 param
let arr6 =[1,2,3,4,5,6,7,8,0];
console.log("we are in fill section");
//console.log('filling one value');
const arr7 =arr6.fill(17,3,6);//here 3 will be a start range and its inclusive 
console.log(`arr2 after fill use only passing one parameter => ${arr7}`);



//Filter
let arr8=[44,55,67,88,44,77,44,89,78,656,32,98];
console.log('use of filter');
let arr9 =arr8.filter((e) =>(e!=44));
console.log(`after filter value=44 result array is => ${arr9}`);



//slice
/* 
let me add some interesting things regarding the slice
array.slice(1,2);
where 
    1 => start range
    2 =>end range

*/

//slice 

let arr10 =[1,2,3,4,5,6,7,8,9];
var res =arr10.slice(1,6);
console.log('slice of arr10 is =>'+res);

//splice
/*
let me tell someting on splice
array.splice(1,2,(3,4,5));
where 
    1 =>start range
    2 => count
    3,4,5... => value that replce 

*/
//splice
const res2 = arr10.splice(1,2,"abd","vk")
console.log('splice example '+ arr10);
console.log('splice example2 '+ res2);