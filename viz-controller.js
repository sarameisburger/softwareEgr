/**
 * Angular controller file based on Tanya Crenshaw's example given in class
 * Controls the behavior of our video buttons on the index page, making them change the data of the graphs
 *
 * Unknown whether we will make multiple calls to our fusion table to make the smaller requests
 * Needs to be able to change images and graph data.
 *
 * @author Elise Sunderland
 * @date 4/20/15
 */

//make sure to use proper import statements in the html to get the angular working properly
var viz = angular.module('viz', []);

//angular function for changing the data, for now this just gives an alert saying what the buttons will do.
//look up online examples and examples of crenshaw's code to finalize.
viz.controller('ButtonController', ['$scope',
function($scope) {

	//create the chart used to animate the video information ---> do we need this if we are not animating?
/*
	$scope.chart = new google.visualization.BarChart(document.getElementById('graphBox'));

	var options = {
		width : 650,
		height : 500,
		isStacked : true,
		horizontal : true,
		title : "Likes vs Dislikes",
		hAxis : {
			title : 'in millions'
		},
		vAxis : {
			title : 'Video'
		},
		legend : {
			position : 'none'
		}
	};*/


	//get our query data for our chart(s)
/*
	var query = "SELECT Video, Likes, Dislikes FROM 1-sWkUfT7EbkVOUqfv95polj4Gr-O3zpNCFxv3unv";
		var opts = {
			sendMethod : 'auto'
		};
		var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);

	    // Define the variables to hold the entire fusion table,
	    // and a collection of views, one for each year.
	    var data;
	    var views = {};
	    
	    // Send the query and handle the response by creating and
	    // drawing the data for 2014.
	    queryObj.setQuery(query);
	    queryObj.send(function(e) { 
		    
		    data = e.getDataTable();
*/

// ************************************************************************
// Controller functions
// ************************************************************************

	// get()
	//    Get a new chart.
/*
	$scope.get = function() {
	
		// Draw the chart for selected video, maybe do a function similar to crenshaws?
		$scope.chart.draw(data.toDataTable(), options);

	};*/

	//basically what should happen is two of these functions will be called based on user interaction, and then have a corresponding stacked bar graph show up for the 
	//2 videos. What I am unsure of right now is 1) how to make specific queries to the fusion table in order for it to give us this data for the 2 vids and
	//2) how the number of functions being called should be specified. Is it possible to differentiate from left and right sides?

	//when this function is executed, the data in the table will be provided for anaconda
	$scope.anaconda = function anaconda() {
		alert("This button will provide the data for anaconda");
	};

	$scope.wreckingBall = function wreckingBall() {
		alert("This button will provide the data for wrecking ball");
	};

	$scope.fox = function fox() {
		alert("This button will provide the data for what does the fox say");
	};

	$scope.tSwizz = function tSwizz() {
		alert("This button will provide the data for shake it off");
	};

	$scope.friday = function friday() {
		alert("This button will provide the data for friday");
	};

	$scope.kanye = function kanye() {
		alert("This button will provide the data for bound 2");
	};

	$scope.bass = function bass() {
		alert("This button will provide the data for all about that bass");
	};

	$scope.baby = function baby() {
		alert("This button will provide the data for baby");
	};

	$scope.katy = function katy() {
		alert("This button will provide the data for dark horse");
	};

	$scope.rickRoll = function rickRoll() {
		alert("This button will provide the data for never gonna give you up");
	};
}]);

