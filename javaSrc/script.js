function Search(response) {
  let city = document.querySelector("h1");
  city.innerHTML = search;
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
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
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

let apikey = "233b3ba66ff9ca173b23ed89a8ba5119";
let search = "Abuja";
let unit = "metric";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}&units=${unit}`;
axios.get(url).then(Search);

function fahren(event) {
  event.preventDefault();
  let fahrenheitdeg = document.querySelector(".temp");
  let fahrenUnit = (celsuisElement * 9) / 5 + 32;
  fahrenheitdeg.innerHTML = Math.round(fahrenUnit);
}
function cel(event) {
  event.preventDefault();
  let celsuisdeg = document.querySelector(".temp");
  celsuisdeg.innerHTML = celsuisElement;
}
let submit = document.querySelector("#search");
submit.addEventListener("submit", search);

let celsuisElement = null;
let celsius = document.querySelector("#celsuisdeg");
celsius.addEventListener("click", cel);
let fahrenheit = document.querySelector("fahrenheitdeg");
fahrenheit.addEventListener("click", fahren);

search(Abuja);
