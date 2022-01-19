const url = "https://api.openweathermap.org/data/2.5/";
const key = "f4477887db5d8531ef2b6ec57824042f";

const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keypress", setQuery);

function setQuery(e) {
  if (e.keyCode === 13) {
    getResult(searchBar.value);
    searchBar.value = "";
  }
}

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C.`;

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(
    result.main.temp_max
  )}°C`;
};
