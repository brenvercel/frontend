
// // Passing anonymous callback function code with a parameter to main function
// function showUserGreeting(callback) {
//     callback();
// }

// // Call the main function with an anonymous callback function that takes a name parameter
// showUserGreeting(function() {
//     console.log(`Hello, world!`);
// });

// Outputs: "Hello, world!"

// Function declaration with two parameters
// function addTwoNumbers(num1, num2) {
//     // Send answer back to calling code outside of function
//     return num1 + num2; 
// }

// // Call function with two arguments
// let addResult = addTwoNumbers(4,2);

// Output result
// console.log(`Sum of two numbers is: ${addResult}`);


// let myResult = calcTwoNumbers(4, 2, addTwoNumbers); // <--- Step 1: Passes add as the operation argument

// console.log(`Result of calculation: ${myResult}`); // Outputs: Result of calculation: 6

// "hello"     // evaluates to "hello"
// 5 + 3       // evaluates to 8
// x * 10      // evaluates to value in x multipied by ten
// isLoggedIn  // evaluates to true or false

// function myFunction(parameter) {
//     // function code here...   
// }



const sayHello = function () {
     console.log(`Hello, world!`);
};

sayHello(); // call the function

// function showGreeting (sayHello) {
//     console.log(sayHello);
// }

// showGreeting();


// // ======== ANONYMOUS FUNCTIONS ========

// // Anonymous function	
// const showGreeting = function () {
//    console.log('Hello from anonymous function');
// };

// showGreeting(); // Hello from anonymous function


// // Anonymous function with two parameters that returns a value
// const sumNumbers = function(a, b) {
//     return a + b;
// };

// // Call the function with two arguments
// let resultSum = sumNumbers(5, 3); 
// // Outputs result to console
// console.log(`Returned result: ${resultSum}`);


// // Anonymous function with two parameters that returns a value
// const multiplyNumbers = function(x, y) {
//     return x * y;
// };

// // Call the function with two arguments
// let resultMultiply = multiplyNumbers(5, 3);
// // Outputs result to console
// console.log(`Returned result: ${resultMultiply}`);

// // ======== ARROW FUNCTIONS ========

// // Arrow function
// const helloFromArrow = () => {
//     console.log('Hello from arrow function');
// };

// // Call the arrow function using the variable name
// helloFromArrow();

// // Arrow function without parentheses around single parameter
// const greetNoParen = name => `Hello, ${name}!`;

// let greetingNoParen = greetNoParen("Mary");
// console.log(greetingNoParen); // Hello, Mary!

// // Single-statement arrow functions with implicit returns

// const shortGreet = () => 'Hello with no parameter!';	
// console.log(shortGreet()); // Hello with no parameter!

// const double = x => x * 2;
// console.log(double(10)); // 20

// const halfNum = num => (num / 2);
// console.log(halfNum(200)); // 100

// const add15ToPrice = num => (num + 15);
// console.log(add15ToPrice(100)); // 115

// const increasePriceby5Percent = num => (num + (num * .05));
// console.log(increasePriceby5Percent(200)); // 210

// const isPositive = num => num > 0;
// console.log(isPositive(5)); // true

// const uppercase = str => str.toUpperCase()
// console.log(uppercase("hello")); // HELLO

// // Immediately-invoked anonymous function
// (function() {
//     console.log("Hello from immediately-invoked anonymous function");
// })();

// // Immediately invoked arrow functions
// (() => {
//     console.log("Hello from arrow function");
// })();

// // With parameters
// ((name, age) => {
//     console.log(`Processing ${name}, age ${age}`);
//     return `Processed ${name}`;
// })('John', 30);


// ======== ARITHMETIC ANONYMOUS FUNCTIONS ========
const addTwoNums = function (num1, num2) {
    return num1 + num2;
};

const subtractTwoNums = function (num1, num2) {
    return num1 - num2;
}

const multiplyTwoNums = function (num1, num2) {
    return num1 * num2;
}

const divideTwoNums = function (num1, num2) {
    return num1 / num2;
}

// Call the functions with sample arguments and log results
let resultAdd = addTwoNums(8,2);
console.log(`Addition result: ${resultAdd}`);

let resultSubtract = subtractTwoNums(8,2);
console.log(`Subtraction result: ${resultSubtract}`);

let resultMultiply = multiplyTwoNums(8,2);
console.log(`Multiplication result: ${resultMultiply}`);

let resultDivide = divideTwoNums(8,2);
console.log(`Division result: ${resultDivide}`);

function doCalculation(num1, num2, operation) {
  return operation(num1, num2);
}

let resultCalcAdd = doCalculation(10, 5, addTwoNums); 
console.log(`Calculator addition result: ${resultCalcAdd}`);// 15
let resultCalcSubtract = doCalculation(10, 5, subtractTwoNums); 
console.log(`Calculator subtraction result: ${resultCalcSubtract}`);// 5
let resultCalcMultiply = doCalculation(10, 5, multiplyTwoNums); 
console.log(`Calculator multiplication result: ${resultCalcMultiply}`);// 50
let resultCalcDivide = doCalculation(10, 5, divideTwoNums); 
console.log(`Calculator division result: ${resultCalcDivide}`);// 2

