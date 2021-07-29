const API_KEY = "3ffad7c481e641d6705636c755fec75c";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector(".city");
      const weather = document.querySelector(".weather");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);


