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
 * @author: Elise Sunderland, Sara Meisburger, Casey Siegelman
 * @since: April 25, 2015
 */

google.load('visualization', '1', { packages: ['corechart'] });
google.setOnLoadCallback(drawChart);

var strs = getCheckedBoxes();

function drawChart() {

/*
	var vid1 = strs[0];
	var vid2 = strs[1];*/

    // Get the whole Fusion table, pull the video name, likes and dislikes.
	strs = getCheckedBoxes();
    var query = "SELECT * FROM 1-sWkUfT7EbkVOUqfv95polj4Gr-O3zpNCFxv3unv WHERE Video IN ('" + strs[0] +"','"+strs[1] +"')" ;
    var opts = { sendMethod: 'auto' };
    var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);

    // Set the options for the chart to be drawn.  This include the
    // width, height, title, horizontal axis, vertical axis.
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
	    var options = {
		title : "Likes vs. Dislikes for Popular Music Videos",
		titleFontSize : 12,
		isStacked: true,
		horizontal: true,
		bar : {
		    "groupWidth" : "95%"
		},
		vAxis : {
		    title : "Video",

		},
		hAxis : {
		    title : "Number of Likes/Dislikes",
		},
		legend : {
		    position : "none"
		}
	    };

    // Define variables to hold the entire fusion table
    // and a collection of views, one for each video
    var data;
    var view;

    // Send the query and create the view
    queryObj.setQuery(query);
    queryObj.send(function (e) {

        data = e.getDataTable();
		//console.log(data);

        view = new google.visualization.DataView(data);

		//gets the array of the boxes checked
		//strs = getCheckedBoxes();
		console.log(strs);
        // set columns of the view based on which buttons are selected
        
              // if nothing is selected, make a blank column and hide the legend so that a blank graph will be displayed
            if(strs.length < 1)
                {
                    fakeData = google.visualization.arrayToDataTable([
                        ['Video', 'dummy likes', 'dummy dislikes'],
                        ['Video 1', 0, 0],
                           ['Video 2', 0, 0],
                        ]);
                    options.legend = {position: 'none'};
                    options.vAxis.minValue = 0;
                    options.vAxis.maxValue = 100000;
                    view = new google.visualization.DataView(fakeData);
                }
        
        // draw the view
        var chart = new google.visualization.BarChart(document.getElementById('viz_div'));
        chart.draw(view.toDataTable(), options);

    })
}

/**
 * getCheckedBoxes()
 *
 *  this function finds the boxes that are checked on the page,
 * helps query the fusion table to only the two checked videos.
 */
function getCheckedBoxes()
{
    var strArr = [];

    //retrieve all boxes
    var boxList = document.getElementsByClassName("cbox");

    //make sure only 2 are checked
    var counter = 0;
    for (var i = 0; i < boxList.length; i++)
    {
    	//keep a count of the number of checked boxes
        if(boxList[i].checked)
        {
        	//make strArr the same as the box list
            strArr[strArr.length] = boxList[i].name;
        }
    }
    return strArr;
}

window.onresize = function(){ location.reload(); };
