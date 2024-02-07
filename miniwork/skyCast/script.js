const url = 'https://open-weather13.p.rapidapi.com/city/New%20York'
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '39507d026amsh728e93906c1c555p1b839cjsnf8f650992b1e',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
}

const getWeatherInfo = async () => {

    try {
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

getWeatherInfo()