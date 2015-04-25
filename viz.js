// /**
//  * viz.js
//  *
//  * This code creates the horizontal bar graphs from our fusion table. The controller will deal with how many requests we make to the server.
//  *
//  * Initial code based on an example provided in the Google Charts API
//  * documentation and from Tanya Crenshaw   See:
//  * https://developers.google.com/fusiontables/docs/samples/gviz_barchart and
//  * https://github.com/crenshaw/thelibrarians in public/ui.js
//  *
//  * @author: Daniel Hollowell, Elise Sunderland, Sara Meisburger
//  * @since: February 7, 2015
//  *
//  */
//
// google.load('visualization', '1', {packages : ['corechart']});
//
// google.setOnLoadCallback(drawChart);
//
// /*var buttonWidth = 200;
// var buttonHeight = 60; */
//
// //this function allows us to draw our fusion table data as a bar graph on our html page
// function drawChart() {
//
// 		//create a new bargraph with the appropriate data
//         var data = new google.visualization.DataTable();
//         data.addColumn('string', 'Video');
//         data.addColumn('number', 'Likes')
//         data.addColumn('number', 'Dislikes');
//
// //right now this is hardcoded, we need to get the fusion table in here
//         data.addRows([
//         ['Baby', 2.8, 4],
//         ['Shake it Off', 2.8, .3]
//       ]);
//
//     //draw the chart
//     var windowWidth = window.innerWidth;
//     var windowHeight = window.innerHeight;
//
//     var options = {
//         width: 650,
//         height: 500,
//         isStacked: true,
//         horizontal: true,
//     title:"Likes vs Dislikes",
//         hAxis: {
//             title: 'in millions'
//         },
//         vAxis: {
//             title: ''
//         },
//         legend: {
//             position: 'none'
//         }
//     };
//      var chart = new google.visualization.BarChart(document.getElementById('graphBox'));
//
//      //draw the chart
//      chart.draw(data,options);
// }
//
// // 	//get the uri component
// // 	var queryText = encodeURIComponent('SELECT Location, Views FROM 1vL2S3JNNUBZz42mYyHlyr-2thU2hhLBoa62WkCYa');
//
// // 	//use the google api to draw the chart
// // 	google.visualization.drawChart({
// // 		containerId : 'chart',
// // 		dataSourceUrl : 'https://www.google.com/fusiontables/gvizdata?tq=',
// // 		query : 'SELECT Location, Views FROM 1vL2S3JNNUBZz42mYyHlyr-2thU2hhLBoa62WkCYa',
// // 		chartType : 'ColumnChart',
// // 		options : {
//
// // 			//apologies for the title being hard coded in
// // 			title : "Millions of Views per capita by Country for Baby - Justin Bieber",
// // 			titleFontSize : 12,
// // 			bar : {
// // 				"groupWidth" : "95%"
// // 			},
// // 			vAxis : {
// // 				title : "Millions of Views",
//
// // 			},
// // 			hAxis : {
// // 				title : "Country",
// // 			},
// // 			legend : {
// // 				position : "none"
// // 			}
// // 		}
// // 	});
// // }
//
// google.setOnLoadCallback(drawVisualization);
/*
 * viz.js
 *
 *
 * Initial code based on an example provided in the Google Charts API
 * documentation and Dr. Crenshaw's Librarians' project.  See:
 *
 * https://developers.google.com/chart/interactive/docs/gallery/columnchart#Examples
 * https://github.com/crenshaw/thelibrarians/tree/master/simple
 *
 * @author: Casey Sigelmann
 * @since: April 21, 2015
 */

google.load('visualization', '1', { packages: ['corechart'] });

google.setOnLoadCallback(drawChart);


function drawChart() {

    // Get the whole Fusion table
    var query = "SELECT * FROM 1UZvX_REFzOYcCSvFO4ynGV3en00sJ3h3OQHmMCXh";
    var opts = { sendMethod: 'auto' };
    var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);

    // Set the options for the chart to be drawn.  This include the
    // width, height, title, horizontal axis, vertical axis.
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var options = {
        width: windowWidth / 2,
        height: windowHeight / 2,
        hAxis: {
            title: 'Proportion'
        },
        vAxis: {
            title: 'Videos'
        },
        legend: {
            position: 'right'
        }
    };

    // Define variables to hold the entire fusion table
    // and a collection of views, one for each street
    var data;
    var view;

    // Send the query and create the view
    queryObj.setQuery(query);
    queryObj.send(function (e) {

        data = e.getDataTable();

        view = new google.visualization.DataView(data);

        // set columns of the view based on which buttons are selected
        var strs = getCheckedBoxes();
        var colNums = translateToColNums(strs, view);
        view.setColumns(colNums);

        // figure out the colors for the bars
        // first make an array of 5 shades of gray
        var colorArr = ['#c0c0c0', '#b0b0b0', '#a0a0a0', '#909090', '#808080'];
        // then loop through columns and see if we have a green lane
        for (var i = 0; i < colNums.length; i++)
        {
            if(isGreenLane(strs[i]))
            {
                //set the array at i to green
                colorArr[i] = '#00cc00';
            }
        }
        options.colors = colorArr;

        // only show headers and rows for the year (not total)
        view.setRows([0,1,2,3]);

        // if nothing is selected, make a blank column and hide the legend so that a blank graph will be displayed
        if(colNums.length < 2)
        {
            data = google.visualization.arrayToDataTable([
                ['Year', 'dummy'],
                ['2010', 0],
                ['2011', 0],
                ['2012', 0],
                ['2013', 0]
                ]);
            options.legend = {position: 'none'};
            options.vAxis.minValue = 0;
            options.vAxis.maxValue = 10;
            view = new google.visualization.DataView(data);
        }

        // draw the view
        var chart = new google.visualization.ColumnChart(document.getElementById('graphBox'));
        chart.draw(view.toDataTable(), options);

    })
}

function isGreenLane(name)
{
    if(name == 'Broadway' || name == 'Cully Boulevard' || name == 'Moody Avenue' || name == 'Multnomah Street')
    {
        return true;
    }
    return false;
}


function getCheckedBoxes()
{
    var strArr = [];
    //retrieve all boxes
    var boxList = document.getElementsByClassName("cbox");

    //make sure only 5 are checked
    var counter = 0;
    for (var i = 0; i < boxList.length; i++)
    {//keep a count of the number of checked boxes
        if(boxList[i].checked)
        {
            strArr[strArr.length] = boxList[i].name;
        }
    }
    return strArr;
}

function translateToColNums(array, view)
{
    // initialize variables
    var str;
    var colNum;
    // initialize newArray so that the year column will be first
    var newArray = [0];

    //loop through the array of strings
    for(var i = 0; i < array.length; i++)
    {
        str = array[i];
        colNum = -1;

        //get the column number for a given string
        for(var j = 0; j < view.getNumberOfColumns(); j++)
        {
            if(str == view.getColumnLabel(j))
            {
                colNum = j;
            }
        }

        //if we found it, add it to the newArray
        if(colNum != -1)
        {
            newArray[newArray.length] = colNum;
        }

    }

    return newArray;
}

window.onresize = function(){ location.reload(); };
