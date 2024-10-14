const cityName = document.getElementById("city");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const speed = document.getElementById("wind");
let btn = document.querySelector("button");
let search = document.getElementById("search");

const apiKey = "640993374fab7ab04f600cc32a89a1d6";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  const data = await response.json();

  // get Data Dynamic
  cityName.innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + "°C";
  humidity.innerHTML = data.main.humidity + '%';
  speed.innerHTML = data.wind.speed + 'km/h';
}

btn.addEventListener("click", () => getWeather(search.value));
