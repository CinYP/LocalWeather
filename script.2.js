//Assiging a unique API to a variable 
const apiKey = 'b91c20d4068f0a4a6d8ec8bd7e3ca3b8'; 
//DOM Elements
//City Search Dom Elements 
const cityInput = document.getElementById('citySearchInput');
const citySearchButton = document.getElementById('citybutton');
const historyEl = document.getElementById('historyitems');
//today's weather DOM Elements
const todayTemp = document.getElementById('todayTemp');
const todayWind = document.getElementById('todayWind');
const todayHumidity = document.getElementById('todayHumidity');
const tweathericon = document.getElementById('todayImage');
//five day weather DOM Elements 
const fiveDayWeatherCard = document.getElementById('fiveD-content');
const dayOneOfFive = document.getElementById('dayOne');
const dayTwoOfFive = document.getElementById('dayTwo');
const dayThreeOfFive = document.getElementById('dayThree');
const dayFourOfFive = document.getElementById('dayFour');
const dayFiveOfFive = document.getElementById('dayFive');
//Search history 
let searchHistory = [];

//Fetching coordinates of city value and setting 
function getGeo (){
    const cityValue = cityInput.value;
    //fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=5&appid=${apiKey}`)
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=5&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
   
    const latitude = data[0].lat
    const longitude = data[0].lon 

    //--------Revisit this ---------
    //localStorage.setItem("search", JSON.stringify(searchHistory)) 
    searchHistory.push(cityValue);
    
    getWeather(latitude, longitude);
}) 
}; 

//Fetching data using Latitude and Longitude from the city value 
function getWeather(latitude, longitude){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`)
    .then((response) => response.json())
    .then((data) => { 
        const temperature = data.list[0]
        console.log(data);
        todayWeather(data);
        //fiveDayWeather(data);
     })
};

function todayWeather(data){
 const cityValue = cityInput.value; 
 //const date = ""; 
 const temperature = data.list[0].main.temp ; 
 const wind =  data.list[0].wind.speed;
 const humidity = data.list[0].main.humidity;
  console.log(temperature, wind, humidity);


  cityInput.innerText(cityValue);

};
/*
function fiveDayWeather(data){

}

function renderSearchHistory() { 
  if (searchCityHistory.length > 0) {
      getWeather(searchHistory[searchHistory.length -1])
      //create for-loop for search history array 
  }};
  */
  
  //Event Listener on 
  citySearchButton.addEventListener('click', getGeo);