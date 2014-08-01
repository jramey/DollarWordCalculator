var app = angular.module("myApp", []);

app.controller("MainCtrl", function($scope, wordCalculator){
	$scope.word = "";
	$scope.wordValue = "$.00";

	$scope.wordChange = function() {
		$scope.wordValue = wordCalculator.calculate($scope.word);
	};
});

