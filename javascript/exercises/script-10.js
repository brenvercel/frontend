// ======== WORKING WITH FUNCTION EXPRESSIONS ========
const addTwoNums = (num1, num2) => num1 + num2;
const subtractTwoNums = (num1, num2) => num1 - num2;
const multiplyTwoNums = (num1, num2) => num1 * num2;
const divideTwoNums = (num1, num2) => num1 / num2;

// The main, general-purpose function
function doCalculation(num1, num2, operation) {
  return operation(num1, num2);
}

/* Call the main function with different arguments
The arugments can be numbers and an operation */
let resultCalcAdd = doCalculation(10, 5, addTwoNums); 
console.log(`Calculator addition result: ${resultCalcAdd}`);// 15
let resultCalcSubtract = doCalculation(10, 5, subtractTwoNums); 
console.log(`Calculator subtraction result: ${resultCalcSubtract}`);// 5


 // Very basic higher-order and callback function pattern

/* The function that will be passed as an argument to the 
'callback' parameter of the 'main' function */
const callbackFunction = () => console.log("Hello from callback function.");

/* The 'main' function with a parameter named 'callback' */
function mainFunction(callback) { 
    // Do something
    callback();  // run the callback function passed as an argument            
};

// Run the main function
mainFunction(callbackFunction)

// === Callback functions as data receivers ===

// Two callback functions that will receive data (name) from the 'main' function
const sayHello = userName => console.log(`Hello: ${userName}`);
const sayGoodbye = userName => console.log(`Goodbye: ${userName}`);

/* The 'main function accepts a parameter named 'callback' 
But it already as the data (userName) for the callback to work with */
function fetchUserAndGreet(callback) {
    let userName = "Alice";
    callback(userName);
}

// Higher-order function that accepts a callback as an argument
function showUserGreeting(callback) {
    // Data supplied to callback
    let userName = "Bob";
    callback(userName); 
}

/* Call the main function with callback function 
written inside the () in anonymous function syntax */
showUserGreeting(userName => {
    console.log(`Hello: ${userName}`);
});


/* Call the main function with callback function 
written inside the () in shorter arrow function syntax */
showUserGreeting(userName => console.log(`Hello: ${userName}`));

// Creating an array with objects
const arrUsers = [
    { firstName: "Maria", age: 25, city: "New York" },
    { firstName: "Bob", age: 30, city: "Los Angeles" },
    { firstName: "Charlie", age: 35, city: "Chicago" }
];

/* Create anonymous function expression to use as callback */    
const displayUserAnon = function(user) {
    console.log(`Name: ${user.firstName}, Age: ${user.age}, City: ${user.city}`);
}

/* .forEach() is a built-in array method that accepts 
a callback function as an argument */
arrUsers.forEach(displayUserAnon); 

/* Create arrow function expression to use as callback */    
const displayUserArrow = user => console.log(`Name: ${user.firstName}, Age: ${user.age}, City: ${user.city}`);


arrUsers.forEach(displayUserArrow);