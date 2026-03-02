// ======== ANONYMOUS FUNCTIONS ========

// Anonymous function	
const showGreeting = function () {
   console.log('Hello from anonymous function');
};

showGreeting(); // Hello from anonymous function


// Anonymous function with two parameters that returns a value
const sumNumbers = function(a, b) {
    return a + b;
};

// Call the function with two arguments
let resultSum = sumNumbers(5, 3); 
// Outputs result to console
console.log(`Returned result: ${resultSum}`);


// Anonymous function with two parameters that returns a value
const multiplyNumbers = function(x, y) {
    return x * y;
};

// Call the function with two arguments
let resultMultiply = multiplyNumbers(5, 3);
// Outputs result to console
console.log(`Returned result: ${resultMultiply}`);

// ======== ARROW FUNCTIONS ========

// Arrow function
const helloFromArrow = () => {
    console.log('Hello from arrow function');
};

// Call the arrow function using the variable name
helloFromArrow();

// Arrow function without parentheses around single parameter
const greetNoParen = name => `Hello, ${name}!`;

let greetingNoParen = greetNoParen("Mary");
console.log(greetingNoParen); // Hello, Mary!

// Single-statement arrow functions with implicit returns

const shortGreet = () => 'Hello with no parameter!';	
console.log(shortGreet()); // Hello with no parameter!

const double = x => x * 2;
console.log(double(10)); // 20

const halfNum = num => (num / 2);
console.log(halfNum(200)); // 100

const add15ToPrice = num => (num + 15);
console.log(add15ToPrice(100)); // 115

const increasePriceby5Percent = num => (num + (num * .05));
console.log(increasePriceby5Percent(200)); // 210

const isPositive = num => num > 0;
console.log(isPositive(5)); // true

const uppercase = str => str.toUpperCase()
console.log(uppercase("hello")); // HELLO

// Immediately-invoked anonymous function
(function() {
    console.log("Hello from immediately-invoked anonymous function");
})();

// Immediately invoked arrow functions
(() => {
    console.log("Hello from arrow function");
})();

// With parameters
((name, age) => {
    console.log(`Processing ${name}, age ${age}`);
    return `Processed ${name}`;
})('John', 30);

