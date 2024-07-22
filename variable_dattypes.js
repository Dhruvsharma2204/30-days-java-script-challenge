// Activity-1 -> Declaring variables
var a=5;
console.log(a);
// using let
let str ="Hey there";
console.log(str);

function varTest() {
    if (true) {
        var x = 1;
    }
    console.log(x); // 1
}

function letTest() {
    if (true) {
        let y = 1;
    }
    console.log(y); // ReferenceError: y is not defined
}
console.log(a); // undefined
var a = 10;
 
//const variable declartion 
 const ajex = true;
console.log(ajex);

var num =8;
var string = "hello chadan";
const bool = true;
var object = { key:"ABC"};
var undefinedvar = 45;
const array=[1,2,3];

console.log(typeof num);
console.log(typeof string);
console.log(typeof object);
console.log(typeof bool);
console.log(typeof undefinedvar);
console.log(typeof array);

//understanding let
var x = 20;
console.log(x);
var x= 30;
console.log(x);
 bool = false;
 console.log(bool);*/


 // Example with let
let variableLet = 'Initial value with let';
console.log('let before reassignment:', variableLet);

variableLet = 'Reassigned value with let';
console.log('let after reassignment:', variableLet);

// Example with const
const variableConst = 'Initial value with const';
console.log('const before reassignment:', variableConst);

try {
    variableConst = 'Attempted reassignment with const';
} catch (error) {
    console.log('const after reassignment attempt:', error.message);
}

// Block scope example to show let and const difference in block scope
if (true) {
    let blockLet = 'Block scoped let';
    const blockConst = 'Block scoped const';
    console.log('Inside block - let:', blockLet);
    console.log('Inside block - const:', blockConst);
}

try {
    console.log('Outside block - let:', blockLet); // This will throw an error
} catch (error) {
    console.log('Outside block - let:', error.message);
}

try {
    console.log('Outside block - const:', blockConst); // This will throw an error
} catch (error) {
    console.log('Outside block - const:', error.message);
}


console.log(`Value: ${undefinedVar}, Type: ${typeof undefinedVar}`);*/


// Declaring variables of different data types
let numberVar = 42;                    // Number
let stringVar = "Hello, world!";       // String
let booleanVar = true;                 // Boolean
let objectVar = { name: "Alice", age: 25 }; // Object
let arrayVar = [1, 2, 3, 4, 5];       // Array
let nullVar = null;                    // Null
let undefinedVar;                      // Undefined

// Logging values and types to the console
console.log(numberVar, typeof numberVar);
console.log(stringVar, typeof stringVar);
console.log(booleanVar, typeof booleanVar);
console.log(objectVar, typeof objectVar);
console.log(arrayVar, typeof arrayVar);
console.log(nullVar, typeof nullVar);
console.log(undefinedVar, typeof undefinedVar);
