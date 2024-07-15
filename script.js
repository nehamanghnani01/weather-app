const APIKEY = "dd934d2fb0d5219fd561d8fff414f34f";
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