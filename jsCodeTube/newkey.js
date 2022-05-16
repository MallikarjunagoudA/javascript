//creating the functional object

var user =function (fn,courseCount){
this.fn = fn;
this.courseCount =courseCount;
this.getCourseCount =() =>{
    console.log(`the course count is ${this.courseCount}`);
};
};

//here we are not using new

 var malliakrjun = user("mallikarjun",4);
 console.log(`the undefined for not using new is => : ${malliakrjun}`);

 //here we are  using new
 var malliakrjun1 =new user("mallikarjun1",9);
 var malliakrjun2 = new user("mallikarjun2",40);
 console.log(`the undefined for  using new is => : ${malliakrjun1}`);
 console.log(`the undefined for  using new is => : ${malliakrjun2}`);

 //use of prototype:
console.log("use of prototype");
 user.prototype.getfn =() =>{
     console.log(`my fn is : ${this.fn}`);
 }
 malliakrjun1.getfn();
 malliakrjun2.getfn();
 ///checking the property having or not

 console.log(malliakrjun1.hasOwnProperty("fn"));


 