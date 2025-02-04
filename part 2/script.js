// Select text input
const textInput = document.getElementById('city');
// Store the value of the input in a variable
let cityName = textInput.value;
// When an input event is triggered update cityName
textInput.addEventListener('input', function(e) {
  cityName = e.target.value;
})
// Select our form
const form = document.querySelector('form');
// When form is submitted print 'submitted' to the browser console
form.addEventListener('submit', function(e) {
  // prevent form default behavior
  e.preventDefault();
// make request to our API
  axios.get('http://localhost:3000/weather/?city=' + cityName)
    .then(function(response) {
      // select elements
      let city = document.querySelector('.cityName');
      let celsius = document.querySelector('.celsius');
      let fahrenheit = document.querySelector('.fahrenheit');
      let errorMessage = document.querySelector('.error-message');
if (response.data.city) {
        city.innerHTML = 'City: ' + response.data.city;
        celsius.innerHTML = 'Temperature (C): ' + response.data['temperature (C)'];
        fahrenheit.innerHTML = 'Temperature (F): ' + response.data['temperature (F)'];
      } else {
        errorMessage.innerHTML = "This city is not in our database"
      }
    })
    .catch(function(error) {
      console.log(error);
    })
// clear input
  textInput.value = '';
})