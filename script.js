const APIKEY = "<add_key_here>";
const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=${APIKEY}&units=metric`;

async function checkWeather() {
    const response = await fetch(APIURL);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+ " km/h";
}

checkWeather();