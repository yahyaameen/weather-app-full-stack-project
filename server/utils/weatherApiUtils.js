const WEATHER_API_KEY = "be045b7980da5348690154aec4700ad4"
const filteringWeatherApiData = function(weatherApiData) {
    const iconName = weatherApiData.weather[0].icon
    const filteringWeatherData = {
        name: weatherApiData.name,
        temp: weatherApiData.main.temp,
        description: weatherApiData.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${iconName}.png`
    }
    return filteringWeatherData
}
module.exports = { WEATHER_API_KEY, filteringWeatherApiData }