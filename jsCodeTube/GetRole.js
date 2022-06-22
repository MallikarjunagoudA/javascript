console.log('hi here will we get the things on function basics');

//1.
function GetRole (name, role){
    switch(role){
        case "admin": 
        return `User ${name} is Admin`;
        case "admin1": 
        return `User ${name} is Admin1`;
        case "admin2": 
        return `User ${name} is Admin2`;
        default:
        return `User ${name} is detault`;
    }
}

var getrol =GetRole("Malliakrjun","admin");
console.log(getrol);


//2 
const GetRole1= function  (name, role){
    switch(role){
        case "admin": 
        return `User ${name} is Admin`;
        case "admin1": 
        return `User ${name} is Admin1`;
        case "admin2": 
        return `User ${name} is Admin2`;
        default:
        return `User ${name} is detault`;
    }
}

var getrol1 =GetRole1("Malliakrjun","admin1");
console.log(getrol1);



//3
const GetRole2 =   (name, role) => {
    switch(role){
        case "admin": 
        return `User ${name} is Admin`;
        case "admin1": 
        return `User ${name} is Admin1`;
        case "admin2": 
        return `User ${name} is Admin2`;
        default:
        return `User ${name} is detault`;
    }
}

var getrol2 =GetRole2("Malliakrjun");
console.log(getrol2);
 