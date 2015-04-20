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
var viz = angular.module('graph visualization', []);

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

	$scope.next = function next() {
		alert("This button will provide the data for the next video!");
	};

	$scope.back = function back() {
		alert("This button will provide the data for the previous video!");
	};

}]);

