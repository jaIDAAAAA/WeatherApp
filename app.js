function searchCity(city) {
let apiKey = "006e1d3aa42ft5cc55o041daac8db188"
let apiUrl = "https://api.shecodes.io/weather/v1/forecast?query=${city}&key={apiKey}"

}



function handleSearchsubmit(event) {
    event.preventDefault();
let searcInput = document.querySelector("#search-form-input");
let cityElement = document.querySelector("#city");
cityElement.innerHTML = searcInput.value;
searchCity(searcInput.value);
}


let searchFormElement = document.querySelector("#Search-form");
searchFormElement.addEventListener("submit", handleSearchsubmit)