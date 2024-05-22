//enter name of city into input field
//using api [accuweather](https://developer.accuweather.com/)
// to store city name in [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
//https://api.openweathermap.org/data/2.5/weather?q=London&appid=&units=metric

const apiKey = "b42e9f29272b6442433ee2f259f116bd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404) {
        document.querySelector(".error").style.display =  "block";
        document.querySelector(".weather").style.display =  "none";
    } else {

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

    
    switch(data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
          break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Wind":
            weatherIcon.src = "images/wind.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        case "Snow":
            weatherIcon.src = "images/snow.png";
            break;
    }

    document.querySelector(".error").style.display =  "none";
    document.querySelector(".weather").style.display =  "block";
    }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})