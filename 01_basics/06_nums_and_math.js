const score = 400
console.log("score = ",score); // 400
console.log(typeof score); // number

const balance = new Number(100)
console.log("Balance = ",balance); // [Number: 100]
console.log(typeof balance); // object

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const otherNumber =123.8966
console.log("Fixed =",otherNumber.toFixed(2)); // 123.87
console.log("Precision =",otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000
console.log("Locale String = ",hundreds.toLocaleString('en-IN')); // 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++
console.log("+++++++++++++ Math +++++++++++++++++++++++++++++")

// console.log(Math); // Object
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

// This will return random number between min max range included

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)