var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(config.appid);
  var jsonData;
  request('http://api.openweathermap.org/data/2.5/weather?q=London,us&appid='+config.appid, function (error, response, body) {
  if (!error && response.statusCode == 200) {
      jsonData = body;
  }
  console.log(jsonData);
  res.render('index', { title: 'Weather sApp', data: jsonData});

});

});

module.exports = router;
