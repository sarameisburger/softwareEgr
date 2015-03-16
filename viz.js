/*
 * viz.js
 *
 * This code creates a basic bar graph with fake data as a proof of 
 * concept. More "Real" data will be put in at a later date.
 *
 * Initial code based on an example provided in the Google Charts API
 * documentation and from Tanya Crenshaw   See:
 * https://developers.google.com/chart/interactive/docs/gallery/columnchart#Examples
 * and
 * https://github.com/crenshaw/thelibrarians in simple/vis.js
 *
 * @author: Daniel Hollowell
 * @since: February 7, 2015
 */

google.load('visualization', '1', {packages: ['corechart']});

google.setOnLoadCallback(drawChart);

function drawChart() {

    // Store the data by creating a google DataTable object with
    // two columns: Country and mil views per capita.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Millions of Views per capita');

    // Add 8 rows with the different countries
    data.addRows([
        ['USA', 35.8],
		['South Africa', 3.8],
		['UK', 18.5],
		['France', 6.5],
		['India', 2.9],
        ['Brazil', 8.8],
        ['Japan', 2.3],
		['South Korea', 8.5],
        ['Russia', 4.5],
        		
        ]);

    // Set the options for the chart to be drawn.  This include the
    // width, height, title, horizontal axis, vertical axis.  Finally
    // turn off the legend.
    var options = {
        width: 1000,
        height: 563,
	title: 'Millions of Views per capita of Video by Country',
        hAxis: {
            title: 'Country',
            gridlines: {count: 9}
        },
        vAxis: {
            title: 'Millions of Views'
        },
	legend: { 
	    position: 'none' 
	}
    };

    // Create a new viz object using the google API -- specifically,
    // we are going to make a column chart inside the div called ex0
    // in the html file.
    var chart = new google.visualization.ColumnChart(document.getElementById('ex0'));

    // STEP 7: SHOW THE DATA
    // Draw the chart with the supplied options.
    chart.draw(data, options);
}
