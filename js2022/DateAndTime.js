// * js Date objests represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 jan 1970 utc.
// * date objects are created with new dates constructor.
// * in js 4 ways to create new date obj.

/**** 
// 1. new Date()
// 2. new Date(year,day,hour,minutes,seconds,millisonds)
// 3. new Date(milliseconds)
//we can't avoid month section
// 4. new Date(date string)



//new Date() method.

// console.log(new Date()) //Date Mon Jun 20 2022 15:49:12 GMT+0530 (India Standard Time)
// console.log(new Date().toLocaleString()) //20/06/2022, 15:51:00
// console.log(new Date().toString()) //Mon Jun 20 2022 15:52:07 GMT+0530 (India Standard Time)

// * Date.Now() method

// returns the numeric value corresponding to the current time.
// the number of milliseconds elapsed since jan 1, 1970 00:00:00 UTC

console.log(Date.now()) //1655720723051


// * new Date(year, month , ...):

// 7 numbers specify Year, month,day, hour, minutes, seconds,milliseconds.
// Note: jan is 0. and dec is 11. js counts months from 0 to 11.

let dateis =new Date(2022,06,20,16,11,10,120)
// console.log(dateis)

*/ 

var currDate =new Date();

// console.log(currDate.getDate())
// console.log(currDate.getDay())
// console.log(currDate.getMinutes())
// console.log(currDate.getFullYear())
// console.log(currDate.getMilliseconds())
// console.log(currDate.getMonth())
// console.log(currDate.getTime())
// console.log(currDate.getTimezoneOffset())

//same we have set methods.
