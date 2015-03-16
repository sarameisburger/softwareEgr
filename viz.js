/*
 * viz.js
 *
 * This code creates a basic bar graph with fake data as a proof of
 * concept. More "Real" data will be put in at a later date.
 *
 * Initial code based on an example provided in the Google Charts API
 * documentation and from Tanya Crenshaw   See:
 * https://developers.google.com/fusiontables/docs/samples/gviz_barchart and
 * https://github.com/crenshaw/thelibrarians in public/ui.js
 *
 * @author: Daniel Hollowell, Elise Sunderland
 * @since: February 7, 2015
 */

google.load('visualization', '1', {
	packages : ['corechart']
});

//this function allows us to draw our fusion table data as a bar graph on our html page

function drawVisualization() {
	//get the uri component
	var queryText = encodeURIComponent('SELECT Location, Views FROM 1vL2S3JNNUBZz42mYyHlyr-2thU2hhLBoa62WkCYa');
	
	//use the google api to draw the chart
	google.visualization.drawChart({
		containerId : 'chart',
		dataSourceUrl : 'https://www.google.com/fusiontables/gvizdata?tq=',
		query : 'SELECT Location, Views FROM 1vL2S3JNNUBZz42mYyHlyr-2thU2hhLBoa62WkCYa',
		chartType : 'ColumnChart',
		options : {
			
			//apologies for the title being hard coded in
			title : "Millions of Views per capita by Country for Baby - Justin Bieber",
			titleFontSize : 12,
			bar : {
				"groupWidth" : "95%"
			},
			vAxis : {
				title : "Millions of Views",

			},
			hAxis : {
				title : "Country",
			},
			legend : {
				position : "none"
			}
		}
	});
}

google.setOnLoadCallback(drawVisualization);
