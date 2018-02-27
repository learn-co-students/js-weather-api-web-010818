function getFahrenheits(result){
  return result.hourly_forecast.map(function(data) {
    return data.temp.english
  })
}

function getHours(result){
  return result.hourly_forecast.map(function(data) {
    return data.FCTTIME.hour
  })
}

function generateDataSet(labels, data) {
  let myData = {
    labels: labels,
    datasets: [{
      data:data
    }]
  }
  return myData
}

function makeRequest(endpoint, success) {
  fetch(endpoint)
    .then(res => res.json())
    .then(json => success(json))

}
