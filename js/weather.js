var api_key = process.env.API_KEY;
require('dotenv').config();

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector(".city");
      const weather = document.querySelector(".weather");
      city.innerText = data.name;
      temp = data.main.temp;
      if(temp >= 28) {
        weather.innerText = `${data.weather[0].main} / ${temp} 🔥`;
      } else if(27 >= temp && temp >= 20) {
        weather.innerText = `${data.weather[0].main} / ${temp} ☀`;
      } else if(temp <= 19) {
        weather.innerText = `${data.weather[0].main} / ${temp} ❄`;
      }
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.😓")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
