// **** EVENT LISTENER AND EVENT PROPERTIES ****

// Get the button element
const myButton = document.getElementById('myButton');

// Add event listener to button
myButton.addEventListener('click', e => {
    // Access properties of the event object
    console.log(e.target.id);        // ID of clicked element
    console.log(e.target.classList); // CSS class(es) of clicked element
});

// **** EVENT DELEGATION ****

// Get the container element
const container = document.getElementById('buttonContainer');

// Add single event listener to container
container.addEventListener('click', e => {
    // Check if clicked element is a button
    if (e.target.classList.contains("btn")) {
        console.log(`You clicked button with this ID: ${e.target.id}`);
        console.log(`You clicked button with these CSS class(es): ${e.target.classList}`);
        // Add new CSS class to targetted HTML element
        e.target.classList.add('btn-purple');
    }
});

// **** EVENT BUBBLING AND STOPPING PROPAGATION ****
document.getElementById('myNewButton').addEventListener('click', e => {
    console.log('Button clicked - no parent event triggered');
    e.stopPropagation(); // Stops the event from bubbling up
});

document.getElementById('inner').addEventListener('click', () => {
    console.log('Inner div clicked');
});

document.getElementById('outer').addEventListener('click', () => {
    console.log('Outer div clicked');
});

// Get the container element
// const container = document.getElementById('buttonContainer');

// Add single event listener to container
// container.addEventListener('click', e => {
    // Check if clicked element is a button
    // if (e.target.className.includes('btn')) {
        
        // 1. Find the button that currently has the purple class
        // We look inside the container for any element with '.btn-purple'
        // const currentButton = container.querySelector('.btn-purple');

        // 2. If such a button exists, remove the class
        // if (currentButton) {
        //     currentButton.classList.remove('btn-purple');
        // }

        // 3. Add the class to the newly clicked button
        // e.target.classList.add('btn-purple');
        
        // Optional: Logs
        // console.log(`Active button is now: ${e.target.id}`);
//     }
// });