var mainEl = document.querySelector('main')
var weatherToday = document.getElementById('weatherToday')
var lat;
var lon;



cityEntryBtn.addEventListener('click', function (event) {
    var cityName = document.getElementById('cityEntry').value;
    var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=22a142603e1f1adab5d950df358023bb'
    fetch(queryUrl)
        .then(function (response) {
            return (response.json())
        })
        .then(function (data) {
            console.log(cityName)
            console.log(data);
            var cityName = data.name;
            var h1El = document.createElement('h1')
            h1El.textContent = cityName + ' ' + moment().format('MM-DD-YYYY')
            weatherToday.appendChild(h1El);
            var temp = data.main.temp;
            console.log(temp)
            var pEl = document.createElement('p');
            pEl.textContent = 'Temp: ' + Math.floor(temp);
            weatherToday.appendChild(pEl);
            var wind = data.wind.speed;
            var pEl2 = document.createElement('p')
            pEl2.textContent = 'Wind: ' + wind;
            weatherToday.appendChild(pEl2);
            var humidity = data.main.humidity;
            var pEl3 = document.createElement(pEl3)
            pEl3.textContent = 'Humidity: ' + humidity;
            weatherToday.appendChild(pEl3);
            



        })
})

