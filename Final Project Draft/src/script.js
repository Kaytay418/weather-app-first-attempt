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

// Search Element
function searchBar(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", searchBar);
let button = document.querySelector("#search-button");
button.addEventListener("click", searchBar);

//Fahrenheit or Celsius
function celcius(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("h2");
  currentTemp.innerHTML = "17°";
}
function fahrenheit(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("h2");
  currentTemp.innerHTML = "67°";
}

let celciusDisplay = document.querySelector("#celciusTemp");
celciusDisplay.addEventListener("click", celcius);

let fahrenheitDisplay = document.querySelector("#fahrenheitTemp");
fahrenheitDisplay.addEventListener("click", fahrenheit);
