var API_KEY = "b8e9c3dbc11bba04";
var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
var URL = CORS_WRAPPER + "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";

function getFahrenheits(result){
  return result.hourly_forecast.map(function(info) {
    return info.temp.english
  })
}

function getHours(result){
   return result.hourly_forecast.map(function(info) {
    return info.FCTTIME.hour
  })
}

function generateDataSet(labels, data) {
  let returnObj = {labels: labels,
    datasets: [{ data: data }]
       }
  return returnObj
}


function makeRequest(endpoint, success) {
  // Your code goes here
  return fetch(endpoint).then(res => res.json()).then(json => success(json))
  }
