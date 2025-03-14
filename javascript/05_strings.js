const name = " Aashish "  // dynamic string initialization

let game_Name = " Saini "

// concatenation
console.log("my name is" + name + "and my game name is " + game_Name)  // using multiple string concatenation
console.log(`my name is ${name} and my game name is ${game_Name}`)     // using 'backtick'

// string initialization

let new_Game_Name = new String('ash-khandelwal')

// prototyping/functions/methods
console.log(new_Game_Name[2])
console.log(new_Game_Name.__proto__)              // to give access to object's prototype or which function/method, object can access
console.log(new_Game_Name.length)                 // to finid the length of the 'string'
console.log(new_Game_Name.toUpperCase())          // to convert string in 'uppercase'
console.log(new_Game_Name.charAt(2))              // to find the 'specific character' of string
console.log(new_Game_Name.indexOf('h' , 0))       // ('value to find' , start index) => to find the 'first-occurence' of specific character/string position
// if search value is not found 'indexOf()' returns -1


/*
 substring(start index, end index)
🔹 Extracts a portion of a string between two indices (not including the end index) => ( start , end-1)
🔹 Does NOT support negative indices (treats them as 0) => (-3, 4) = (0 , 4)
🔹 If start > end, it swaps the values and then execute => (7 , 4) = (4 , 7)
*/
const New_Name = new_Game_Name.substring(0 , 5)  
console.log(New_Name)

const Name1 =  new_Game_Name.slice(0, 5)        
console.log(Name1)
const Name2 =  new_Game_Name.slice(-7, 10)       // for '-ve' values, string counting starts from the 'end'
console.log(Name2) 
const Name3 =  new_Game_Name.slice(-7)           // Output : ash-khandelwal => ndelwal , counts from 'end' but give results from 'left => right' in string  
console.log(Name3)  



// Note: in slicing,               |start| < |end|
// slicing returns empty string if |start| > |end|, 

const a = "   AASHISH   "
console.log(a) 
console.log(a.trim())       // trim() removes the whitespace from the both ends of the string returns new string without modifying the original string
console.log(a.trimStart())  // removes whitespaces from start only
console.log(a.trimEnd())    // removes whitespaces from end only

url = "https://aashish.khandelwal.%20.1122002"
console.log(url.replace('%20' , '-'))          // replace the given string to desired string
console.log(url.includes('1122002'))           // given string is present or not ( output in true or false)
console.log(url.split('.'))                    // split the string into Array on the basis of given 'character'

