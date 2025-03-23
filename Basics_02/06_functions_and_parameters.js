// function : programme which can be used again and again for a particular task at various places

// function is returning 'undefined' only
function addTwoNumbers(number1 , number2) {     // function definition with parameters
     number1 + number2;                         // sum of number1 and number2
}

console.log(addTwoNumbers(3 , 4));     // sum will not be visible on console as function is returning 'undefined' not 'sum'

/**************************************************************************/

// function is returning 'undefined' but 'console' will print the output
function AddTwoNumbers(number1 , number2) {
    let sum = number1 + number2;                // sum of 'number1' and 'number2' is stored in 'sum' variable
    console.log(sum);                           // printing of 'sum'
}

AddTwoNumbers(4 , 4 )                  // function call with arguments (4,4)

/***************************************************************************/

// function returns the addition value
function sumOfnumbers(number1 , number2) {      
    return number1 + number2;                   // sum of 'number1' and 'number2' is returned to function
    console.log("Hi, Aashish Saini")            // after 'return' statement, function ignores everything, hence will not execute this 'console'
}

console.log(sumOfnumbers( 5 , 5));     // 5 + 5 = 10 is shown on console  

/***************************************************************************/

// function parameters ki kahani

function loginInfo(username){
    return `${username} just logged in`;      // the whole string interpolation is returned to function
}

console.log(loginInfo("Aashish"));         // string parameter given to function

/***************************************************************************/

// parameter overriding : when parameter during function call takes the charge of initial parameter given during function definition

function info(user = "Aashish"){         // 'Aashish' is passed as parameter
    return `${user} just logged in`;     // return : Aashish just logged in
}

console.log(info("Saini"))         // "Saini" overrides "Aashish" => output : Saini just logged in

