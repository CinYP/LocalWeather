//Assiging a unique API to a variable 
const apiKey = 'b91c20d4068f0a4a6d8ec8bd7e3ca3b8'; 

//DOM Elements
const cityButton = document.getElementById('citybutton');
const cityName = document.getElementById('city-name');
const clearEl = document.getElementById("clear-history");
const currentPicEl = document.getElementById("");
const currentTempEl = document.getElementById("temperature")
const currentHumidityEl = document.getElementById("humidity");
const currentWindEl = document.getElementById("wind-speed");
const currentUVEl = document.getElementById("UV-index");
const searchHistoryEl = document.getElementById("search-history")
let fiveDayEl = document.getElementById("");
let todaysWeatherEl = document.getElementById("");
let searchHistory = JSON.parse(localStorage.getItem("search")) || []; 




//`http://api.openweathermap.org/geo/1.0/direct?q=${cityExample}&limit=5&appid=${apiKey}`

function getGeo (){
    const cityValue = cityName.value 
   // const cityValue = Atlanta;
 console.log(cityValue);
 //fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=5&appid=${apiKey}`)
 fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=5&appid=${apiKey}`)
 .then((response) => response.json())
 .then((data) => {
   
    const latitude = data[0].lat
    const longitude = data[0].lon 
   
  //console.log(data)
  //debugging

    localStorage.setItem("search", JSON.stringify(searchHistory))

 
   getWeather(latitude, longitude);
 
})
//.catch(error => console.log(error));
//debugging

};

function getWeather(latitude, longitude){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`)
    .then((response) => response.json())
    .then((data) => { 

    console.log(data);
      //console log for debugging 
      
     //showCurrentWeather(data);
     //showPredictedWeather(data);

   });
}

function showCurrentWeather(data){
    todaysWeatherEl.classList.remove("d-none");

    const currentDate = new Date(response.data.dt * 1000);
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    cityName.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ")";

    let weatherPic = response.data.weather[0].icon; 
    currentPicEl.setAttribute("alt", response.data.weather[0].description);

    currentTempEl.innerHTML = "Temperature:" + k2f(response.data.main.temp) + "&#176F";

    currentHumidityEl.innerHTML = "Humidity:" + response.data.main.humidity + "%";

    currentWindEl.innerHTML = "Wind Speed: " + response.data.wind.speed + "MPH";
    //create the elements document.create('<p>')

    //get textcontext to parce the data in 

    //apprend to the contain
};

function showPredictedWeather(data){
    //create a for-loop 
    //start at 7 and we need 7 increments 
}

function searchCityHistory() {
    searchHistoryEl.innerHTML = ""; 
    for( let i=0; i< searchHistory.length; i++){
        const historySearchCity = document.createElement("input");
        historyItem.setAttribute("type", "text");
        historyItem.setAttribute("readonly", true);
        historyItem.setAttribute("class", "form-control d-block bg-white");
        historyItem.setAttribute("value", searchHistory[i]);
        historyItem.addEventListener("click", function(){
            //getWeather(historyItem.value);
        })
        searchHistoryEl.append(historyItem);
    }
}

function renderSearchHistory() { 
if (searchCityHistory.length > 0) {
    getWeather(searchHistory[searchHistory.length -1])
}}

cityButton.addEventListener('click', getGeo)


//Clear history button event listener 
searchHistoryEl.addEventListener("click", function() {
    localStorage.clear();
    searchHistory = [];
    renderSearchHistory();
})

