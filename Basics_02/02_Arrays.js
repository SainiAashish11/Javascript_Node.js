const marvel_heroes = ["thor" , "Ironman", "spiderman"]
const dc_heroes     = ["superman", "flash", "batman"]

// concat() method : merges two or more arrays and returns a new array without modifying the original ones
// works only with arrays
// does not modify original arrays
// multiple arguments are accepted : arr1(arr2 , arr3, arr4, .....)
const arr = marvel_heroes.concat(dc_heroes)
console.log(arr);


// spread() operator : expands an array (or iterable) into individual elements. It creates a shallow copy of an array
const new_heroes = [...marvel_heroes , ...dc_heroes]
console.log(new_heroes);

/* Note :
 ---We can pass many number of arguments inside spread operator

 When to Use What?
 ---Use spread (...) when working with arrays and objects, or when you need a shallow copy.
 ---Use concat() when merging arrays dynamically or when working in an immutable pattern.
*/

// flat() : it returns single array with all values inside it

const arr_into_arr = [1, 2, 3, [4,5], [6, 7, [8, 9, 10]]]
console.log(arr_into_arr.flat(Infinity));    // 'Infinty' handles the 'depth(array ke andar array)' of the array

// Array.from : any datatype conversion into Array

console.log(Array.from("Aashish Saini"));    // all alphabets will come into an array
const my = console.log(Array.from({name: "Aashish"}));  // Ouput : [] , empty array untill and unless we'll not provide specific info that which array we want i.e. 'keys' ka array ya fir 'values' ka array

// Array.of : converts elements into Array

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1, score2, score3));