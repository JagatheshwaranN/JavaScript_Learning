/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "39507d026amsh728e93906c1c555p1b839cjsnf8f650992b1e";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */


const URL = "https://open-weather13.p.rapidapi.com/city/";
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '39507d026amsh728e93906c1c555p1b839cjsnf8f650992b1e',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
}


const getWeatherData = async (city) => {
    try {
        const response = await fetch(URL+city, options)
        const result = await response.json()
        console.log(result)
        if(result.cod==200){
            showWeatherData(result)
        }
    } catch (error) {
        console.log(error)
    }

}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
    const city = document.getElementById('city').value;
    getWeatherData(city)
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
    cityElement = document.getElementById("city-name")
    weatherTypeElement = document.getElementById("weather-type")
    tempElement = document.getElementById("temp")
    minTempElement = document.getElementById("min-temp")
    maxTempElement = document.getElementById("max-temp")
    const fahToCelConvConst = 32
    console.log(weatherData.name)
    console.log(weatherData.weather[0].main)
    console.log(weatherData.main.temp)
    console.log(weatherData.main.temp_min)
    console.log(weatherData.main.temp_max)
    cityElement.textContent = weatherData.name
    weatherTypeElement.textContent = weatherData.weather[0].main
    tempElement.textContent = Math.round((weatherData.main.temp - fahToCelConvConst) * 5/9)
    minTempElement.textContent = Math.round((weatherData.main.temp_min - fahToCelConvConst) * 5/9)
    maxTempElement.textContent = Math.round((weatherData.main.temp_max - fahToCelConvConst) * 5/9)
}
