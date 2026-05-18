const API_KEY = "5c0604448f4711bbb4cb86ca23fb3c5e";
 
async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
 
        if (!response.ok) throw new Error("City not found");
 
        const data = await response.json();
        displayWeather(data);
 
    } catch (error) {
        showError(error.message);
    }
}
 
function displayWeather(data) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
 
    document.getElementById("current-time").textContent = timeStr;
    document.getElementById("city-name").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("temp").innerHTML = `${Math.round(data.main.temp)}°<span style="font-size:20px">C</span>`;
    document.getElementById("feels").textContent = `${Math.round(data.main.feels_like)}°`;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weather-icon").alt = data.weather[0].description;
    document.getElementById("wind").textContent = `${data.wind.speed} km/h`;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("pressure").textContent = `${data.main.pressure} mb`;
    document.getElementById("visibility").textContent = `${(data.visibility / 1000).toFixed(1)} km`;
    document.getElementById("minmax").textContent = `${Math.round(data.main.temp_min)}° / ${Math.round(data.main.temp_max)}°`;
    document.getElementById("clouds").textContent = `${data.clouds.all}%`;
 
    document.getElementById("weather-result").style.display = "block";
    document.getElementById("error-card").style.display = "none";
}

function showError() {
    document.getElementById("error-card").style.display = "flex";
    document.getElementById("weather-result").style.display = "none";
}
 
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search-btn").addEventListener("click", () => {
        const city = document.getElementById("city-input").value.trim();
        if (city) getWeather(city);
    });
 
    document.getElementById("city-input").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const city = document.getElementById("city-input").value.trim();
            if (city) getWeather(city);
        }
    });
});

window.onload = () => {
    document.getElementById("weather-result").style.display = "none";
    document.getElementById("error-card").style.display = "none";
};