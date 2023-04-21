function Search(response) {
  console.log(response);
  let city = document.querySelector("h1");
  city.innerHTML = response.data.name;
  let temperature = document.querySelector(".temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${Math.round(response.data.main.humidity)} %`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  let image = document.querySelector("#image");
  image.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  image.setAttribute("alt", response.data.weather[0].description);
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  mycelsuis = response.data.main.temp;
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesady",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDate = new Date();
  let day = days[currentDate.getDay()];
  let month = months[currentDate.getMonth()];
  let year = currentDate.getUTCFullYear();
  let hour = currentDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let min = currentDate.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  let time = document.querySelector("#time");
  time.innerHTML = ` Last updated ${hour}:${min}`;
  let date = document.querySelector("#date");
  date.innerHTML = `${day} ${month}, ${year}`;
}
function searchLocation(location) {
  let apikey = "233b3ba66ff9ca173b23ed89a8ba5119";
  let unit = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=${unit}`;
  axios.get(url).then(Search);
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCity");
  searchLocation(city.value);
}
function fahrenheitTemp(event) {
  event.preventDefault();
  let temperature = document.querySelector(".temp");
  let fahrenheitdeg = (mycelsuis * 9) / 5 + 32;
  temperature.innerHTML = Math.round(fahrenheitdeg);
}
function celsuisTemp(event) {
  event.preventDefault();
  let temperature = document.querySelector(".temp");
  temperature.innerHTML = Math.round(mycelsuis);
}
let mycelsuis = null;
let fahrenheit = document.querySelector("#fahrenheitdeg");
fahrenheit.addEventListener("click", fahrenheitTemp);
let celsuis = document.querySelector("#celsuisdeg");
celsuis.addEventListener("click", celsuisTemp);
let submit = document.querySelector("#search");
submit.addEventListener("submit", searchCity);

searchLocation("Abuja");
