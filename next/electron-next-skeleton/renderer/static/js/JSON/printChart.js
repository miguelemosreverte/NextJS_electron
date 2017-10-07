
function printChart(JSON){
  var PersonalitySunburstChart = require('personality-sunburst-chart');
  var element = document.querySelector('#sunburstChart');
  var chart = new PersonalitySunburstChart({
    'element': element,
    'version': 'v3'
  });
  chart.show(JSON, '/static/images/GAMBA-FM-LOGO-BLACK.jpg');
}

getJSON(printChart);
