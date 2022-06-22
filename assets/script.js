var searchBtn = document.querySelector(".btn");
var link = "http://api.openweathermap.org/data/2.5/weather "
var cityNameInput = document.querySelector("#cityNameInput")
var apiKey = "5f87c85e6b408716f553967965133088"
var cityName = document.querySelector("#cityName")
var icon = document.querySelector("#icon")
var date = document.querySelector("#date")
var temperature = document.querySelector("#temperature")
var humidity = document.querySelector("#humidity")
var windSpeed = document.querySelector("#wind-speed")
var uvIndex = document.querySelector("#uv-index")





//the button gets click it retieves the data and appends it onto the page
searchBtn.addEventListener("click", function () {
    getApi(cityNameInput.value)
})



//add card to the page get the value of city(its the current value of the input)
//call get api with city name
//getapi should return a promise
//wait api to resolve 
//when it resolves add card to page should have the info it needs to create a new dom elem.
//use the info to generate a dynamic elem to append to page 

function getApi(cityNameInput) {
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityNameInput + "&appid=" + apiKey;
    console.log(queryUrl)
   
       
     fetch(queryUrl)
        .then(function (response) {
            console.log(response)
            return response.json();

        })
        .then(function (data) {
            console.log(data)
            cityName.innerHTML = "" 
            cityName.append(data.name)
            console.log(cityName)

            temperature.innerHTML = "TEMPERATURE: " + (data.main.temp)
            console.log(temperature)

            humidity.innerHTML = " HUMIDITY: " + (data.main.humidity) + "%"
            console.log(humidity)

            windSpeed.innerHTML = "WIND SPEED: " + (data.wind.speed ) + " MPH"
            console.log(windSpeed)

           

            //uv index vars
            var lon = data.coord.lon
            console.log(lon)
            var lat = data.coord.lat
            console.log(lat)
            var uvQueryUrl ="https://api.openweathermap.org/data/2.5/onecall?lon=" + lon + "&lat=" + lat + "&appid=" + apiKey;
            console.log(uvQueryUrl)
            fetch(uvQueryUrl)
            .then(function(res){
                return res.json()
               
            }) .then(function(uvData){
                console.log(uvData)

                // if (){

                // }
             uvIndex.innerHTML="UV INDEX: " + (uvData.current.uvi)
            })
           
        })

} console.log(getApi)
//uv index vars
// function uvIndex() {
    
//  var lon = response.data.coord.lon
//  console.log(lon)
//  var lat = respons.data.coord.lat
//  console.log(lat)
//  var uvQueryUrl ="http://api.openweathermap.org/data/2.5/weather?lon=" + lon + "&lat=" + lat + "&appid=" + apiKey;
//  console.log(uvQueryUrl)
// }console.log(uvIndex)


//saving data onto local storage



//retrieving data from local storage



