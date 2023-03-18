class Renderer {

    renderCityWeatherData(cityWeather) {
        const source = $('#city-weather-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(cityWeather)
        $('#cities-weather').append(newHTML)
    }

    renderCitiesWeatherData(citiesWeather) {
        $('#cities-weather').empty()
        const source = $('#cities-weather-template').html()
        const template = Handlebars.compile(source)
        const citiesWeatherData = {
            citiesWeather: citiesWeather
        }
        const newHTML = template(citiesWeatherData)
        $('#cities-weather').append(newHTML)
    }
}