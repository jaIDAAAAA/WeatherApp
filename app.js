function updateWeather(response) {
    let temperatureElement = document.querySelector("#temp-number");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed")

    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML
    temperatureElement.innerHTML = Math.round(temperature);
}


function searchCity(city) {
let apiKey = "006e1d3aa42ft5cc55o041daac8db188";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}units=metric`; 
axios.get(apiUrl).then(updateWeather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value; 
    searchCity(searchInput.value);
} 



let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit" , handleSearchSubmit);

searchCity("Lisbon");