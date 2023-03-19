class Renderer {

    renderCitiesWeatherData(citiesWeather) {
        const source = $('#cities-weather-template').html()
        const template = Handlebars.compile(source)
        const citiesWeatherData = {
            citiesWeather: citiesWeather
        }
        if (citiesWeather.length === 1) {
            if (citiesWeather[0].cityFromApi) {
                citiesWeather[0].city = true
            } else {
                citiesWeather[0].cities = true
            }
        } else {
            for (let cityWeather of citiesWeather) {
                cityWeather.cities = true
            }
        }
        const newHTML = template(citiesWeatherData)
        $('#cities-weather').append(newHTML)
    }
}