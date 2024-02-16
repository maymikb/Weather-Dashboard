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

// let oakland= 37.8044° N, 122.2712° W

let lat = 37.8044
let lon = 122.2712

// let string = `sdfsdfsdkjfbsdfjkb-44545${lon}sdsdsdsd`


// 'https://api.openweathermap.org/data/2.5/forecast?lat=37&lon=122&appid=286d713499b8262e987f2093acd'

// HERE
var dailyApiKey= '126f4eec1a5f8dace5eda63909e000e0'
// fetch("api.openweathermap.org/data/2.5/forecast?lat={"+lat+"}&lon={"+lon+"}&appid={"+dailyApiKey+"}")

fetch('https://api.openweathermap.org/data/2.5/forecast?lat=37.8044&lon=-122.2712&appid=286d713499b8262e987f2093acdccf8a')
.then(res => res.json())
.then(data => {
   console.log('data: ', data)
   const cityName = data.city.name
   
   let filteredData = data.list.filter(e=>{
      return e.dt_txt.includes('21:00:00')
   })
   filteredData.forEach((e, index)=>{
      // variables
      console.log('e.weather: ', e.weather)
      let icon = e.weather[0].icon
      console.log('icon: ', icon)
      let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
      console.log('icon url: ', iconUrl)
      let dateComplete = e.dt_txt.split(' ')[0]
      console.log('dateComplete:', dateComplete )
      let year = dateComplete.split('-')[0]
      let month = dateComplete.split('-')[1]
      let dayNum = dateComplete.split('-')[2]
      console.log(month+'/'+ dayNum+'/'+year)

      let dateValue = month+'/'+ dayNum+'/'+year
      // let year = 
      const day = index+1
      const windSpeed = e.wind.speed
      const humidity = e.main.humidity
      const temp = e.main.temp

      // element references
      const headerParentClassList = $(`.day`)
      let header = $(headerParentClassList[index]).find('h5')[0]
      header.innerText = dateValue;
      const cardHeader = $(`.cardheader`)[index]

      let image = new Image();
      image.src = iconUrl
      cardHeader.append(image)

      console.log('card header: ', cardHeader)
      
      ///const header = $(headerParentClassList[index] `h5`)

      console.log('header element: ', header)
      // const header = $(`#day${day}-header`)
      // const parent = $(`#day${day}`)
      const tempElement = $(`#temp${index}`)
      console.log('temp element: ', tempElement)
      tempElement.text(`temp: ${temp}`)

      const windSpeedElement = $(`#day${day} .wind`)

      windSpeedElement.text(`wind speed: ${windSpeed}`)

      const humidityElement = $(`#day${day} .humidity`)

      humidityElement.text(`humidity: ${humidity}`)
      // logic
      // header.text(dateValue)
   })
   console.log('filteredData', filteredData)

   console.log('API repsonse: ', data);

   var currentDate = dayjs().format("(MMMM DD, YYYY)")

   h1.text(data.name + " " + currentDate)

   temp.text("Temp: " + data.main.temp)

   wind.text("Wind Speed: " + data.wind.speed)

   humidity.text("Humidity: " + data.main.humidity)
})

// 0 = midnight
// 8 = last datapoint of the day





//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
// //current weather data API