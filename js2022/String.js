// * Escape Character.
// * finding a String in a String.
// * Searching for a String in a String.
// * Extracting String Parts.
// * Replacing String Content.
// * Extracting String characters.
// * other useful methods."

var stringValue ='my best friend is "mint" and also bestie';
/******

// "* Escape Character.

var stringValue ='my best friend is "mint" and also bestie';

var stringValue1 ="my best friend is 'mint'";

var stringValue2 ="my best friend is \"mint\" ";


// * finding a String in a String.

//indexOf("substring", from Index)

var index =stringValue.indexOf("b",7)

//lastIndexOf("substring",from Index)

var index =stringValue.indexOf("b",10)



//search()
// (method) String.search(regexp: string | RegExp): number (+1 overload)
// Finds the first substring match in a regular expression search.

// @param regexp — The regular expression pattern and applicable flags.
//returns the position of the substring.

//search() can't take second start position as an argument


var searchval =stringValue.search("mint");

console.log(searchval)





// * Extracting String Parts.

// 3 methods used to extract the string.

// 1. slice(start, end)
// 2.subString(start, end)
// 3.substr(start, length)

// * 1. slice(start, end)

// * slice() extract a part of a string and returns the extracted part in a new string.
// * the method takes two parrameters. 
//  1. start position 
//  2. end position(end not included)

//* if the position is out of range means returns the empty string.

// * the original array will not change.

//* accept the negative index
var substris =stringValue.slice(0,5) 
console.log(substris)


var substris1 =stringValue.slice(100,105)
console.log(substris1)

// * - means from last, and -2 menas except last two character.
var substris11 =stringValue.slice(7,-6)
console.log(substris11)

//challenge.

// * display only 100 character of a string like the one used in twitter ?

var myLengthStr ="hello hi friends how are you all, I came to banglore from my village at shart 11:15. from there i catch the metro and come to jayaprakash metro station."
console.log(myLengthStr.length)

var myLengthStrCutOff =myLengthStr.slice(0,150);
console.log(myLengthStrCutOff.length);//150



// * Substring() method.

// * substring is similer to the slice()
// * difference is that substring() can't accept the negative indexes.

var substris =stringValue.slice(0,5) 
console.log(substris)


var substris1 =stringValue.slice(100,105)
console.log(substris1)


var substris11 =stringValue.slice(7,-6)
console.log(substris11)



// * substr() method

// substr(from: number, length?: number): string
// The starting position of the desired substring. The index of the first character in the string is zero.


// Gets a substring beginning at the specified location and having the specified length.

// @deprecated — A legacy feature for browser compatibility

var substrmethod =stringValue.substr(3,6)

console.log(substrmethod)

var lastFiveChar =stringValue.substr(-5);
console.log(lastFourChar)



// * string.prototype.replace()

// replace("search_for","replace_with");

// points to rememmber
// the replace() method dows not change the string.
// it returns the new string
// by default, the replace method replaces only the first mathch. and its a sase sensitive.

var newString =stringValue.replace("mint","soulmate");

console.log(newString);
console.log(stringValue)


// * Extracting String Parts.

// 1.charAt(position)
// 2.charCodeAt(position)
// 3.property access [ ]

// * 1.charAt(position)

//  returns the char at the specified position.

var val =stringValue.charAt(5);
console.log(val);

var strEx = "hello dear";
let strExfind =strEx.charAt(0)
console.log(strExfind)

let lastchar = strEx.charAt(strEx.length-1)
console.log(lastchar)


// * charAtCode()

// this will return the unicode of the character.

let aString ='hello';
let unicodeEx = aString.charCodeAt(0)
console.log(unicodeEx)


// challenge:

// Enter the unicode of the last char of the string.

let givenString = 'hello world';
let lastUnicode =givenString.charCodeAt(givenString.length-1);
console.log(lastUnicode)





//useful string methods.

//  * str.toUpperCase()
//  * str.toLoweCase()
//  * str1.concat(str2)
//  * str.trim()

// * str.split()

//   Converting a string to an Array.
//   using split() method.

let txt ="a,b,c,d,|e,f, g,h";

var arr =txt.split(","); //split on commo
var arr1 =txt.split(" "); // split on space
var arr2 =txt.split("|"); // split on pipe
// console.log(txt) 
// console.log(arr)
// console.log(arr1)
// console.log(arr2)

*/


