
// Fetch function
async function fetchCountriesData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe");
        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }
        const data = await response.json();
        displayCountriesData(data);
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}

// Display function
function displayCountriesData(countriesArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

countriesArray.forEach(country => {
   htmlOutput += `
      <div style="border: 1px solid #ccc; padding: 12px; border-radius: 6px;"><img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="100">
         <p>
            <b>${country.name.common}</b><br>
            Capital: ${country.capital[0]}<br>
            Population: ${country.population.toLocaleString()}<br>            
            Region: ${country.region}
         </p>
      </div>
        `;
});

    container.innerHTML = htmlOutput;
}

async function fetchUsersData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }
        const data = await response.json();
        // Verify the code is working by logging the data to the console
        console.log(data); 
        // Call the display function
        displayUsersData(data);
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}


function displayUsersData(usersArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";
    usersArray.forEach(user => {
        htmlOutput += `
        <div style="border: 1px solid #ccc; padding: 12px; border-radius: 6px;">
            <p>
            <b>${user.name} ${user.username}</b><br>
            Email: <a href="mailto:${user.email}">${user.email}</a><br>
            Website: <a href="http://${user.website}" target="_blank">${user.website}</a><br>
            Location: ${user.address.street}, ${user.address.city}
            </p>
            </div>
        `;
    });
    container.innerHTML = htmlOutput;
} 


async function fetchRMData() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }
        const data = await response.json();
        // Verify the code is working by logging the data to the console
        console.log(data); 
        // Call the display function
        displayRMData(data.results);
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}

function displayRMData(charactersArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    charactersArray.forEach(character => {
        htmlOutput += `
        <div style="border: 1px solid #ccc; padding: 12px; border-radius: 6px;">
        <img src="${character.image}" alt="Picture of ${character.name}" width="100">
            <p>
            <b>${character.name}</b><br>
            Status: ${character.status}<br>
            </p>
            </div>
        `;
    });
    container.innerHTML = htmlOutput;
} 

// Event listener on the parent container
document.getElementById("button-container").addEventListener("click", function(e) {
    if (e.target.id === "btn-countries") {
        fetchCountriesData();
    }
    else if (e.target.id === "btn-users") {
        fetchUsersData();
    }
    else if (e.target.id === "btn-rm") {
        fetchRMData();
    }   
});

