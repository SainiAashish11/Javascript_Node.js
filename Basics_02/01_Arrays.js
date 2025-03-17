// Arrays : Data structure which stores various data types in a single variable
// It is resizable as well as mutable( values can be modified )
// Array indexing starts from '0'
// shallow copy(same reference of outer part only) : new array will also take reference to first array and changing one will modify other as well
// deep copy( fully copied separate version) : both the arrays are different in terms of reference

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktimaan" , "Shaka-laka- BoomBoom"]

// Accessing Array elements
// console.log(myArr[3]);

// way of array initialization
const myArray = new Array(1,2,3,4,5,6,7)
console.log(myArray);

// Array Methods

// push() : adds the given value inside the array at the end

myArr.push(8 , 2)    // value arguements can be added in push() as per the need
console.log(myArr);

// poo() : removes only the last value from the array

myArr.pop()
console.log(myArr);

// unshift() : adds the element at the start

myArr.unshift(9)
console.log(myArr);

// shift() : removes the element from the start

myArr.shift()
console.log(myArr);

// includes() : it tells whether value is present or not
console.log(myArr.includes(5));

// indexOf : tells the index of value in given array

console.log(myArr.indexOf(5))  // gives -1 when doesn't exists in the 'array'

//  .join : changes the data type of array in 'string'

const newArr = myArr.join()
console.log(newArr);           // 'newArr' => string datatype

// slice and splice
