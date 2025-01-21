// Basic Comparisions

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// Avoid doing comparisions with null and undefined
// We priortize clean code
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true, because comparision and equality operators work differently
// comparision operator converts null into 0 then perform comparision, whereas equality operator (==) don't.

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined <= 0); // false


// Equality check ==
// It converts first and then compare
console.log("2" == 2); // true


// Strict check === 
// It checks for datatype without conversion
console.log("2" === 2); // false