var app = angular.module("myApp", []);

app.controller("MainCtrl", function($scope, wordCalculator){
	$scope.word = "";
	$scope.wordValue = "$.00";
	$scope.bank = [];

	$scope.wordChange = function() {
		$scope.wordValue = wordCalculator.calculate($scope.word);

		if ($scope.wordValue == "$1.00") {
			$scope.bank.push($scope.word);
		}

	};
});

