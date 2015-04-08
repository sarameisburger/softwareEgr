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
 * @author: Daniel Hollowell, Elise Sunderland, Sara Meisburger
 * @since: February 7, 2015
 */

google.load('visualization', '1', {packages : ['corechart']});

google.setOnLoadCallback(drawChart);

//this function allows us to draw our fusion table data as a bar graph on our html page
function drawChart() {

	//create data table with video, likes, dislikes
	// var data = new google.visualization.DataTable();
 //    data.addColumn('string', 'Video');
 //    data.addColumn('number', 'Likes')
 //    data.addColumn('number', 'Dislikes');
 //    data.addColumn('number', 'Proportion');

 //    //add pseudo data for test suite
 //     data.addRows([
 //        ['Just Bieber: Baby', 2000000, 4000000, .5],
 //        ['Taylor Swift: Shake it Off', 20000000, 300000, 3],
 //        ['Rebecca Black: Friday', 500000, 2000000, .75],
 //        ['Nicki Minaj: Anaconda', 750000, 2000000, .8]
 //    ]);

	// var data = new google.visualization.arrayToDataTable([
 //        ['Video', 'Justin Bieber: Baby', 'Taylor Swift: Shake it Off', 'Nicki Minaj: Anaconda',
 //        	'Rebecca Black: Friday', { role: 'annotation' } ],
 //        ['Likes', 10, 24, 20, 32, ''],
 //        ['Dislikes', 16, 22, 23, 30, ''],
 //        ['Proportion', 28, 19, 29, 30, '']
 //      ]);

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Video');
        data.addColumn('number', 'Likes')
        data.addColumn('number', 'Dislikes');

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
