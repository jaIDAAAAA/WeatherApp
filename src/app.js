function updateWeather(response) {
  let temperatureElement = document.querySelector("#temp-number");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  console.log(response.data.time);

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"  class="emoji" />`;
  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}`;
  temperatureElement.innerHTML = Math.round(temperature);
}
function formatDate(date) {
   
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days [date.getDay()];

    if(minutes < 10) {
        minutes = `0${minutes}`; }
    return `${day} ${hours}:${minutes}`;
}
function searchCity(city) {
let apiKey = "006e1d3aa42ft5cc55o041daac8db188";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; 
axios.get(apiUrl).then(updateWeather);
}
function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value; 
    searchCity(searchInput.value);
} 

function getForecast(city) {
  let apiKey = "006e1d3aa42ft5cc55o041daac8db188";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`; 
axios(apiUrl).then(displayForecast);
console.log(apiUrl);
}

function displayForecast(response) {
  console.log(response.data);

  let days = [`Sun`, `Mon`, `Tues`, `Wed`, `Thurs`, `Fri`];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      ` <div class="icon"></div>`;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#enter-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Lisbon");
getForecast("Lisbon");
displayForecast();