// Declaring and populating an object
const objUser = {
    firstName: "Luis", // string
    lastName: "Martinez", // string
    age: 32, // number
    isActive: true // boolean
};

console.log(objUser);

// === Displaying a property inside an object by its key ===
console.log(`User's first name: ${objUser.firstName}`);
console.log(`User's last name:  ${objUser.lastName}`);
console.log(`User's age: ${objUser.age}`);
console.log(`User active?: ${objUser.isActive}`);

// === Working with the properties of an object ===

// Declaring and populating a new object
const objCar = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
};
console.log("Original object"); 
console.log(objCar);

// Adding two new properties (key-value) pairs to the object
objCar.color = "Blue";   
objCar.isElectric = false;  
console.log("Added two new properties"); 
console.log(objCar);

// Deleting a property from an object
delete objCar.isElectric;
console.log("Removed a property"); 
console.log(objCar);

// Updating the value within two properties
objCar.color = "Red";   
objCar.year = 2012;   
console.log("Updated two property values"); 
console.log(objCar);

// === Creating an empty object and later adding keys-values ===

// Create empty object
const objPerson = {};
                
// Add keys and values to an empty object
objPerson.firstName = "Emma";
objPerson.lastName = "Smith";

console.log(objPerson); // {firstName: "Emma", lastName: "Smith"}

// === Assigning object value to a variable ===
const varFirstName = objUser.firstName;
console.log(`The first name of the user is: ${varFirstName}`);

// === Destructuring by reusing property keys as variable names ===
const { firstName, lastName, age, isActive } = objUser;

// Object's properties are now inside variables
console.log(`User's first name: ${firstName}`);
console.log(`User's last name:  ${lastName}`);
console.log(`User's age: ${age}`);
console.log(`User active?: ${isActive}`);


// Destructuring with different variable names
const { firstName: customerFirstName, lastName: customerLastName } = objUser;
console.log(`New variable names: ${customerFirstName} ${customerLastName}`);


// Declaring an array with items on separate lines and a trailing comma
const arrUserFirstNames = [
   "Camille",
   "Emma",
   "Gabriel",
   "Romy",
];


const arrUserIDs = [4032, 5229, 1234, 6317];
const arrCars = ["Volvo", "Citreon", "BMW", "Opel", "Peugeot", "Ford"];
const arrPrices = [11.99, 24.50, 34.25, 49.99];

// === Outputting array items by index position ===

console.log(`First item of arrUserFirstNames array: ${arrUserFirstNames[0]}`);
console.log(`First item of arrPrices array: ${arrPrices[1]}`);
console.log(`First item of arrCars array: ${arrCars[2]}`);
console.log(`First item of arrUserIDs array: ${arrUserIDs[3]}`);

// === Array length property ===
console.log(`Number of items in arrUserFirstNames: ${arrUserFirstNames.length}`);
// 4
console.log(`Number of items in arrPrices: ${arrPrices.length}`);
// 4

// === Accessing last item in array ===
console.log(`Last item of arrCars array: ${arrCars[arrCars.length-1]}`);
// Ford
console.log(`Last item of arrStudentIDs array: ${arrUserIDs[arrUserIDs.length-1]}`);
// 6317
// === Looping through array values ===

// Looping through the arrUserFirstNames array
arrUserFirstNames.forEach(userFirstName => {
    console.log(userFirstName);
});	

// Looping through the arrPrices array
arrPrices.forEach(price => {
    console.log(price);
});

// looping through the arrCars array
arrCars.forEach(car => {
    console.log(car);
});

// === Creating an empty array and adding items ===

// 1. Create an empty array
const arrSongs = [];

// 2. Add items to the end of the array using .push()
arrSongs.push("Yesterday");
arrSongs.push("Wonderwall");
arrSongs.push("Stairway to Heaven");

console.log(arrSongs); // Output: ["Yesterday", "Wonderwall", "Stairway to Heaven"]

// Create and populate a new array
const arrFruits = ["Apple", "Banana", "Orange", "Pear"];

// Assign array items to variables with destructuring
let [fruitOne, fruitTwo, fruitThree, fruitFour] = arrFruits;
console.log(`Fruit at position [0]: ${fruitOne}`);
console.log(`Fruit at position [1]: ${fruitTwo}`);
console.log(`Fruit at position [2]: ${fruitThree}`);
console.log(`Fruit at position [3]: ${fruitFour}`);

// Create and populate a new array
const arrCities = ["Dublin", "Cork", "Belfast", "Derry"];
	
// Skipping an array item while destructuring
let [firstCity, , thirdCity] = arrCities;
console.log(`Array item at position [0]: ${firstCity}`);
console.log(`Array item at position [2]: ${thirdCity}`);


// Creating an array of objects
const arrProducts = [
    {
        productID: 1001,
        name: "Laptop",
        price: 999.99,
        quantitySold: 150,
        inStock: true
    },
    {
        productID: 1002,
        name: "Mouse",
        price: 24.99,
        quantitySold: 300,
        inStock: true
    },
    {
        productID: 1003,
        name: "Keyboard",
        price: 59.99,
        quantitySold: 200,
        inStock: false
    }
];
console.log(arrProducts);

// Creating an array with objects on a single line
const arrUsers = [
    { firstName: "Alice", age: 25, city: "New York", isActive: true },
    { firstName: "Bob", age: 30, city: "Los Angeles", isActive: false },
    { firstName: "Charlie", age: 35, city: "Chicago", isActive: true }
];
console.log(arrUsers);



// Displaying some data from the arrProducts array of objects
console.log(`ID of product 0: ${arrProducts[0].productID}`); // 1001
console.log(`Name of product 1: ${arrProducts[1].name}`); // Mouse
console.log(`Price of product 2: ${arrProducts[2].price}`); // 59.99
console.log(`Total sales of product 2: ${arrProducts[2].quantitySold}`); // 200

// Accessing the first user's first name property
console.log(`First user: ${arrUsers[0].firstName}`);

// Accessing the second user's age property
console.log(`Second user's age: ${arrUsers[1].age}`);

// Checking if the third user is active
console.log(`Is the third user active? ${arrUsers[2].isActive}`);

let totalQuantitySold = 0;
// Loop through arrProducts
arrProducts.forEach(product => {
    console.log("Product Details:");
    console.log(`ID: ${product.productID}`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: €${product.price}`);
    console.log(`Qty Sold: ${product.quantitySold}`);
    console.log(`In Stock: ${product.inStock}`);
     // Add the quantitySold of the current product to the total
    totalQuantitySold += product.quantitySold;
    console.log("---------------"); // Separator between products
});
console.log("---------------"); // Separator between products
console.log(`Total quantity sold of all products: ${totalQuantitySold}`);
console.log("---------------"); // Separator between products


// Loop through arrUsers
let totalAge = 0;
arrUsers.forEach(user => {
    console.log("User Details:");
    console.log(`First Name: ${user.firstName}`);
    console.log(`Age: ${user.age}`);
    console.log(`City: ${user.city}`);
    console.log(`Active?: ${user.isActive}`);
     totalAge += user.age;
    console.log("**************"); // Separator between users
    const averageAge = totalAge / arrUsers.length;
    console.log(`Average age: ${averageAge.toFixed(0)}`);
});
