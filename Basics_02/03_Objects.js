// Objects : Objects can be made by 2 methods
//           1- Object Literals           : {}
//           2- Constructor ( singleton- no other object exists like this one ) : Object.create
// JavaScript objects are dynamic: You can add, modify, or delete properties and methods at any time.

// Object literals

const mySym = Symbol("key1")         // 'Symbol' for accessing through object
const JsUser = {
    name: " Aashish Saini ",         // key-value pair
    "hobby": "Trading and Movies",   // string key specifically
    [mySym]: "Beardo",               // [Symbol name] is the way to create 'Symbol' property
    age: 21,
    location: " Saharanpur ",
    email: "aashish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: [ "monday" , "saturday" ]    // 'array' as a property inside object
}

// Accessing string keys
console.log(JsUser["email"]);    // accessing as 'string' type
console.log(JsUser.email);       // accessing generally 
console.log(JsUser["hobby"]);    // string type access only, as 'hobby' key is initialized as 'string' specifically 

// Accessing 'Symbol' data type
console.log(JsUser[mySym]);
console.log(JsUser);

// overriding the values of the keys
JsUser.email = "Aashishsaini@yahoo.com"     // value is overridden here with new e-mail id
console.log(JsUser);


// Assigning a function to an object property ( i.e. greeting )
// JavaScript allows us to add properties and methods dynamically ( using 'object.property' syntax )

JsUser.greeting = function(){
    console.log("Hello Js User");
}
// accessing the object property
console.log(JsUser.greeting)        // function is accessible but not executed yet
// executing the object property
console.log(JsUser.greeting())      // function is accessible and executed now after parenthesis - ()

// accessing Object 'keys' using 'string interpolation'
JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`)   // 'this.key' tells about which key is present inside the object
}
console.log(JsUser.greetingTwo());

// freeze the key

Object.freeze(JsUser)
JsUser.age = "30"         //  age = 30 will not be executed on the console
console.log(JsUser);      // 'age' will not change

/*
NOTE:

The Object.freeze() method in JavaScript prevents modifications to an object. Once an object is frozen:

-No new properties can be added.
-Existing properties cannot be modified.
-Existing properties cannot be deleted.
-However, the object reference remains the same.

*/