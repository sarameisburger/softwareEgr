/*
 * viz.js
 *
 * This code creates a basic horizontal bar graph with fake data placed in for likes/dislikes.
 * Real data will be implemented at a later date.
 *
 * Initial code based on an example provided in the Google Charts API
 * documentation and from Tanya Crenshaw   See:
 * https://developers.google.com/fusiontables/docs/samples/gviz_barchart and
 * https://github.com/crenshaw/thelibrarians in public/ui.js
 *
 * @author: Daniel Hollowell, Elise Sunderland, Sara Meisburger
 * @since: February 7, 2015
 *
 */

google.load('visualization', '1', {packages : ['corechart']});

google.setOnLoadCallback(drawChart);

var buttonWidth = 350px;
var buttonHeight = 75px;

//this function allows us to draw our fusion table data as a bar graph on our html page
function drawChart() {

		//create a new bargraph with the appropriate data
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Video');
        data.addColumn('number', 'Likes')
        data.addColumn('number', 'Dislikes');

//right now this is hardcoded, we need to get the fusion table in here
        data.addRows([
        ['Baby', 2.8, 4],
        ['Shake it Off', 2.8, .3]
      ]);

    //draw the chart
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var options = {
        width: 650,
        height: 500,
        isStacked: true,
        horizontal: true,
    title:"Likes vs Dislikes",
        hAxis: {
            title: 'in millions'
        },
        vAxis: {
            title: ''
        },
        legend: {
            position: 'none'
        }
    };
     var chart = new google.visualization.BarChart(document.getElementById('graphBox'));

     //draw the chart
     chart.draw(data,options);
}

// 	//get the uri component
// 	var queryText = encodeURIComponent('SELECT Location, Views FROM 1vL2S3JNNUBZz42mYyHlyr-2thU2hhLBoa62WkCYa');

// 	//use the google api to draw the chart
// 	google.visualization.drawChart({
// 		containerId : 'chart',
// 		dataSourceUrl : 'https://www.google.com/fusiontables/gvizdata?tq=',
// 		query : 'SELECT Location, Views FROM 1vL2S3JNNUBZz42mYyHlyr-2thU2hhLBoa62WkCYa',
// 		chartType : 'ColumnChart',
// 		options : {

// 			//apologies for the title being hard coded in
// 			title : "Millions of Views per capita by Country for Baby - Justin Bieber",
// 			titleFontSize : 12,
// 			bar : {
// 				"groupWidth" : "95%"
// 			},
// 			vAxis : {
// 				title : "Millions of Views",

// 			},
// 			hAxis : {
// 				title : "Country",
// 			},
// 			legend : {
// 				position : "none"
// 			}
// 		}
// 	});
// }

google.setOnLoadCallback(drawVisualization);
