// Objects : Objects can be made by 2 methods
//           1- Object Literals           : {}
//           2- Constructor ( singleton- no other object exists like this one ) : Object.create

// Object literals

const mySym = Symbol("key1")         // 'Symbol' for accessing through object
  
const JsUser = {
    name: " Aashish Saini ",         // key-value pair
    "hobby": "Trading and Movies",   // string key specifically
    [mySym]: "Beardo",               // [Symbol name] is the accessing methodology of 'Symbol'
    age: 21,
    location: " Saharanpur ",
    email: "aashish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: [ "monday" , "saturday" ]
}

// Accessing string keys
console.log(JsUser["email"]);    // accessing as 'string' type
console.log(JsUser.email);       // accessing generally 
console.log(JsUser["hobby"]);    // string type access only, as 'hobby' key is initialized as 'string' specifically 

// Accessing Symbol
console.log(JsUser[mySym]);
console.log(JsUser);

// overriding the values of the keys
JsUser.email = "Aashishsaini@yahoo.com"     // value is overridden here with new e-mail id
console.log(JsUser);

// freeze the key
// Object.freeze(JsUser)
JsUser.age = "30"
console.log(JsUser);      // 'age' will not change

// function using object

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting)        // function is accessible but not executed yet
console.log(JsUser.greeting())      // function is accessible and executed now after parenthesis - ()

// accessing Object 'keys' using 'string interpolation'
JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`)   // 'this.key' tells about which key is present inside the object
}
console.log(JsUser.greetingTwo());