function updateWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description")
console.log(data.response.condition.description);

cityElement.innerHTML = response.data.city
descriptionElement - response.data.city
temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
let apiKey = "006e1d3aa42ft5cc55o041daac8db188";
let apiUrl = "https://api.shecodes.io/weather/v1/forecast?query=${city}&key={apiKey}"
axios.get(apiUrl).then(updateWeather);
}



function handleSearchsubmit(event) {
    event.preventDefault();
let searcInput = document.querySelector("#search-form-input");
searchCity(searcInput.value);
}


let searchFormElement = document.querySelector("#Search-form");
searchFormElement.addEventListener("submit", handleSearchsubmit);
searchCity("Lisbon");