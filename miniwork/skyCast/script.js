// Constants for the base URL, API key, and API host
const BASE_URL = "https://open-weather13.p.rapidapi.com/city/";
const API_KEY = '39507d026amsh728e93906c1c555p1b839cjsnf8f650992b1e';
const API_HOST = 'open-weather13.p.rapidapi.com';

// Options for the fetch request, including headers with API key and host
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST
    }
}

// Asynchronous function to fetch weather data for a given city
const getWeatherData = async (city) => {
    try {
        // Making an asynchronous fetch request to the OpenWeather API with the specified city and options
        const response = await fetch(`${BASE_URL}${city}`, options);

        // Parsing the JSON response received from the API
        const result = await response.json();

        // Checking if the response status is OK (HTTP status code 200)
        if (response.ok) {
            // If successful, call the function to display weather data on the webpage
            showWeatherData(result);
        } else {
            // If not successful, log an error message with the API error code and message
            console.error(`Error: ${result.cod} - ${result.message}`);
        }
    } catch (error) {
        // Catching any errors that may occur during the fetch or parsing process
        console.error("Error fetching the weather data: ", error);
    }
}

// Function to initiate a weather search based on user input
const searchCity = () => {
    // Retrieving user input from the city input field
    const cityInput = document.getElementById('city');
    
    // Trimming any leading or trailing whitespaces from the entered city name
    const city = cityInput.value.trim();

    // Checking if the entered city is valid before making the API call
    if (isValidCity(city)) {
        // If valid, call the function to fetch weather data for the entered city
        getWeatherData(city);
    } else {
        // If not valid, log an error message in the console
        console.error("Please enter a valid city name.");
    }
}

// Function to validate if the entered city name is not empty
const isValidCity = (city) => {
    // Checking if the length of the entered city name is greater than 0
    return city.length > 0;
}

// Function to display weather data on the webpage
const showWeatherData = (weatherData) => {
    // Retrieving HTML elements to update with weather data
    const cityElement = document.getElementById("city-name");
    const weatherTypeElement = document.getElementById("weather-type");
    const tempElement = document.getElementById("temp");
    const minTempElement = document.getElementById("min-temp");
    const maxTempElement = document.getElementById("max-temp");

    // Updating HTML elements with relevant weather information
    cityElement.textContent = weatherData.name;
    weatherTypeElement.textContent = weatherData.weather[0].main;

    // Converting and updating temperature values to Celsius
    tempElement.textContent = convertToCelsius(weatherData.main.temp);
    minTempElement.textContent = convertToCelsius(weatherData.main.temp_min);
    maxTempElement.textContent = convertToCelsius(weatherData.main.temp_max);
}

// Function to convert temperature from Fahrenheit to Celsius
const convertToCelsius = (fahrenheit) => {
    // Constant for Fahrenheit to Celsius conversion
    const fahToCelConvConst = 32;

    // Formula to convert Fahrenheit to Celsius and rounding to the nearest whole number
    return Math.round((fahrenheit - fahToCelConvConst) * 5 / 9);
}
