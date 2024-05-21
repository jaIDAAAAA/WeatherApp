function updateWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let iconElement = document.querySelector("#icon"); 
    iconElement.innerHTML = <img src="${response.data.condition.icon_url}" class="weather-emoji"/>; 
    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(new Date(response.data.time * 1000)); 
    descriptionElement.innerHTML = response.data.description;
    humidityElement.innerHTML = ${response.data.temperature.humidity}%;
    windSpeedElement.innerHTML = ${response.data.wind.speed}km/h;
    temperatureElement.innerHTML = Math.round(response.data.temperature.value); 
}
