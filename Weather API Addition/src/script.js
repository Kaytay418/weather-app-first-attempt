// Date & Time Element
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function hours12() {
  return (now.getHours() + 24) % 12 || 12;
}

let hour = hours12();
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let time = `${hour}:${minute}`;

let day = days[now.getDay()];
let month = months[now.getMonth()];
let year = now.getFullYear();

let date = now.getDate();
let h3 = document.querySelector("h3");
h3.innerHTML = `${day}, ${month} ${date}, ${year} ${time}`;

// Search Element, Weather API
function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let units = "imperial";
  let apiKey = `6c5702b8e0bdf208e797742914ea7cea`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}

function searchBar(event) {
  event.preventDefault();
  let city = document.querySelector("#search").value;
  searchCity(city);
}

searchCity("Seattle");

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchBar);

let button = document.querySelector("#search-button");
button.addEventListener("click", searchBar);

// Current Location Element
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLocation(position) {
  let units = "imperial";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "6c5702b8e0bdf208e797742914ea7cea";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

//
