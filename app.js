function handleSearchsubmit(event) {
    event.preventDefault();
let searcInput = document.querySelector("#search-form-input");
let cityElement = document.querySelector("#city");
cityElement.innerHTML = searcInput.value;

}


let searchFormElement = document.querySelector("#Search-form");
searchFormElement.addEventListener("submit", handleSearchsubmit)