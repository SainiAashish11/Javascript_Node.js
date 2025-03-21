const course = {
    courseName: " Javascript Advanced",
    Price : "999",
    courseInstructor: "aashish"
}

const {courseInstructor: Instructor} = course   // 'courseInstructor' property has now changed to 'Instructor'
console.log(Instructor)  // we can access 'courseInstructor' by 'Instructor' now

// API ( Application Program Interface ) : When you have to handover your work on somebody else
// JSON( Javascript Object Notation ) : JSON (JavaScript Object Notation) is a lightweight data format used for storing and exchanging data between a 'server' and a 'client'. 
//                                      It is easy to read and write for humans and easy to parse for machines.
// JSON consists of key-value pairs.
//     - The keys must be strings enclosed in double quotes ("").
//     - The values can be strings, numbers, booleans, arrays, or nested objects.

//  forms of JSON data : curly braces {} , Array [ {}, {}, {}, ....] , nested objects {{},{},...} or combnation as 'object-array-object-object' { [ {}, {},...] }
