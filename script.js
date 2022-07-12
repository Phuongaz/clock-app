function renderClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').innerHTML = strTime;
    setTimeout(renderClock, 1000);
}

function renderWeather() {
    var apiKey = 'fe8d8c65cf345889139d8e545f57819a';
    var weather = new XMLHttpRequest();
    weather.open('GET', 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&q=Long An&units=metric', true);
    weather.send();
    weather.onload = function () {
        var data = JSON.parse(this.response);
        var test_icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        document.getElementById("icon-city").src = test_icon;
        document.getElementById("temp").innerHTML = data.main.temp + "&deg;C";
    }
}

function renderDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    document.getElementById('date').innerHTML = day + '/' + month + '/' + year;
}