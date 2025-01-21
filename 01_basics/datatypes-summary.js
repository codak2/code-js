//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// Symbol used to make things unique even we pass same values
console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

/*

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

// https://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++++++++++++++++++++
/* 
datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) -> Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

Stack (Primitive), Heap (Non-Primitive)

*/ 


let myName = "ABC"

let mySecondName = myName
mySecondName = "XYZ"

console.log(myName);
console.log(mySecondName);



let personOne = {
    id: 123,
    name: "ABC",
    email: "abc@google.com"
} 

let personTwo = personOne;

// before changing
console.log(personOne);
console.log(personTwo);

personTwo.name="XYZ"

// after changing
console.log(personOne);
console.log(personTwo);

