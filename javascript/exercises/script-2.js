
// Using [] notation to access position of characters within string
let myStr = "Hello, World!";
console.log(`Position [0]: ${myStr[0]};`)   // H
console.log(`Position [5]: ${myStr[5]};`)   // ,
console.log(`Position [6]: ${myStr[6]};`)   // whitespace
console.log(`Position [7]: ${myStr[7]};`)   // W
console.log(`Position [12]: ${myStr[12]};`) // !

// String length  
console.log(`Length of string: ${myStr.length}`); // 13

// Last character in string
console.log(`Last character: ${myStr[myStr.length - 1]}`); // !

// ======== MANIPULATNG STRING CONTENT ========
let strUserName = "  John Smith  ";
  
// Remove whitespace
console.log(strUserName.trim());           // "John Smith" (without quotes)

// Change case
console.log(strUserName.toLowerCase());    // "  john smith  " (without quotes)
console.log(strUserName.toUpperCase());    // "  JOHN SMITH  " (without quotes)

// Chaining methods
console.log(strUserName.trim().toLowerCase());

// === STRING METHODS DO NOT CHANGE ORIGINAL STRING VALUES ===
  
// Original string
let strMessage = "Hello from JavaScript string variable";
console.log(strMessage); // Original: Hello from JavaScript string variable
  
// This does NOT change the original string
strMessage.toUpperCase();
console.log(strMessage); // Unchanged: Hello from JavaScript string variable


// To actually change the value, you need to assign the result back
strMessage = strMessage.toUpperCase();
console.log(strMessage); // HELLO WORLD

// ======== CONCATENATING STRINGS ========
       
// Joining strings with template literals
let txtFirstName = "John";
let txtLastName = "Lennon";
let txtFullName = `${txtFirstName} ${txtLastName}`; 
console.log(`Full name: ${txtFullName}`);  // John Lennon

// Joining strings with the + operator
txtFullName = txtFirstName+ " " +txtLastName; 
console.log(`Full name: ${txtFullName}`);  // John Lennon

// Compound assignment operator +=
let greeting = "Hello";
greeting += " there";  // Hello there
greeting += "!";       // Hello there!
console.log(greeting);
        
let story = "Once upon a time";
story += " there was a developer";
story += " who loved to code";
story += " and debug all day long.";
console.log(story)

// ======== ASSIGN NUMBERS TO VARIABLES ========
const myVar1 =  1234;    // JavaScript treats myVar1 as a number
const myVar2 = "1234";;  // JavaScript treats myVar2 as a string
const myVar3 = '1234';   // JavaScript treats myVar3 as a string
const myVar4 = `1234`;   // JavaScript treats myVar4 as a string
console.log(`${myVar1} ${myVar2} ${myVar3} ${myVar4}`); // 1234 1234 1234 1234

// Valid numbers 
let Temperature = -6.3456 // Valid number
let errorRate = .2727     // Valid number

// Arithmetic with JavaScript
const firstNum = 12;
const secondNum = 8;
console.log(`Addition (12+8): ${firstNum + secondNum}`);       // 20
console.log(`Subtraction (12-8): ${firstNum - secondNum}`);    // 4
console.log(`Multiplication (12*8): ${firstNum * secondNum}`); // 96
console.log(`Division (12/8): ${firstNum / secondNum}`);       // 1.5

// Operator precedence
console.log(`5 + 2 * 3: ${5 + 2 * 3}`); // returns 11 

// Operator precedence with parentheses
console.log(`(5 + 2) * 3: ${(5 + 2) * 3}`); // 21

// Increment and decrement operators
let myNum1 = 7;
let myNum2 = 24; 	
console.log(`myNum1 is 7`); 
console.log(`Increment operator (++myNum1) is ${++myNum1}`); // 8
console.log(`myNum2 is 24`); 
console.log(`Decrement operator (--myNum2) is ${--myNum2}`); // 23

// === Compound assignment operator += with numbers ===
let count = 5;
console.log(count); // 5
count += 3;   // count is now 8
count += 2;   // count is now 10

// Keeping score in a computer game
let playerScore = 100;
playerScore += 50;   // Player hits target
playerScore += 25;   // Player collects coin
playerScore += 75;   // Player completes level
console.log(playerScore);  // 250

// Calculating compound interest
let balance = 1000;
let interest = balance * 0.05;  // 5% interest
balance += interest;
console.log(balance);  // 1050