let score = "33"

console.log(typeof score)
console.log(typeof(score))

// conversion to 'number' data type 
let value_in_number = Number(score)
console.log(typeof(value_in_number))
console.log(value_in_number)
/* 
// 33         => 33
// "33"       => 33
// "33abc"    => NaN ( not a number )
// null       => 0
// undefined  => NaN
// true/false => 1/0
*/

let a = 1
let b = " " 
console.log(a)
console.log(b)

let isBoolean1 = Boolean(a)
console.log(isBoolean1)
let isBoolean2 = Boolean(b)
console.log(isBoolean2)
/*
// 1         => true
// 0         => false
// ""        => blank
// "aashish" => true
*/
console.log("\n")  // to add newline

let n = true
console.log(n)
console.log(typeof n)

let isString = String(n)
console.log(isString)
console.log(typeof isString)

// true(boolean)  => true (string)
// false(boolean) => false (string)

/* 
Note : During data type conversions, remember that some
          conversions are not likely to occur as per our expectations
          so check their type and converted values to get clearity
*/