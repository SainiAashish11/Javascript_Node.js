// singleton object 

const Tinder_user = new Object()   // object created using 'constructor' technique
console.log(Tinder_user)

// adding object properties dynamically using 'object.property' technique
Tinder_user.id = "1123MIC@12"
Tinder_user.name = "Aashi"
Tinder_user.isLoggedIn = false
// console.log(Tinder_user)


// objects inside object
const regular_user = {    
    email: "some@gmail.com",
    full_name: { 
        
        userName: {
        firstName: "Aashish",
        lastName : "Saini"
        }      
    }
}
// accessing object ke andar ke objects
console.log(regular_user.full_name.userName.firstName)

// object methods

const obj1 = { 1: "a" , 2: "b" }
const obj2 = { 3: "c" , 4: "d" }
const obj3 = { 5: "e" , 6: "f" }

// {} - simple technique
const obj4 = { obj1 , obj2 , obj3}                        // this adds all objects inside the 'obj4
console.log(obj4)    
 
// object.assign() 
const obj5 = Object.assign( {} , obj1 , obj2 , obj3 )     // {} is the 'Target' object where all the 'source' objects will be added
console.log(obj5)  

// spread technique
const obj6 = {...obj1 , ...obj2, ...obj3}
console.log(obj6)

// accessing object 'keys' and 'values' specifically

console.log(Object.keys(Tinder_user))      // 'keys' will come in array
console.log(Object.values(Tinder_user))    // 'values' will come in array
console.log(Object.entries(Tinder_user))   // 'keys' and 'values' will be shown inside an array

// array of objects

const users = [
    {
        name: "aashish",
        age : 21
    },

    {
        name: "Sambhu",
        age : 22
    },

    {
        name: "shiv",
        age : 22
    }
]

console.log(users[1].name);   // accessing the 'name' from the second object in the array

// does property exists inside the object

console.log(Tinder_user.hasOwnProperty('isLoggedIn'));