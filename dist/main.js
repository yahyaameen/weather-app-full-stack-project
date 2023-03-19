const weatherModel = new WeatherModel()
const renderer = new Renderer()
const cityInput = $("#new-city-weather-input")

weatherModel.getCitiesWeatherData()
    .then(citiesWeatherData => {
        renderer.renderCitiesWeatherData(citiesWeatherData)
    })

const displayCityWeather = function() {
    const cityName = cityInput.val()
    weatherModel.getCityWeatherData(cityName)
        .then(cityWeatherData => {
            cityWeatherData.cityFromApi = true
            const citiesWeatherData = [cityWeatherData]
            renderer.renderCitiesWeatherData(citiesWeatherData)
        })
}

$("#show-city-weather").on('click', displayCityWeather)

const addCityWeatherDataToDB = function() {
    const cityName = $(this).siblings(".name").text()
    const cityTemp = parseFloat($(this).siblings(".temp").find(".temp-number").text())
    const cityDescription = $(this).siblings(".description").text()
    const cityIcon = $(this).siblings("img").attr("src")
    const cityWeatherData = {
        name: cityName,
        temp: cityTemp,
        description: cityDescription,
        icon: cityIcon
    }
    weatherModel.addCityWeatherDataToDB(cityWeatherData)
    $(this).addClass('fa-minus').removeClass('fa-plus')
}

$("#cities-weather").on('click', ".fa-plus", addCityWeatherDataToDB)

const removeCityWeatherDataFromDB = function() {
    const cityName = $(this).siblings(".name").text()
    weatherModel.deleteCityWeatherDataFromDB(cityName)
    $(this).closest('.city-weather').remove()
}

$("#cities-weather").on('click', ".fa-minus", removeCityWeatherDataFromDB)