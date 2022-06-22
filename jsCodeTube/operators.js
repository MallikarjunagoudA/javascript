//discount value
var primeValue =1500;
var offerDiscount =75;

var currentPrice;
currentPrice =primeValue-(primeValue*offerDiscount/100) ;
console.log(`currentPrice: ${currentPrice}`);
let a =currentPrice*4;
console.log(a);


//hike in salary:

var currentSalaryPerMonth=25000;
var pf =3600;
let salForYear =currentSalaryPerMonth*12;
var pfForAYear=pf*12;
let hikeSalaryWithPf=35000;
let hikeExceptAsSalaryPermonth=hikeSalaryWithPf-pf;
let hikeAmountPerMonth=hikeExceptAsSalaryPermonth-currentSalaryPerMonth;
let hikeAmountForYear=hikeAmountPerMonth*12;

let calculteHikePercetage =hikeAmountForYear*100/salForYear;
let salaryPermonthAfterHike =((salForYear+hikeAmountForYear)-pfForAYear)/12;
console.log('calculteHikePercetage=> '+calculteHikePercetage+'%');
console.log('salary after hike=> '+ (salForYear+hikeAmountForYear));
console.log('salary per month after hike => '+salaryPermonthAfterHike);


