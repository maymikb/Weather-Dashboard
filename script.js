var textArea= $("#city")
var button=$("#search")
var h1 = $("#titleHeader")
 var temp=$("#temp")
 var wind= $("#wind")
 var humidity=$("#humidity")
 
 button.on("click", function(){
     var weatherApiKey = "286d713499b8262e987f2093acdccf8a";

     var cityName = textArea.val();

     fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + weatherApiKey + "&units=imperial")
     .then(res => res.json())
     .then(data => {
        console.log(data);

        var currentDate = dayjs().format("(MMMM DD, YYYY)")

        h1.text(data.name + " " + currentDate)

        temp.text("Temp: " + data.main.temp)

        wind.text("Wind Speed: " + data.wind.speed)

        humidity.text("Humidity: " + data.main.humidity)
     })

 })





// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// var city;
fetch("api.openweathermap.org/data/2.5/forecast? lat={lat}&lon={lon}  &appid={API key}" + "&appid=" + dailyApiKey + "&units=imperial")


// HERE
var dailyApiKey=

.then(res => res.json())
.then(data => {
   console.log(data);

   var currentDate = dayjs().format("(MMMM DD, YYYY)")

   h1.text(data.name + " " + currentDate)

   temp.text("Temp: " + data.main.temp)

   wind.text("Wind Speed: " + data.wind.speed)

   humidity.text("Humidity: " + data.main.humidity)
})







// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
// //current weather data API