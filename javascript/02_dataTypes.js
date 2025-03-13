"use strict"; // treat all the java code as a newer version 

/*
Different Data Types
   -Primitive Data Types                 : Primitive data types are 'immutable' (cannot be modified in terms of value or reassignment) and stored directly in memory ( stack memory ).
   ( String, Number, Boolean, null, undefined, Symbol, BigInt )
   -Non-Primitive (Reference) Data Types : Non-primitive data types are 'mutable' and stored by reference (pointing to same address in heap memory).
   ( Arrays, objects, Functions )
*/

/*
// to show pop-ups 
//  alert( 3 + 3 ) // no output as pop-up of '6', coz we are using 'Nodejs' not browser and 'alert' as a built-in function is present as a window object in browser only
*/

let name = "Aashish Saini"    // string 
let id   = 12                 // number/integer
let state = true              // boolean
let big = 1234567891234566;   // big integer numbers 

let a = 2.3                   // floating numbers
console.log(a)

let sym   = Symbol("unique")  // use to represent 'uniqueness' to data
console.log(sym)

let value = null              // standalone value/object ( jo apne aap mein as a data type bhi hai and ek value bhi )
let x     = undefined         // not a value nor an object in itself 
console.log(typeof value)
console.log(typeof x)

// console.log(null == undefined);  // ✅ true  ('==' loose comparison, both treated as "empty" as both shows 'no value')
// console.log(null === undefined); // ❌ false ('===' strict comparison, different types)

/*
What Does "Dynamically Typed" Mean?
-Variables do not have fixed types—their types are determined at runtime.
-You don’t need to declare the type of a variable explicitly.
-A variable can change types during execution.

Statically typed languages (like C, Java, TypeScript, Rust)
-Require you to declare variable types explicitly.
-Type checking happens at compile time, preventing type mismatches.

*/
