let city = document.getElementById("weather__city");
let search = document.querySelector(".search");
let editButton = document.querySelector(".edit-btn");
let searchInput = document.querySelector(".weather__search");
let searchButton = document.querySelector(".search-btn");
let weatherCity = document.getElementById("city");
let weatherTemperature = document.getElementById("weather__temperature");
let weatherWind = document.querySelector(".weather__indicator__wind");
let weatherHumidity = document.querySelector(".weather__indicator__humidity");
let weatherImage = document.querySelector(".weather__image");
let weatherDescription = document.querySelector(".weather__description");
let weatherDay = document.querySelector(".weather__day");

let weatherAPIKey = "cba8bb554d7796e2c6a579f749606768";
let WeatherBase__URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric";

editButton.addEventListener("click", () => {
  search.classList.remove("hide");
});

const getCity = async (city) => {
  let response = await fetch(
    WeatherBase__URL + `&q=${city}&appid=${weatherAPIKey}`
  );
  let weather = await response.json();
  console.log(weather);
  return weather;
};

searchButton.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("searching...");
  let weather = await getCity(searchInput.value);
  updateWeather(weather);
  console.log("Searched");
});

const updateWeather = (data) => {
  weatherCity.innerHTML = data.name + ", " + data.sys.country;
  weatherTemperature.innerHTML = data.main.temp + "&deg;c";
  weatherHumidity.innerHTML = data.main.humidity + "%";
  weatherWind.innerHTML = data.wind.speed + "km/h";
  weatherDescription.innerHTML = data.weather[0].main;

  if (data.weather[0].main === "Clouds") {
    weatherImage.src = "./assets/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherImage.src = "./assets/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherImage.src = "./assets/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherImage.src = "./assets/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherImage.src = "./assets/mist.png";
  } else if (data.weather[0].main === "Snow") {
    weatherImage.src = "./assets/snow.png";
  }

  search.classList.add("hide");
};

const getDate = () => {
  let now = new Date();
  let date = now.getDate();

  let year = now.getFullYear();
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
    "November",
    "December",
  ];

  let dayString = days[now.getDay()];
  let monthString = months[now.getMonth()];

  return `${dayString}, ${date} ${monthString} ${year}`;
};
weatherDay.innerHTML = getDate();
