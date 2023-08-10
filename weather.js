const apiKey = "4042f2d6a0df1e169c6f1d2ea4a09e00";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.getElementById('box');
const searchBtn = document.getElementById('btn');
const icon = document.querySelector('.icon');
async function checkWeather(city)
{
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    if(response.status == 404)
    {
        document.querySelector(".msg").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds")
    {
        icon.src = "/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear")
    {
        icon.src = "/images/clear.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        icon.src = "/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        icon.src = "/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist")
    {
        icon.src = "/images/mist.png";
    }
    document.querySelector(".msg").style.display = "";
    document.querySelector(".weather").style.display = "block";
    }
    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})