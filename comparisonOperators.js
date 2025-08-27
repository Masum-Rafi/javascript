const me = "25";
const friend = 25;
console.log("equal operator", me == friend);
console.log("Identity Operator", me === friend);

/* Output - 
equal operator  
-true                                                                                                          
Identity Operator 
-false

Here in variable called me hold a string type of data and variable friend holds a intiger type data. in our 1st console we use equal opertor and 2nd console we use identity operator, identity operator checks is they hold similer valus and also checks are thay same data type also, where equal operator only checks values similarity.*/


console.log("apple" == "apple");
console.log("apple" === "apple");
//output - true for both

const string1 = "test";
const string2 = "TEST";
console.log(string1 == string2);
console.log(string2 === string1);
//output - false for both (because of Case sensitivity)

let variableX = 15;
const variableY = "20";
const comparisone1 = variableX != variableY;
const comparisone2 = variableX !== variableY;
console.log("comparisone operator - ",comparisone1, "identity operator - ", comparisone2)
//output - comparisone operator -  true, identity operator -  true

let variableA = "hello";
const variableB = "Hello";
const check = variableX == variableA;
const comparisone = variableX === variableB;
console.log("comparisone operator - ",check, "identity operator - ", comparisone)
//comparisone operator -  false identity operator -  false (because of Case sensitivity)