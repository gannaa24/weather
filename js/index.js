var searchInput= document.getElementById('inputData')

getData('cairo')
document.addEventListener('input', function(){
    searchValue=searchInput.value;
    console.log(searchInput.value);

   getData(searchValue)
    
})





async function getData(searchValue = 'cairo') {
    let httpReq = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=504f54b1e47f47dcad1220923242012&q=${searchValue}&days=3&aqi=no&alerts=no`)
    let httpReqData = await httpReq.json()
    console.log(httpReqData.forecast.forecastday[0].day.condition.icon);
    document.getElementById('weatherData').innerHTML = `<div class="container row m-auto rounded-3 opacity-75">
        <div class="today text-white dark col-4  ">
            <div class="header d-flex justify-content-between">
                <h4 class="dark">Today</h4>
                <span id="date">${httpReqData.forecast.forecastday[0].date}</span>
            </div>
            <div class="location text-capitalize"><p id="location">${httpReqData.location.name}</p></div>
            <div class="degree display-3 text-center fw-bolder" id="degree"><p>${httpReqData.forecast.forecastday[0].day.avgtemp_c}°C</p></div>
            <div class="custom">
                <img src="https:${httpReqData.current.condition.icon}" alt="" id="cond-img">
                    <p class="main-color" id="cond-txt">${httpReqData.forecast.forecastday[0].day.condition.text}</p></div>
            <span>
                <img src="./imgs/icon-umberella.png" alt="">
                    <span id="precep">${httpReqData.forecast.forecastday[0].day.daily_chance_of_rain}%</span>
            </span>
            <span>
                <img src="./imgs/icon-wind.png" alt="">
                    <span id="wind">${httpReqData.forecast.forecastday[0].day.maxwind_kph}km/hr</span>
            </span>
            <span>
                <img src="./imgs/icon-compass.png" alt="">
                    <span id="wind-dir">east</span>
            </span>
        </div>
        <div class="today text-white dark col-4 d-flex flex-column align-items-center mini-dark">
            <div class="header d-flex justify-content-center">
                <h4 class=" text-capitalize">sunday</h4>
            </div>
            <div class="degree display-5 text-center py-3">
                <img src="https:${httpReqData.forecast.forecastday[1].day.condition.icon}" alt="">
                    <p>${httpReqData.forecast.forecastday[1].day.avgtemp_c}°C</p>
            </div>
            <div class="custom">
                <p class="main-color">${httpReqData.forecast.forecastday[1].day.condition.text}</p>
            </div>
        </div>
        <div class="today text-white dark col-4 d-flex flex-column align-items-center dark">
            <div class="header d-flex justify-content-center">
                <h4 class="">Monday</h4>
            </div>
            <div class="degree display-5 text-center py-3">
                <img src="https:${httpReqData.forecast.forecastday[2].day.condition.icon}" alt="">
                    <p>${httpReqData.forecast.forecastday[2].day.avgtemp_c}°C</p>
            </div>
            <div class="custom">
                <p class="main-color">${httpReqData.forecast.forecastday[2].day.condition.text}</p>
            </div>
        </div>
    </div>`
}






