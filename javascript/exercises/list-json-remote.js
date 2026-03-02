// Event listener on the parent container
document.getElementById("button-container").addEventListener("click", function(e) {
    if (e.target.id === "btn-countries") {
        fetchCountriesData();
    }
});

async function fetchCountriesData() {
    // Fetch the resource and get a Response (status, headers, body stream)
    const response = await fetch("https://restcountries.com/v3.1/region/europe");
    // Parse the response object to JSON
    const data = await response.json();
    // Verify the code is working by logging the data to the console
    // console.log(data);
    displayCountriesData(data);
}

// Fetch the countries immediately when the page loads
fetchCountriesData();

function displayCountriesData(countriesArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    countriesArray.forEach(country => {
        htmlOutput += `
        <p><img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="50"></p>
        <p>
            <b>${country.name.common}</b><br>
            Capital: ${country.capital[0]}<br>
            Population: ${country.population.toLocaleString()}<br>
            Region: ${country.region}

            </p>
            <p>------------------</p>
        `;
    });
    container.innerHTML = htmlOutput;
}

