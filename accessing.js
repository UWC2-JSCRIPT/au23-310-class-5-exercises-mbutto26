// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
head2 = document.getElementById(`weather-head`);
head2.innerText = `February 10 Weather Forecast, Seattle`;

// Change the styling of every element with class "sun" to set the color to "orange"

// Change the class of the second <li> from to "sun" to "cloudy"
const weather = document.querySelector(`li.sun`);
weather.classList.add(`li.cloudy`);
