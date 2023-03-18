class WeatherModel {
    constructor() {
        this.citiesWeatherData = []
    }

    getCitiesWeatherData() {
        return $.get("/weather")
            .then(citiesWeatherDataResult => {
                this.citiesWeatherData = citiesWeatherDataResult
                return this.citiesWeatherData
            })
    }

    getCityWeatherData(cityName) {
        if (cityName !== "") {
            return $.get(`weather/${cityName}`)
        }
    }

    addCityWeatherDataToDB(cityWeatherData) {
        $.post("weather/", cityWeatherData)
            .then(cityWeatherDataResult => {
                return cityWeatherData
            })
    }
    deleteCityWeatherDataFromDB(cityName) {
        $.ajax({
            url: `weather/${cityName}`,
            type: 'DELETE',
            success: function(result) {
                // Do something with the result
            }
        });
        return this.citiesWeatherData
    }
}