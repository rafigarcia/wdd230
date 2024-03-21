// Weather API 
const currentTemp = document.getElementById("temperature");
const windSpeed = document.getElementById("wind");
const windChill = document.getElementById("chill");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption");

const url ='https://api.openweathermap.org/data/2.5/weather?lat=41.88&lon=-87.63&appid=9065c67bf4f8e51fd2802e0c64927985';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.textContent = `${data.main.temp} F°`;
    windSpeed.textContent = `${data.wind.speed} MPH`;
    windChill.textContent = `${data.main.temp} F°`;
    const inconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', inconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}


apiFetch();