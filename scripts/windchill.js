// Calulation of the Wind chill


//Get the elemets for the weather section
let temperature = document.getElementById("temperature");
let windspeed = document.getElementById("wind");
let windChill = document.getElementById("chill");


let givenTemperature = 41;
let givenWind = 8;

temperature.textContent = givenTemperature;
windspeed.textContent = givenWind;

function windChillCalc(temperature, wind) {
    let windChillValue = 35.74 + (0.6215 * temperature) - (35.75 * (wind ** 0.16)) + (0.4275 * temperature * (wind ** 0.16));
    return Math.round (windChillValue);
}

let currectWind = windChillCalc(givenTemperature, givenWind);

windChill.textContent = currectWind