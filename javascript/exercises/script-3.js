// ======== FUNCTION DECLARATIONS ========

// Function declaration	
function displayGreeting() {
   console.log('Hello, world!');
}
// Outputs 'Hello, world!' to Console when called

// Function declaration with parameter
function showNumber(num) {
   console.log(`Number passed as parameter is: ${num}`);
}

// Function call with argument
showNumber(21); 

// Function declaration with two parameters
function addTwoNumbers(num1, num2) {
    // Outputs the sum of two numbers
    console.log(`Sum is : ${num1 + num2}`); 
}

// Function call with two arguments
addTwoNumbers(1, 2);

// Function declaration with two parameters
function addTwoNumbers(num1, num2) {
    // Returns the sum of two numbers
    return (num1 + num2);
    // Outputs the sum of two numbers
    console.log(`Sum is : ${num1 + num2}`);  // Line will not be executed
}

// Function call with two arguments
let result = addTwoNumbers(1, 2);
console.log(`Returned result: ${result}`);



// Function declaration with one parameter that expects one argument
function showMessage(message) {
   console.log(message);
}

// Function called without passing an argument
showMessage(); // Outputs 'undefined'


function showMessage(message="An error occured. Contact support.") {
   console.log(message);
}

showMessage(); // Outputs "An error occured. Contact support."
showMessage('Hi, there'); // Outputs 'Hi, there!'

// Too many parameters passed to function
function averageThreeNums(x, y, z) {
   console.log(`Average of three numbers is: ${(x + y + z)/3}`);
}
		
averageThreeNums(1,2,3,4,5,6); // ignores 4, 5, 6
averageThreeNums(1,2,3,4,5); // ignores 4, 5
averageThreeNums(1,2,3,4); // ignores 4
averageThreeNums(1,2,3); // result is always '2'





// Function to check if value can be used in calculations
function isValidNumber(value) {
    const num = Number(value);
    return !isNaN(num) && isFinite(num);
}
        
// Test the argument
console.log(isValidNumber(123)); // true
console.log(isValidNumber("12.34")); // true
console.log(isValidNumber("abc")); // false


// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

// Test: Rolling a die (1 to 6)
console.log(getRandomInt(1, 6)); 

// Test: Picking a random percentage (0 to 100)
console.log(getRandomInt(0, 100)); 