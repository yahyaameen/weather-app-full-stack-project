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
            .then(() => {})
    }
    deleteCityWeatherDataFromDB(cityName) {
        $.ajax({
            url: `weather/${cityName}`,
            type: 'DELETE',
            success: function() {}
        });
        return this.citiesWeatherData
    }
}