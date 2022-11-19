//Assiging a unique API to a variable 
const apiKey = 'b91c20d4068f0a4a6d8ec8bd7e3ca3b8'; 
//DOM Elements
//City Search Dom Elements 
const cityInput = document.getElementById('citySearchInput');
const citySearchButton = document.getElementById('citybutton');
const historyEl = document.getElementById('historyitems');
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
        fiveDayWeather(data);
     })
};

function todayWeather(data){
 //today's weather DOM Elements - local scope 
  const cityNameEl = document.getElementById('city-name');
  const todayTemp = document.getElementById('todayTemp');
  const todayWind = document.getElementById('todayWind');
  const todayHumidity = document.getElementById('todayHumidity');
  const tweathericon = document.getElementById('todayImage');
  //data variables 
 const cityValue = cityInput.value; 
 //const date = ""; ----- come back to this 
 const temperature = data.list[0].main.temp ; 
 const wind =  data.list[0].wind.speed;
 const humidity = data.list[0].main.humidity;
 const clearSky = '<i class="fa-light fa-stars"></i>';

  console.log(temperature, wind, humidity);

 cityNameEl.innerText = `City: ${cityValue}`;
 todayTemp.innerText = `Temperature: ${temperature}`;
 todayWind.innerText = `Wind: ${wind} MPH`;
 todayHumidity.innerText = `Humidity: ${humidity}%`;

 console.log(data.list[0].weather[0].description);
};

function fiveDayWeather(data){
//five day weather DOM Elements 
//-----------------Day One
const dayOneTemp = document.getElementById('day1temp');
let dayOneWind = document.getElementById('day1wind');
let dayOneHumidity = document.getElementById('day1humidity');
const dayOneDate = document.getElementById('day1heading');
//data elements
const tempOneEl = data.list[1].main.temp; 
const humidityOneEl = data.list[1].main.humidity;
const windOneEl = data.list[1].wind.speed;
const dateOne = data.list[1].dt_txt;
//-----------------Day Two
const dayTwoTemp = document.getElementById('day2temp');
const dayTwoWind = document.getElementById('day2wind');
const dayTwoHumidity = document.getElementById('day2humidity');
const dayTwoDate = document.getElementById('day2heading');
//data elements
const tempTwoEl = data.list[10].main.temp; 
const humidityTwoEl = data.list[10].main.humidity;
const windTwoEl = data.list[10].wind.speed;
const dateTwo = data.list[10].dt_txt;

//-----------------Day Three
const dayThreeTemp = document.getElementById('day3temp');
const dayThreeWind = document.getElementById('day3wind');
const dayThreeHumidity = document.getElementById('day3humidity');
const dayThreeDate = document.getElementById('day3heading');
//data elements
const tempThreeEl = data.list[20].main.temp; 
const humidityThreeEl = data.list[20].main.humidity;
const windThreeEl = data.list[20].wind.speed;
const dateThree = data.list[20].dt_txt;

//-----------------Day Four
const dayFourTemp = document.getElementById('day4temp');
const dayFourWind = document.getElementById('day4wind');
const dayFourHumidity = document.getElementById('day4humidity');
const dayFourDate = document.getElementById('day4heading');
//data elements
const tempFourEl = data.list[30].main.temp; 
const humidityFourEl = data.list[30].main.humidity;
const windFourEl = data.list[30].wind.speed;
const dateFour = data.list[30].dt_txt;

//-----------------Day Five
const dayFiveTemp = document.getElementById('day5temp');
const dayFiveWind = document.getElementById('day5wind');
const dayFiveHumidity = document.getElementById('day5humidity');
const dayFiveDate = document.getElementById('day5heading');
//data elements
const tempFiveEl = data.list[35].main.temp; 
const humidityFiveEl = data.list[35].main.humidity;
const windFiveEl = data.list[35].wind.speed;
const dateFive = data.list[35].dt_txt;

//-------------------------- Day One Passing Data 
//Image goes here 
dayOneDate.innerText = `Date: ${dateOne}`;
dayOneTemp.innerText = `Temp: ${tempOneEl}`; 
dayOneWind.innerText = `Wind: ${windOneEl}`;
dayOneHumidity.innerText = `Humidity: ${humidityOneEl}`;
console.log(`day one - Wind: ${windOneEl}`);
console.log(`day one -Humidity: ${humidityOneEl}`);

//-------------------------- Day Two Passing Data 
//Image goes here 
dayTwoDate.innerText = `Date: ${dateTwo}`;
dayTwoTemp.innerText = `Temp: ${tempTwoEl}`;
console.log(`day two - Wind: ${windTwoEl}`);
console.log(`day two -Humidity: ${humidityTwoEl}`);

//-------------------------- Day Three Passing Data 
//Image goes here 
dayThreeDate.innerText = `Date: ${dateThree}`;
dayThreeTemp.innerText = `Temp: ${tempThreeEl}`;
console.log(`day three - Wind: ${windThreeEl}`);
console.log(`day three -Humidity: ${humidityThreeEl}`);

//-------------------------- Day Four Passing Data 
//Image goes here 
dayFourDate.innerText = `Date: ${dateFour}`;
dayFourTemp.innerText = `Temp: ${tempFourEl}`;
console.log(`day four - Wind: ${windFourEl}`);
console.log(`day four -Humidity: ${humidityFourEl}`);

//-------------------------- Day Five Passing Data 
//Image goes here 
dayFiveDate.innerText = `Date: ${dateFive}`;
dayFiveTemp.innerText = `Temp: ${tempFiveEl}`;
console.log(`day five - Wind: ${windFiveEl}`);
console.log(`day five -Humidity: ${humidityFiveEl}`);

};
/*
function renderSearchHistory() { 
  if (searchCityHistory.length > 0) {
      getWeather(searchHistory[searchHistory.length -1])
      //create for-loop for search history array 
  }};
  */
  
  //Event Listener on 
  citySearchButton.addEventListener('click', getGeo);