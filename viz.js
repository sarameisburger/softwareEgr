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
 * referenced group C1's code for function on checking which videos were selected.
 * https://github.com/trowbrid16/CS-441-Project
 *
 * @author: Elise Sunderland, Daniel Hollowell, Sara Meisburger
 * @since: April 25, 2015
 */

google.load('visualization', '1', { packages: ['corechart'] });
google.setOnLoadCallback(drawChart);

var strs = getCheckedBoxes();

function drawChart() {

    // Get the boxes that are checked BEFORE the chart is drawn
	strs = getCheckedBoxes();
	
	//query the entire fusion table, for our specific videos that are checked
    var query = "SELECT * FROM 1-sWkUfT7EbkVOUqfv95polj4Gr-O3zpNCFxv3unv WHERE Video IN ('" + strs[0] +"','"+strs[1] +"')" ;
    var opts = { sendMethod: 'auto' };
    var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);

    // Set the options for the chart to be drawn.  This includes the
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

        view = new google.visualization.DataView(data);
		
		//log strs to see what videos are checked
		console.log(strs);
        
    // if nothing is selected, make a blank graph
    if(strs.length < 1)
            {
                fakeData = google.visualization.arrayToDataTable([
                    ['Video', 'Likes', 'Dislikes'],
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
    //get the winner of the dislike battle EVERY TIME the chart is redrawn (aka new video selected)
 getWinner();   
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
        if(strArr.length < 2)
            {
				strArr = [];
                }
    return strArr;
}

/**
 * getWinner
 * 
 * returns the string of who won the showdown.
 *  
 */
function getWinner() {
	strs = getCheckedBoxes();
	var vid1 = strs[0];
	var vid2 = strs[1];
	
	
	var winner = document.getElementById("winner");
	var champion;
	
	//names of videos in order of most to least disliked
	var winnerArr = [
	"Baby",
	"Friday",
	"Wrecking Ball",
	"Anaconda",
	"Dark Horse",
	"The Fox",
	"Bound 2",
	"Shake It Off",
	"All About That Bass",
	"Never Gonna Give You Up"
	]

	for(var i = 0;i<winnerArr.length;i++){
		if(winnerArr[i] == vid1) {
			champion=vid1;
			winner.innerHTML = vid1;
			console.log(champion);
			return;
		}
		if(winnerArr[i] == vid2){
			champion=vid2;
			winner.innerHTML = vid2;
			console.log(champion);
			return;
		}
	}

}

window.onresize = function(){ location.reload(); };
