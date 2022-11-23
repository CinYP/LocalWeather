//Assiging a unique API to a variable 
const apiKey = 'b91c20d4068f0a4a6d8ec8bd7e3ca3b8'; 
//DOM Elements
//City Search Dom Elements 
const cityInput = document.getElementById('citySearchInput');
const citySearchButton = document.getElementById('citybutton');
const historyEl = document.getElementById('historyitems');

//Fetching coordinates of city value and setting 
function getGeo (){
    const cityValue = cityInput.value;
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=5&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
   
    const latitude = data[0].lat;
    const longitude = data[0].lon;

    //--------------------------------------
    // Local Storage
      // const cityValLS = localStorage.getItem('cityValue') || [];
      // console.log(cityValLS);

      // const myJSON = JSON.stringify(cityValLS);
      // console.log(myJSON);
      // localStorage.setItem("testJSON", myJSON);

      // let cityValLSJASON = JSON.parse(cityValLS);
      // console.log(cityValLSJASON);
      // cityValLSJASON.push(cityValue);
      // if(cityValLSJASON==null) {
      //   cityValLS = [];}
      // localStorage.setItem('city', cityValue);
    
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
  //const todayWeatherEl = document.getElementById('classtoday_weather');
  const cityNameEl = document.getElementById('city-name');
  const todayTemp = document.getElementById('todayTemp');
  const todayWind = document.getElementById('todayWind');
  const todayHumidity = document.getElementById('todayHumidity');
  const tweathericon = document.getElementsByClassName('todayImage');
  //data variables 
 const cityValue = cityInput.value; 
 const temperature = data.list[0].main.temp ; 
 const wind =  data.list[0].wind.speed;
 const humidity = data.list[0].main.humidity;
 //const description = data.list[0].weather[0].description;
 const imageicon = data.list[0].weather[0].icon;
  console.log(imageicon);
 //removing d-none attribute from today weather
 //todayWeatherEl.classList.remove("d-none");

 //Passing data to dynamically display html
 tweathericon.src = `http://openweathermap.org/img/wn/${imageicon}@2x.png`; 
//image link now not working 
 cityNameEl.innerText = `City: ${cityValue}`;
 todayTemp.innerText = `Temperature: ${temperature}`;
 todayWind.innerText = `Wind: ${wind} MPH`;
 todayHumidity.innerText = `Humidity: ${humidity}%`;
};

function fiveDayWeather(data){
//five day weather DOM Elements 
//-----------------Day One
const dayOneTemp = document.getElementById('day1temp');
const dayOneWind = document.getElementById('day1wind');
const dayOneHumidity = document.getElementById('day1humidity');
const dayOneDate = document.getElementById('day1heading');
const dayoneImage = document.getElementById('dayoneimage');
//day one data elements
const tempOneEl = data.list[1].main.temp; 
const humidityOneEl = data.list[1].main.humidity;
const windOneEl = data.list[1].wind.speed;
const dateOne = data.list[1].dt_txt;
const day1image = data.list[1].weather[0].icon;

//-----------------Day Two
const dayTwoTemp = document.getElementById('day2temp');
const dayTwoWind = document.getElementById('day2wind');
const dayTwoHumidity = document.getElementById('day2humidity');
const dayTwoDate = document.getElementById('day2heading');
const dayTwoImage = document.getElementById('daytwoimage');
//data elements
const tempTwoEl = data.list[10].main.temp; 
const humidityTwoEl = data.list[10].main.humidity;
const windTwoEl = data.list[10].wind.speed;
const dateTwo = data.list[10].dt_txt;
const day2image = data.list[10].weather[0].icon;

//-----------------Day Three
const dayThreeTemp = document.getElementById('day3temp');
const dayThreeWind = document.getElementById('day3wind');
const dayThreeHumidity = document.getElementById('day3humidity');
const dayThreeDate = document.getElementById('day3heading');
const dayThreeImage = document.getElementById('daythreeimage');
//data elements
const tempThreeEl = data.list[20].main.temp; 
const humidityThreeEl = data.list[20].main.humidity;
const windThreeEl = data.list[20].wind.speed;
const dateThree = data.list[20].dt_txt;
const day3image = data.list[20].weather[0].icon;

//-----------------Day Four
const dayFourTemp = document.getElementById('day4temp');
const dayFourWind = document.getElementById('day4wind');
const dayFourHumidity = document.getElementById('day4humidity');
const dayFourDate = document.getElementById('day4heading');
const dayFourImage = document.getElementById('dayfourimage');
//data elements
const tempFourEl = data.list[30].main.temp; 
const humidityFourEl = data.list[30].main.humidity;
const windFourEl = data.list[30].wind.speed;
const dateFour = data.list[30].dt_txt;
const day4image = data.list[30].weather[0].icon;

//-----------------Day Five
const dayFiveTemp = document.getElementById('day5temp');
const dayFiveWind = document.getElementById('day5wind');
const dayFiveHumidity = document.getElementById('day5humidity');
const dayFiveDate = document.getElementById('day5heading');
const dayFiveImage = document.getElementById('dayfiveimage');

//data elements
const tempFiveEl = data.list[35].main.temp; 
const humidityFiveEl = data.list[35].main.humidity;
const windFiveEl = data.list[35].wind.speed;
const dateFive = data.list[35].dt_txt;
const day5image = data.list[35].weather[0].icon;

//-------------------------- Day One Passing Data 
//Image goes here
dayoneImage.src = `http://openweathermap.org/img/wn/${day1image}@2x.png`; 
dayOneDate.innerText = `Date: ${dateOne}`;
dayOneTemp.innerText = `Temp: ${tempOneEl}`; 
dayOneWind.innerText = `Wind: ${windOneEl}`;
dayOneHumidity.innerText = `Humidity: ${humidityOneEl}`;
//-------------------------- Day Two Passing Data 
dayTwoImage.src=`http://openweathermap.org/img/wn/${day2image}@2x.png`; 
dayTwoDate.innerText = `Date: ${dateTwo}`;
dayTwoTemp.innerText = `Temp: ${tempTwoEl}`;
dayTwoWind.innerText = `Wind: ${windTwoEl}`
dayTwoHumidity.innerText = `Humidity: ${humidityTwoEl}`;
//-------------------------- Day Three Passing Data 
dayThreeImage.src=`http://openweathermap.org/img/wn/${day3image}@2x.png`;
dayThreeDate.innerText = `Date: ${dateThree}`;
dayThreeTemp.innerText = `Temp: ${tempThreeEl}`;
dayThreeWind.innerText = `Wind: ${windThreeEl}`;
dayThreeHumidity.innerText = `Humidity: ${humidityThreeEl}`;
//-------------------------- Day Four Passing Data 
dayFourImage.src=`http://openweathermap.org/img/wn/${day4image}@2x.png`;
dayFourDate.innerText = `Date: ${dateFour}`;
dayFourTemp.innerText = `Temp: ${tempFourEl}`;
dayFourWind.innerText = `Wind: ${windFourEl}`;
dayFourHumidity.innerText = `Humidity: ${humidityFourEl}`;
//-------------------------- Day Five Passing Data 
dayFiveImage.src=`http://openweathermap.org/img/wn/${day5image}@2x.png`;
dayFiveDate.innerText = `Date: ${dateFive}`;
dayFiveTemp.innerText = `Temp: ${tempFiveEl}`;
dayFiveWind.innerText = `Temp:${windFiveEl}`;
dayFiveHumidity.innerText = `Humidity: ${humidityFiveEl}`;
};

function renderSearchHistory() { 
  console.log('local storage')
  if (searchHistory.length > 0) {
 for (let i = 0; i < searchHistory.length; i++) {
      console.log('creating button....')
    //create for-loop for search history array
 }

}
};
  
  //Event Listener on city search button
  citySearchButton.addEventListener('click', getGeo);

  //Event Listener on the local storage buttons 
  //searchhistoryButtons.addEventListener('click'.getGeo)

