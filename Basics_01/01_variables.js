// 'const' , 'let' , 'var' are the keywords that are already known by the compiler itself
// declaration of dataType : name_of_data = "value( number/string )"

const account_Id = 144553
let account_Email = "aashish@gmail.com"
var account_Password = "1234"
account_City = "jaipur"
let account_State     // unvalued 'data' results in 'undefined' 

console.log(account_Id)

// console.table : to show data in table form
console.table([account_Id, account_Email, account_Password, account_City, account_State])

// 'const' cannot be change once created in the memory
// 'let' , 'var' and 'account_City' can be changed as per the need

// Change the data values now except 'const'
account_Email = "aashishsaini@gmail.com" 
account_Password = "4321"
account_City = "Mumbai"

console.table([account_Email, account_Password, account_City, account_State]) 

// NOte : never use 'var' variable for data storage because it is only 'functional scoped' not 'block scoped'
// functional scoped : variable that is only accessible inside the functonal brackets {}
// block scoped : varibale that is only accessible inside the 'block' 
/*

function test() {
    if (true) {
        var x = 10;
        let y = 20;
    }
    console.log(x); // ✅ 10 (accessible because var is function-scoped)
    console.log(y); // ❌ ReferenceError (y is block-scoped)
}
test();

*/
