var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    var jsonData;
    request('http://api.openweathermap.org/data/2.5/weather?q=London,us&appid=' + config.appid, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            jsonData = JSON.parse(body);
        }
        request('https://pixabay.com/api/?q=London&key=' + config.imageKey, function(error, response, body) {
            console.log("here");
            imageJsonData = JSON.parse(body);
            imageDataString = body;
            res.render('index', {
                title: 'Weather sApp',
                weatherData: jsonData.weather,
                data: jsonData,
                image: imageJsonData,
                imgStr: imageDataString
            });
        });
    });

});

module.exports = router;
