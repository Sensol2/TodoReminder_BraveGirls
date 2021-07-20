const API_KEY = "864d2d82bb75047f35550bdb13d3e0e7";
let weatherIcon = { 
    '01d' : 'fa-sun',
    '02d' : 'fa-cloud-sun',
    '03d' : 'fa-cloud',
    '04d' : 'fa-cloud-meatball',
    '10n' : 'fa-cloud-sun-rain',
    '10d' : 'fa-cloud-showers-heavy',
    '11d' : 'fa-poo-storm',
    '13d' : 'fa-snowflake',
    '50d' : 'fa-smog',
    '01n' : 'fa-sun',
    '02n' : 'fa-cloud-sun',
    '03n' : 'fa-cloud',
    '04n' : 'fa-cloud-meatball',
    '10n' : 'fa-cloud-sun-rain',
    '10n' : 'fa-cloud-showers-heavy',
    '11n' : 'fa-poo-storm',
    '13n' : 'fa-snowflake',
    '50n' : 'fa-smog' 
};

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in " + lat + ", " + lng)

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    console.log(url)
    fetch(url).then(response => response.json()).then(data => {
        const icon = document.querySelector("#weather > i");
        const weather = document.querySelector("#weather > span:nth-child(2)");
        const city = document.querySelector("#weather > span:nth-child(4)");
        const iconIndex =  data.weather[0].icon;
        console.log(iconIndex);

        icon.classList.add('fas', weatherIcon[iconIndex]);
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        city.innerText = data.name;
    });
}

function onGeoError(){
    alert("Can't find you. No wether for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);