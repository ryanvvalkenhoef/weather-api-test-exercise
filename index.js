const express = require('express');  // import express
const app = express();  // initialize express
const cors = require('cors'); // import cors package
// import our fake weather data
const fakeWeatherData = require('./data.js');
// Enable all CORS requests
app.use(cors());
app.get('/weather', function (req, res) {
// store the query string parameter in cityName variable
  let cityName = req.query.city.toLowerCase();
// Loop through our fake data array
  for (let i = 0; i < fakeWeatherData.length; i++) {
// if no city parameter exists
    if (!cityName) {
      return res.send({"status": "error", "message": "Please enter a city name"})
    } else if (cityName == fakeWeatherData[i].city.toLowerCase()) {
      return res.send(fakeWeatherData[i])
    }
  }
// if city parameter isn't in our fake data set
  res.send({"status": "error", "message": "This city isn't in our database"})
});
app.listen(3000, function () {
  console.log('listening on port 3000...');
})