// Get the form from the HTML using its unique ID
const formStudentReg = document.getElementById("myBigForm");

// Handle the submit event of the form
formStudentReg.addEventListener("submit", e => {   
    
    // Prevent data from being sent to a server and page from reloading
    e.preventDefault(); 
    
    // Get the input values after 'cleaning' them 
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    
    // Set up Boolean for simple validation
    let isValid = true;
    
    // Test input values and show/hide error messages
    if (firstName === "") {
        document.getElementById("firstNameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("firstNameError").style.display = "none";
    }
    
    if (lastName === "") {
        document.getElementById("lastNameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("lastNameError").style.display = "none";
    }
    
    if (!validateEmail(document.getElementById("email").value.trim())) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // Validate password meets minimum requirements
    if (!validatePassword(document.getElementById("password").value.trim())) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }


const studentId = document.getElementById("studentId").value.trim();    
if (studentId < 10000 || studentId > 99999) {
    document.getElementById("studentIdError").style.display = "block";
    isValid = false;
} else {
    document.getElementById("studentIdError").style.display = "none";
}

    // If valid, process the data
    if (isValid) {
        console.log(`Welcome, ${firstName} ${lastName}!`);
        formStudentReg.reset(); // Clears all fields
    }
});


function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}