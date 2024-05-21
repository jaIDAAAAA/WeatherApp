function updateWeather(response) {
    console.log(response.data.current.temperature);
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
