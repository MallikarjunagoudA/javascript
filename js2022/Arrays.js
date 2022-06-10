// Arrays

//create a array.

var myFriends =['Hanamanth','Lokesh','sunil','vijja','Mint']

console.table(myFriends)

// to get the length

var arrLen =myFriends.length;

console.log(arrLen);

//traverse the array

for(var i=0; i<arrLen; i++){
    console.log(myFriends[i])
}
 //in es6 we have for in and for of
 
 //uing for in loop -- will give the index of the array

 for(var element in myFriends){
     console.log(element);
     console.log(myFriends[element])
 }

 //using for of  --will give the value of array.

 for(var ele of myFriends){
     console.log(ele);
 }




