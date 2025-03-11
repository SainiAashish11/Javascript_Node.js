"use strict"; // treat all the java code as a newer version 
// Primitive Data Types                 : Primitive data types are immutable (cannot be modified) and stored directly in memory ( stack memory ).
// Non-Primitive (Reference) Data Types : Non-primitive data types are mutable and stored by reference (pointing to same address in heap memory).



// to show pop-ups 
//  alert( 3 + 3 ) // no output as pop-up '6', coz we are using Nodejs not browser and 'alert' as a built-in function is present as a window object in browser

let name = "Aashish Saini"  // string 
let id   = 12               // number/integer
let state = true            // boolean
let value = null            // standalone value/object ( jo apne aap mein as a data type bhi hai and ek value bhi )
let x     = undefined       
let sym   = Symbol("unique")               // use to represent 'uniqueness'
console.log(y)
let big = 1234567891234566;

console.log(typeof value)
console.log(typeof x)

// console.log(null == undefined);  // ✅ true  ('==' loose comparison, both treated as "empty" as both shows 'no value')
// console.log(null === undefined); // ❌ false ('===' strict comparison, different types)
