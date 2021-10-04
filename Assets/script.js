var mainEl = document.querySelector('main')
var weatherToday = document.getElementById('weatherToday')
var cityName = document.getElementById('cityEntry').value;
var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=22a142603e1f1adab5d950df358023bb'
var cityEntryBtn = document.getElementById('cityEntryBtn')

cityEntryBtn.addEventListener('click', getCity);

function getCity(cityName) {
    fetch(queryUrl)
        .then(function (response) {
            console.log(response.json)
            return (response.json())
        })
        .then(function (data) {
            console.log(cityEntry.value);
            console.log(data);
            renderCityName(cityEntry.value)
            renderTemp(data.main.temp)
            renderWind(data.wind.speed)
            renderHumidity(data.main.humidity)
            get5DayForecast(data.coord.lat, data.coord.lon)
        })

    }



function renderCityName(cityName){
    var h1El = document.createElement('h1');
    h1El.textContent = cityName + ' ' + moment().format('MM-DD-YYYY');
    weatherToday.appendChild(h1El);
}

function renderTemp(temp){
    var pEl = document.createElement('p');
    pEl.textContent = 'Temp: ' + Math.floor(temp);
    weatherToday.appendChild(pEl);
}
function renderWind(wind){
    var pEl2 = document.createElement('p');
    pEl2.textContent = 'Wind: ' + wind;
    weatherToday.appendChild(pEl2);
}
function renderHumidity(humidity){
    var pEl3 = document.createElement(pEl3);
    pEl3.textContent = 'Humidity: ' + humidity;
    weatherToday.appendChild(pEl3);

}
function get5DayForecast(lat, lon){
    var queryUrl2 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude={part}&units=imperial&appid=22a142603e1f1adab5d950df358023bb'
    fetch(queryUrl2)
        .then(function (response) {
            return (response.json())
        })   
        .then(function (data) {
        console.log(data)
        
        })
}