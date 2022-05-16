/*
for all the regular function calls, this points to the window object

*/

var user = {
    fn:"mallikarjun",
    ln:"Arahunasi",
    age:24,
    jobTitile:"se",
    getAge: () =>{
        console.log("line 12 "+ this);
        console.log(this.age);
        //regular function
        function sayHi() {
            console.log("line 16"+this);
        }
        sayHi();
    }
}

user.getAge();