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

	// ************************************************************************
	// Controller functions
	// ************************************************************************

	// get()
	//    Get a new chart.
	//$scope.get = function() {

	// If the view of data for the selected year hasn't been created
	// yet, create it.
	/*
	if (views[thisYear] === undefined) {

	var thisYear = $scope.year;
	views[thisYear] = new google.visualization.DataView(data);
	views[thisYear].setRows(views[thisYear].getFilteredRows([{
	column : 2,
	value : thisYear
	}]));
	views[thisYear].setColumns([0, 1]);

	}
	// Draw the chart for selected year.
	$scope.chart.draw(views[thisYear].toDataTable(), options);*/

	//};

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

