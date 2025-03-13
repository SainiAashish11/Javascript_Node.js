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
console.log(new_Game_Name.length)
console.log(new_Game_Name.toUpperCase())
console.log(new_Game_Name.charAt(2))
console.log(new_Game_Name.indexOf('h'))          // if string/character to be found, it should be given inside 'quotes'

const New_Name = new_Game_Name.substring(0 , 5)  // it slices the string from '0' to 'n-1' and only takes positive values for breaking the string
console.log(New_Name)

const Name1 =  new_Game_Name.slice(0, 5)        
console.log(Name1)
const Name2 =  new_Game_Name.slice(-7, 10)       // for '-ve' values, string counting starts from the 'end'
console.log(Name2)

// Note: in slicing,               |start| < |end|
// slicing returns empty string if |start| > |end|, 

const a = "   AASHISH   "
console.log(a) 
console.log(a.trim())      // trim() removes the whitespace from the both ends of the string returns new string without modifying the original string
console.log(a.trimStart())
console.log(a.trimEnd())

url = "https://aashish.khandelwal.%20.1122002"
console.log(url.replace('%20' , '-'))          // replace the given string to desired string
console.log(url.includes('1122002'))           // tells whether the given string is present or not
console.log(url.split('.'))                    // split the string into Array on the basis of given 'character'


