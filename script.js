$(document).ready(function() {
    // Function to get weather data
    function getWeather() {
        var city = $('#city-input').val();
        var apiKey = 'c20fc19dca58f1c938fa90b1c4b5be4d'; // Replace with your OpenWeatherMap API key
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;


        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
            var weatherData = 'City: ' + data.name + '<br>' +
                      'Temperature: ' + Math.round(data.main.temp - 273.15) + '°C<br>' +
                      'Feels Like: ' + Math.round(data.main.feels_like - 273.15) + '°C<br>' +
                      'Humidity: ' + data.main.humidity + '%<br>' +
                      'Pressure: ' + (data.main.pressure / 1000).toFixed(2) + ' bar<br>' +
                      'Visibility: ' + (data.visibility / 1000).toFixed(2) + ' km<br>' +
                      'Wind Speed: ' + (data.wind.speed * 3.6).toFixed(2) + ' km/h<br>' +
                      'Wind Direction: ' + data.wind.deg + '°<br>' +
                      'Description: ' + data.weather[0].description;
                $('#weather-result').html(weatherData);
                $('#weather-result').addClass('visible'); // Add the visible class
            },
        });
    }

    // Click event for the button
    $('#get-weather-btn').click(getWeather);

    // Keypress event for the input field to detect the Enter key
    $('#city-input').keypress(function(event) {
        if (event.which == 13) { // 13 is the Enter key
            getWeather();
        }
    });

    // Toggle dark mode
    $('#toggle-dark-mode').click(function() {
        $('body').toggleClass('dark-mode');
    });

    // Clear weather data
    $('#clear-weather-btn').click(function() {
        $('#city-input').val('');
        $('#weather-result').html('');
        $('#weather-result').removeClass('visible'); // Remove the visible class
    });

});
