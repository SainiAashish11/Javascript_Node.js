// Rest operator (...) : this collects all the values passed in the function call adn stores in an array

function calculateCartPrice(...num1){    // rest operator as a function parameter
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 100))   // output: [200, 400, 500, 100]


 
// other parameter and rest operator as function paramters

function CalculateCartTotal(val1, val2, val3, ...num1){
    return num1;
}

console.log(CalculateCartTotal(200, 300, 400, 500, 600, 700))     // 200, 300 and 400 values went to 'val1', 'val2' and 'val3' and remaining values collected in array by 'rest operator'


// object as paramter
const user =  {                     // object created
    username: "Aashish",
    age: 22
}
function objectHandling(anyobject){     // general object as function parameter
    console.log(`Hello ${anyobject.username}. Does your age is ${anyobject.age}?`)   // accessing object properties using 'anyobject' paramter
}

objectHandling(user)    // passing the real 'user' object as argument


// direct passing of object in the function
objectHandling({
    username: "Saini",
    age: 23
})


// array as funtion parameter
 const MyArray = [2 , 3 , 4 , 5 , 6]    // array initialization

function arrayAccept(arr1){
    return arr1[1];
}

console.log(arrayAccept(MyArray));     // function calling


// direct array passing
console.log(arrayAccept([10, 11, 12, 13, 14]))   // output: 11


/*
Note : Always use the passed parameter inside the function body as it is it's local variable to access properties for any data type
*/