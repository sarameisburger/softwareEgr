/**
 * Angular controller file based on Tanya Crenshaw's example given in class
 * Controls the behavior of two buttons on our html page, the 'next video' and 'previous video' buttons
 * 
 * @author Elise Sunderland
 * @date 3/15/15
 */

var viz = angular.module('graph visualization',[]);


//angular function for changing the data, for now this just gives an alert saying what the buttons will do.
viz.controller('ButtonController',['$scope', function($scope){

	$scope.next = function next() {
		alert("This button will provide the data for the next video!");
	};

	$scope.back = function back() {
		alert("This button will provide the data for the previous video!");
	};

}]);

