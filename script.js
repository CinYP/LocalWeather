const apiKey = 'b91c20d4068f0a4a6d8ec8bd7e3ca3b8'; 
const cityButton = document.getElementById('citybutton');
const cityName = document.getElementById('cityname');

//`http://api.openweathermap.org/geo/1.0/direct?q=${cityExample}&limit=5&appid=${apiKey}`

function getGeo (){
 const cityValue = cityName.value 
 //console.log(cityValue);
 fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=5&appid=${apiKey}`)
 .then((response) => response.json())
 .then((data) => {
   
    const latitude = data[0].lat
    const longitude = data[0].lon 
   
 getWeather(latitude, longitude);
});

};

function getWeather(latitude, longitude){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`)
    .then((response) => response.json())
    .then((data) => {
      
     showCurrentWeather(data);
     showPredictedWeather(data);

   });
}

function showCurrentWeather(data){
    //create the elements document.create('<p>')

    //get textcontext to parce the data in 

    //apprend to the contain
};

function showPredictedWeather(data){
    //create a for-loop 
    //start at 7 and we need 7 increments 
}

cityButton.addEventListener('click', getGeo)
