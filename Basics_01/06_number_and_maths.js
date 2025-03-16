// initialization of number data type

const score = 400     // dynamic initialization
console.log(score);

// number converting to string
const balance = new Number(100)   // specific initialization
console.log(balance);            
console.log(balance.toString().length);  // converts number into string and then string properties are applicable
console.log(balance.toFixed(1));         // toFixed() provides output in given number decimals

// toPrecision()
//   - it returns a 'string' as output
const other_number = 123.896
console.log(other_number.toPrecision(4));      // gives precise value till given input number after doing round-off
const other_number_2 = 1123.856
console.log(other_number_2.toPrecision(3))     // exponential results : 1.12e+3 => 1.12 x 10^3
const other_number_3 = 0.000456
console.log((other_number_3).toPrecision(3));  // small number remains same in case of short round-off but in large round-off convert to exponential as (ne-10^)

// toLocaleString() : separate number with commas for good readibility
const amount = 1000056
console.log(amount.toLocaleString('en-IN'));   // ('en-IN') used for indian standards otherwise will be converts to american standards

// MAX_VALUE() of Number data type
console.log(Number.MAX_VALUE);
// MIN_VALUE() of Number data type
console.log(Number.MIN_VALUE);


// *******************************************//

// 'Maths' library
console.log(Math);  // output : Object [Math] {} - it's and object in javascript and {} means that it contains various methods/functions( abs(), pi, sqrt(), round(), etc)

console.log(Math.abs(-4.6));
console.log(Math.round(4.2));       // gives round-off 
console.log(Math.ceil(4.2));        // gives greatest value ( Greatest integer function )
console.log(Math.floor(4.2));       // gives smaller value  ( Smaller integer function )
console.log(Math.sqrt(36)) ;        // gives square root of number
console.log(Math.min(3,4,1,7,4));   // gives the minimun number from the array

console.log(Math.random())          // generates random value btw 0-1
console.log(Math.random() * 10 + 1) // gives value between (0 - 11)excluding outer values , upper value (10+1) par depend karti hai
console.log(Math.floor(Math.random() * 10 + 1))  // gives value as an integer between [1-10]
console.log(Math.floor(Math.random() * (max - min + 1)) + min)   // gives value between [min-max] inclusive

/*
 Step	Example Calculation:

-Math.random()	     0.823 (example)
-Multiply by 6	     0.823 * 6 = 4.938
-Apply Math.floor	 4
-Add min (5)	     4 + 5 = 9

*/