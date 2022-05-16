var user ={
    firstName: "abd",
    lastname:"vk",
    userid:"abdvk",
    role:"batsman",
    loginCount:32,
    runsInodi:[],
    odiruns:0,
   
    odiScore:function (runs){
         this.runsInodi.push(runs);
        //this.totalodiruns +=this.totalodiruns + runs;
        // this.totalOdiPlayed();
    },
    totalOdiPlayed:function () {

        console.log(`vk played ${this.runsInodi.length}  oDIs`);
        return this.runsInodi.length;
    },
   
    info: function(){
        console.log(`details are as below: \b firstname => ${this.firstName} \b lastname =>${this.lastname} \b odiruns =${this.totalodiruns()}`);
    },
};
user.odiScore(43);
user.odiScore(53);
user.odiScore(63);
user.odiScore(73);
user.odiScore(83);
user.odiScore(49);
user.odiScore(47);
//console.log(user);
console.log(user.totalOdiPlayed());
//console.log(user.totalodiruns());
//console.log(user.info());

var total =user.runsInodi.forEach(element => {
    console.log(element);// element; //+=element;
});
// var a=0;
// let sum =(e)=>{
//    a =a+e;
//    return a;
// }
console.log(total);
