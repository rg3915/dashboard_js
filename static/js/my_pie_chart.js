// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var jsonData = $.ajax({
    url: "static/json/sampledata.json",
    dataType: "json",
    async: false
  }).responseText;

  // Create our data table out of JSON data loaded from server.
  var data = new google.visualization.DataTable(jsonData);

  var options = {
    title: 'Title',
    is3D: true,
    pieSliceText: 'percent',
    pieSliceTextStyle: {
      color: 'white',
    },
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('pie_chart_div'));
  chart.draw(data, options);
}