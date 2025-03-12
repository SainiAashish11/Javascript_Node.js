let value = 3
let negValue = -value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**3)
console.log(2%3)

// For any a % b, if a < b, the result is 'a' itself

// Concatenation technique
console.log(1 + 1)         // number + number
console.log(1 + "1")       // number + string
console.log("1" + 1)       // string + string
console.log("1" + "1")     // string + string
//  if 'string' first then treated every other values as string

//  if any other operation is first then it executes and then concatenate wth string if any
console.log(1 + 2 + "1")   // 1 + 2 = 3 ==> 3 + "1" = 31

// Note : use 'parenthesis' for good code readability

console.log( (2 + 3) * "4"  + 3) // (2 + 3)= 5 ===> 5 * "4" = 20 ===> 20 + 3 = 23
// here "4" is converted to number form string and then multiplied by 5

// ********************************************//

console.log( + true)   // 0 + true(1)  = 1
console.log( + false)  // 0 + false(0) = 0
console.log( + " ")    // 0 + " "(0)   = 0

// ++++++++++++++++++++++++++++++++++++++++++++//

// postfix and prefix precedence
let counter = 100
console.log(counter++);
console.log(counter)

let count = 100
console.log(++count);
console.log(count)
// Use Cases:
// Postfix (x++) is useful when you need the current value before updating.
// Prefix (++x) is useful when you need the incremented value immediately.

// ********************************************//

console.log(null > 0)   // 0 > 0    => false
console.log(null == 0)  // loose equality mein, null == undefined => false
console.log(null >= 0)  // 0 >= 0   => true
// Note : In comparisons, null is being converted to number first then checked
//        In equality check, null == undefined in 'loose equality' check

console.log( "2" == 2 )  // loose check, conversion of string to number and 2 == 2
console.log( "2" === 2 ) // strict check, no conversion hence data types are different