document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "b8e9c3dbc11bba04";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = CORS_WRAPPER + "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = document.getElementById("NYCWeatherChart").getContext("2d")


  makeRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFahrenheits(json));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  });
});
