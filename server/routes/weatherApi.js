const express = require('express')
const axios = require('axios')
const router = express.Router()
const City = require('../models/City')
const weatherApiUtils = require('../utils/weatherApiUtils')

router.get('/weather', function(req, res) {
    City.find({})
        .then(function(cities) {
            res.send(cities)
        })
})

router.get('/weather/:cityName', function(req, res) {
    const cityName = req.params.cityName
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&APPID=${weatherApiUtils.WEATHER_API_KEY}`)
        .then(result => {
            const filteringWeatherData = weatherApiUtils.filteringWeatherApiData(result.data)
            res.send(filteringWeatherData)
        })
})

router.post('/weather', function(req, res) {
    let city = new City(req.body)
    city.save().then(function() {
        res.status(201).send()
    })
})

router.delete('/weather/:cityName', function(req, res) {
    const cityName = req.params.cityName
    City.deleteOne({ name: cityName })
        .then(function(city) {
            res.status(204).send(`${city.name} removed`)
        })
})


module.exports = router