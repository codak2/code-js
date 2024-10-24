// =============== Type Conversion ===============
console.log("=============== Type Conversion ===============");

let score = "10"
let score2 = "10xyz"
let score3 = null
let score4 = undefined
let score5 = true

console.log(typeof score); // method 1 
// console.log(typeof(score)); // method 2 

let valueInNumber = Number(score); // "10" => 10
let valueInNumber2 = Number(score2); // "10xyz" => NaN
let valueInNumber3 = Number(score3); // null => 0
let valueInNumber4 = Number(score4); // undefined => NaN
let valueInNumber5 = Number(score5); // true => 1

console.log(typeof valueInNumber, valueInNumber);
console.log(typeof valueInNumber2, valueInNumber2);
console.log(typeof valueInNumber3, valueInNumber3);
console.log(typeof valueInNumber4, valueInNumber4);
console.log(typeof valueInNumber5, valueInNumber5);


// Conversion to Number
// original value       converted value     type
// "10"                  10                 number
// "10xyz"               NaN                number
// null                  0                  number
// undefined             NaN                number
// true/false            1/0                number




let isLoggedIn = 1
let isLoggedIn2 = ""
let isLoggedIn3 = "abc"
let isLoggedIn4 = null
let isLoggedIn5 = undefined

console.log(typeof isLoggedIn, isLoggedIn);

let valueInBoolean = Boolean(isLoggedIn)
let valueInBoolean2 = Boolean(isLoggedIn2)
let valueInBoolean3 = Boolean(isLoggedIn3)
let valueInBoolean4 = Boolean(isLoggedIn4)
let valueInBoolean5 = Boolean(isLoggedIn5)


console.log(typeof valueInBoolean, valueInBoolean);
console.log(typeof valueInBoolean2, valueInBoolean2);
console.log(typeof valueInBoolean3, valueInBoolean3);
console.log(typeof valueInBoolean4, valueInBoolean4);
console.log(typeof valueInBoolean5, valueInBoolean5);



// Conversion to Boolean
// original value       converted value     type
// 1/0                  true/false          boolean
// ""                   false               boolean
// "abc"                true                boolean
// null                 false               boolean
// undefined            false               boolean


let myNumber = 10
let myNumber2 = 0
let myNumber3 = null
let myNumber4 = undefined
let myNumber5 = true

let valueInString = String(myNumber)
let valueInString2 = String(myNumber2)
let valueInString3 = String(myNumber3)
let valueInString4 = String(myNumber4)
let valueInString5 = String(myNumber5)


console.log(typeof valueInString, valueInString);
console.log(typeof valueInString2, valueInString2);
console.log(typeof valueInString3, valueInString3);
console.log(typeof valueInString4, valueInString4);
console.log(typeof valueInString5, valueInString5);


// Conversion to String
// original value       converted value     type
// 10                   10                  string
// 0                    0                   string
// null                 null                string
// undefined            undefined           string
// true                 true                string



// =============== Operations ===============
console.log("=============== Operations ===============");

let value = 10
let negValue = -value
console.log(negValue);

console.log(2+4);
console.log(2-4);
console.log(2*4);
console.log(2**4);
console.log(2/4);
console.log(2%4);

let str1 = "Hello"
let str2 = " user"

console.log(str1 + str2); // Hello user

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122 // every element treated as string
console.log(1 + 2 + "2"); // 32 // calculate numbers first and convert to string

console.log((2+3) * (4 / 3)); // code readability by use of ()

console.log(+true); // 1 
console.log(+""); // 0

let a, b, c

a = b = c = 2+4

let gameCounter = 100
gameCounter++
++gameCounter
console.log(gameCounter);


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion