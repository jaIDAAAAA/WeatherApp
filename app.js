function updateWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");

    console.log(response.data.condition.description);

    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.description;
    temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
    let apiKey = "006e1d3aa42ft5cc55o041daac8db188";
    let apiUrl = "https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey"};

    axios.get(apiUrl).then(updateWeather);

    
function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);