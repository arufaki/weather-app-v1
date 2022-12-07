let inputCity = document.getElementById("input-city");
let btnSearch = document.getElementById("btn-search");
let result = document.getElementById("result");
let city = document.querySelector(".city");
let country = document.querySelector(".country");
let temperature = document.querySelector(".temp");
let weatherInfo = document.querySelector(".weatherInfo");
let humadity = document.querySelector(".humadity");
let windSpeed = document.querySelector(".wind-speed");
let weatherIcon = document.querySelector(".icon");

const defaultWeather = async () => {
  let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=pekanbaru&appid=95639449582c9eaf8d97aa8dda2b97d8&units=metric");
  response = await response.json();
  console.log(response);

  city.innerHTML = response.name;
  country.innerHTML = response.sys.country;
  temperature.innerHTML = response.main.temp.toPrecision(2);
  weatherInfo.innerHTML = response.weather[0].main;
  humadity.innerHTML = response.main.humidity;
  windSpeed.innerHTML = response.wind.speed;
  weatherIcon.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
};

defaultWeather();

btnSearch.addEventListener("click", async () => {
  const searchWeather = async () => {
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputCity.value + "&appid=95639449582c9eaf8d97aa8dda2b97d8&units=metric");
    response = await response.json();
    console.log(response);

    city.innerHTML = response.name;
    country.innerHTML = response.sys.country;
    temperature.innerHTML = response.main.temp.toPrecision(2);
    weatherInfo.innerHTML = response.weather[0].main;
    humadity.innerHTML = response.main.humidity;
    windSpeed.innerHTML = response.wind.speed;
    weatherIcon.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;

    inputCity.value = null;
  };

  searchWeather();
});
