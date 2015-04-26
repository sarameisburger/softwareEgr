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


function drawChart() {

    // Get the whole Fusion table, pull the video name, likes and dislikes.

    var query = "SELECT Video, Likes, Dislikes FROM 1-sWkUfT7EbkVOUqfv95polj4Gr-O3zpNCFxv3unv";
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
		    title : "Likes vs. Dislikes",
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
		console.log(data);

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

        // only show headers and rows for the videos


        // if nothing is selected, make a blank column and hide the legend so that a blank graph will be displayed
        if(colNums.length < 2)
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
        
        chart.draw(view, options);

    })
}

/**
 * getCheckedBoxes()
 *
 *  this function finds the boxes that are checked on the page,
 * helps query the fusion table to only the two checked videos.
<<<<<<< HEAD
 *
=======
 * 
 * returns an array
>>>>>>> FETCH_HEAD
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

/**
 * translateToColNums
 *
 *
 * This function should return the total number of columns for our bar graph
 *
 * @param {Object} array - the array of names that have their boxes checked
 * @param {Object} view - the view we are working with to draw on
 */
function translateToColNums(array, view)
{
    //initialize variables
    var str;
    var colNum;
    // initialize newArray so that the video column will be first
    var newArray = [0];

    //loop through the array of video names
    for(var i = 0; i < array.length; i++)
    {
        str = array[i];
        colNum = -1;

        //get the column number for a given string, aka the checked box
        for(var j = 0; j < view.getNumberOfColumns(); j++)
        {
            if(str == view.getColumnLabel(j))
            {
                colNum = j;
            }
        }

        //if we found it, add it to the new array
        if(colNum != -1)
        {
            newArray[newArray.length] = colNum;
        }

    }

    return newArray;
}

window.onresize = function(){ location.reload(); };
