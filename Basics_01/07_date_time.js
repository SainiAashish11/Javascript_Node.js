let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);               // object
console.log(myDate.toString());           // output: day month date year hr:mins:sec GMT+0000 ( Coordinated Universal Time) 
console.log(myDate.toLocaleString());     // output: mm/dd/yyyy, hr:mins:sec AM/PM
console.log(myDate.toLocaleDateString()); // output: mm/dd/yyyy
console.log(myDate.toLocaleTimeString()); // output: hr:mins:sec AM/PM
console.log(myDate.toDateString());       // output: day month date year
console.log(myDate.toTimeString());       // output: hr:mins:sec GMT+0000 (Coordianted Universal Time)

// toISOString() and toJSON() converts in same syntax
console.log(myDate.toISOString()); 
console.log(myDate.toJSON()); 

// specific date creation in different formats

let myCreatedDate_01 = new Date(2023, 0, 23);        // (2023 , 0 , 23) - (year, month, date)
console.log(myCreatedDate_01.toString());   
let myCreatedDate_02 = new Date(2023, 0, 23, 5, 3);  // mm/dd/yyyy, hr:mins:sec AM/PM
console.log(myCreatedDate_02.toLocaleString());

// "yyyy-mm-dd"
let myCreatedDate_03 = new Date("2023-01-11");      
console.log(myCreatedDate_03.toLocaleString());
// "mm-dd-yyyy"
let myCreatedDate_04 = new Date("05-24-2025");      
console.log(myCreatedDate_04.toLocaleString());

// ******************************************* //

// time stamp : to get time in milliseconds
let myTimeStamp = Date.now();      // Date.now() gives time of latest date from 1970 1-jan UTC
console.log(myTimeStamp);

// to get time from date 
let myCreatedDate_05 = new Date("03-16-2025");
console.log(myCreatedDate_05.getTime());

// to get time in seconds
console.log(Date.now());                   // time in milliseconds
console.log(Math.floor(Date.now()/1000));  // time in seconds

// to get specific date or time using Date() object properties
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getHours());

// customization in date and time sytax
const newDate_01 = new Date();   // Date object is created
console.log(newDate.toLocaleString('default',{    // various object properties are accessed via this syntax {} and 'default' is system's default locale method i.e. English(US). We can use 'hi-IN' for hindi based date

    weekday:"long",
    month:"long",
    day: "numeric",
    year: "numeric"

}));

// customized formatting of date
// datestyle : "full" => gives the latest date and time 
console.log(newDate.toLocaleString('default',{
    datestyle: "full"     // "full" : day, month date, year | "long" : month date, year | "medium" | "short"
}));
