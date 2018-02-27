document.addEventListener('DOMContentLoaded', function() {
  const API_KEY = "3cb6fb5c2ece7c0d";
  // const CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  const URL =  "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  const ctx = document.getElementById("NYCWeatherChart").getContext("2d")


  makeRequest(URL, function(json) {
    const data = generateDataSet(getHours(json), getFahrenheits(json));
    console.log(data)
    const tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
    console.log(tempChart)
  });


});
