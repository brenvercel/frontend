async function fetchCountriesData(region="europe") {
    const container = document.getElementById("remote-data-container");
    container.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        if (!response.ok) {
            throw new Error(`Network error: ${response.status}`);
        }
        const data = await response.json();
        displayCountriesData(data);
    } catch (error) {
        container.innerHTML = `<p class="no-results">⚠️ Could not load countries. Please try again.</p>`;
        console.error(error);
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

// -------------------------------------------------------
// Filter Rick & Morty characters by name
// -------------------------------------------------------

const characterSearch = document.getElementById("characterSearch");

// Fire a fetch on every keystroke
characterSearch.addEventListener("input", () => {
    const searchTerm = characterSearch.value.trim();
    // Don't fetch if the field is empty
    if (searchTerm === "") {
        const container = document.getElementById("remote-data-container");
        container.innerHTML = "";
        return;
    }
    fetchRMData(searchTerm);
});

async function fetchRMData(name = "") {
    try {
        const url = name
            ? `https://rickandmortyapi.com/api/character/?name=${name}`
            : `https://rickandmortyapi.com/api/character`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            const container = document.getElementById("remote-data-container");
            container.innerHTML = `<p class="no-results">No characters found matching "${name}".</p>`;
            return;
        }
        displayRMData(data.results);
    } catch (error) {
        const container = document.getElementById("remote-data-container");
        container.innerHTML = `<p class="no-results">⚠️ Could not load data. Please try again.</p>`;
        console.error(error);
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
        document.getElementById("filter-rm").style.display = "none";
        document.getElementById("section-countries").style.display = "block";
        regionSelect.value = "europe";
        fetchCountriesData();
    }
    else if (e.target.id === "btn-users") {
        fetchUsersData();
        document.getElementById("filter-rm").style.display = "none";
        document.getElementById("section-countries").style.display = "none";
    }
    else if (e.target.id === "btn-rm") {
        // Clears the search field
         document.getElementById("characterSearch").value = "";
        // Clear any existing data and show the filter section
        document.getElementById("remote-data-container").innerHTML = "";
        // loads all characters
        fetchRMData(); 
        // Show the filter 
        document.getElementById("filter-rm").style.display = "block";
        document.getElementById("section-countries").style.display = "none";
    }   
});

// -------------------------------------------------------
// Countries by region dropdown
// -------------------------------------------------------

const regionSelect = document.getElementById("regionSelect");

regionSelect.addEventListener("change", () => {
    const selectedRegion = regionSelect.value;
    fetchCountriesData(selectedRegion);
});

// Load default region on page load
window.addEventListener("load", () => {
  // Force default selection on reload
  regionSelect.value = "europe";
});