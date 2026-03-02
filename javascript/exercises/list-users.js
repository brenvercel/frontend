async function fetchUserData() {
   try {
       // The 'await' keyword pauses execution until the fetch Promise resolves
       const response = await fetch("data/users.json");
       if (!response.ok) {
          // If response has an error status code, log a message
          // This handles cases like 404 (not found), 500 (server error), etc.
          console.log(`Network response was not ok - Status: ${response.status} ${response.statusText}`);
        }
        else {
          // For successful responses, convert the response object to a parsed JavaScript object
          const data = await response.json();
          // Output the parsed user data object to the console
          console.log(data);
          displayUsers(data);
        }
    } // End try block
    catch (error){
        // Catch network errors, JSON parsing errors, or any other exceptions
        console.error(`Error fetching user data: ${error}`);
    }
}

fetchUserData();

// Function to handle the DOM output
function displayUsers(usersArray) {
    const container = document.getElementById("user-container");
    let htmlOutput = "";

    // Loop through each user in the array
    usersArray.forEach(user => {
        // Build the HTML string using template literals
        htmlOutput += `
            <p><b>${user.firstName} ${user.lastName}</b>  Age: ${user.age}  Active: ${user.isActive}</p>
        `;
    });

    // Output the final HTML to the page
    container.innerHTML = htmlOutput;
}