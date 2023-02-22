
var httpReq = new XMLHttpRequest;
httpReq.open("GET", `https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=cairo&days=3`);
httpReq.send()
httpReq.addEventListener("readystatechange", function () {
    if (httpReq.readyState == 4 && httpReq.status == 200) {
        let location = JSON.parse(httpReq.response).location.name
        // let localTime = JSON.parse(httpReq.response).location.localtime
        let degree = JSON.parse(httpReq.response).current.temp_c
        let array = JSON.parse(httpReq.response).forecast.forecastday
        let fDay = array[0]
        let secDay = array[1]
        let thirdDay = array[2]
        let date = new Date(fDay.date)
        let allDayes = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Satueday'];
        let allMonths = ["January", 'February', 'march', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let day = date.getDay()
        let nDate = date.getDate()
        let month = date.getMonth()
        let condition = JSON.parse(httpReq.response).current.condition.text
        var wIcon = JSON.parse(httpReq.response).current.condition.icon

        document.getElementById("location1").innerHTML = location
        document.querySelector(".day").innerHTML = allDayes[day]
        document.querySelector(".month").innerHTML = nDate + allMonths[month]
        document.querySelector(".number span").innerHTML = degree
        document.querySelector(".sun").innerHTML = condition
        document.querySelector(".weathIcon  ").innerHTML = `<img src="https:${wIcon}" class="w-100" alt="" >`
      //seconed day//////////////
      let date2 = new Date(secDay.date)
        let allDayes2 = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Satueday'];
        let day2 = date2.getDay()
      document.querySelector(".day2").innerHTML = allDayes2[day2]
      document.querySelector(".number1 span").innerHTML = secDay.day.maxtemp_c
      document.querySelector(".number2 span").innerHTML = secDay.day.mintemp_c
      console.log(secDay.day.condition.icon);
      document.querySelector(".weathIcon2").innerHTML = `<img src="https:${secDay.day.condition.icon}" class="w-25" alt="" >`
      document.querySelector(".sun2").innerHTML = secDay.day.condition.text
      //third day//////////
      let date3 = new Date(thirdDay.date)
        let allDayes3 = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Satueday'];
      
        let day3 = date3.getDay()
      document.querySelector(".day3").innerHTML = allDayes3[day3]
      document.querySelector(".number3 span").innerHTML = thirdDay.day.maxtemp_c
      document.querySelector(".number4 span").innerHTML = thirdDay.day.mintemp_c
      document.querySelector(".weathIcon3").innerHTML = `<img src="https:${thirdDay.day.condition.icon}" class="w-25" alt="" >`
      document.querySelector(".sun3").innerHTML = secDay.day.condition.text
    
    }
    
})

function getweather() {
    document.getElementById("search").addEventListener("input", function () {
        var findInput = document.querySelector("#search").value
        var httpReq = new XMLHttpRequest;
        httpReq.open("GET", `https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${findInput}&days=3`);
        httpReq.send()
        httpReq.addEventListener("readystatechange", function () {
            if (httpReq.readyState == 4 && httpReq.status == 200) {
                let location = JSON.parse(httpReq.response).location.name
                let localTime = JSON.parse(httpReq.response).location.localtime
                let degree = JSON.parse(httpReq.response).current.temp_c
                let array = JSON.parse(httpReq.response).forecast.forecastday
                let secDay = array[1]
                let thirdDay = array[2]
                let date = new Date(localTime)
                let allDayes = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Satueday'];
                let allMonths = ["January", 'February', 'march', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                let day = date.getDay()
                let nDate = date.getDate()
                let month = date.getMonth()
                let condition = JSON.parse(httpReq.response).current.condition.text
                var wIcon = JSON.parse(httpReq.response).current.condition.icon

                document.getElementById("location1").innerHTML = location
                document.querySelector(".day").innerHTML = allDayes[day]
                document.querySelector(".month").innerHTML = nDate + allMonths[month]
                document.querySelector(".number span").innerHTML = degree
                document.querySelector(".sun").innerHTML = condition
                document.querySelector(".weathIcon  ").innerHTML = `<img src="https:${wIcon}" class="w-100" alt="" >`
              //seconed day//////////////
              let date2 = new Date(secDay.date)
              let allDayes2 = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Satueday'];
              let day2 = date2.getDay()
            document.querySelector(".day2").innerHTML = allDayes2[day2]
            document.querySelector(".number1 span").innerHTML = secDay.day.maxtemp_c
            document.querySelector(".number2 span").innerHTML = secDay.day.mintemp_c
            console.log(secDay.day.condition.icon);
            document.querySelector(".weathIcon2").innerHTML = `<img src="https:${secDay.day.condition.icon}" class="w-25" alt="" >`
            document.querySelector(".sun2").innerHTML = secDay.day.condition.text
              //third day//////////
              let date3 = new Date(thirdDay.date)
              let allDayes3 = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Satueday'];
            
              let day3 = date3.getDay()
            document.querySelector(".day3").innerHTML = allDayes3[day3]
            document.querySelector(".number3 span").innerHTML = thirdDay.day.maxtemp_c
            document.querySelector(".number4 span").innerHTML = thirdDay.day.mintemp_c
            document.querySelector(".weathIcon3").innerHTML = `<img src="https:${thirdDay.day.condition.icon}" class="w-25" alt="" >`
            document.querySelector(".sun3").innerHTML = secDay.day.condition.text
            }
            
        })
    })
}
getweather()


   

// let date = new Date('2023-02-19  1:55')

// let allDayes = ['sunday', 'monday', 'tuesday', 'wensday', 'thursday', 'friday', 'satueday'];
// let allMonths = ["January", 'february', 'march', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// let day = date.getDay()
// let tday = date.getDate()
// console.log(tday);
// console.log(allDayes[day])
// let month = date.getMonth()
// console.log(allMonths[month]);