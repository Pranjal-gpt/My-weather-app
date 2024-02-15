const container = document.querySelector('.container');
const search = document.querySelector('.bx-search');
const weatherBox = document.querySelector('.weatherBox');
const weatherDetails = document.querySelector('.weatherDetails');

search.addEventListener('click', () => {
    console.log("search clicked")
    const APIKey = '12b74f148c6e9eb83c472be3141a534c';
    const city = document.querySelector('#city').value;
console.log(city);
    if (city == '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=`+APIKey).then(response => response.json()).then(json => {
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        // const temp_min = document.querySelector('.temp-min');
        const feels_like = document.querySelector('.feels-like');
        // const temp_max = document.querySelector('.temp-max');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.humidity-amount');
        const wind = document.querySelector('.wind-speed');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;
            case 'Rain':
                image.src = 'images/rain.png';
                break;
            case 'Snow':
                image.src = 'images/snow.png';
                break;
            case 'Clouds':
                image.src = 'images/cloud.png';
                break;
            case 'Mist':
                image.src = 'images/mist.png';
                break;
            case 'Haze':
                image.src = 'images/haze.png';
                break;

            default:
                image.src='images/snow.jfif';
                console.log(json.weather[0].main);                
        }
        console.log(json.weather[0].main);
        // console.log(json.main.temp_min);
        console.log(json.main.temp);
        // console.log(json.main.temp_max);
        console.log(json.main.feels_like);
        console.log(json.weather[0].description);
        console.log(json.main.humidity);
        console.log(json);

       
        temperature.innerHTML=json.main.temp+"°C";
        // temp_min.innerHTML=json.main.temp+"°C";
        feels_like.innerHTML=json.main.feels_like+" °C";
        // temp_max.innerHTML=json.main.temp+"°C";
        description.innerHTML=json.weather[0].description;
        humidity.innerHTML=json.main.humidity+"%";
        wind.innerHTML=json.wind.speed+"km/h"

    });
});