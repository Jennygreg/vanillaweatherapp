function search(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCity");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `<strong> ${city.value}</strong>`;

  function weather(response) {
    console.log(response);
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
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesady",
      "Thursaday",
      "Saturday",
    ];
    let currentDate = new Date();
    let day = days[currentDate.getDay()];
    let month = months[currentDate.getMonth()];
    let year = currentDate.getUTCFullYear();
    let date = document.querySelector("#date");
    date.innerHTML = `<strong>${day} ${month}, ${year}</strong>`;
    let hour = currentDate.getHours();

    if (hour < 10) {
      hour = `0${hour}`;
    }
    let min = currentDate.getMinutes();
    if (min < 10) {
      min = `0${min}`;
    }
    let time = document.querySelector("#time");
    time.innerHTML = `Time: <strong>${hour}:${min}</strong>`;
    console.log(time);
  }

  let apikey = "233b3ba66ff9ca173b23ed89a8ba5119";
  let search = city.value;
  let unit = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}&units=${unit}`;
  axios.get(url).then(weather);
}
let submit = document.querySelector("#search");
submit.addEventListener("submit", search);
