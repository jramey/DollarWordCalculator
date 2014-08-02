describe('Controller: MainCtrl', function() {

    var scope;
    var wordCalculatorMock;
    var MainCtrl;

  	beforeEach(module('myApp'));

    beforeEach(function() {
        wordCalculatorMock = {

            calculate:  function (word) {
	            return "";
	        }
       };
    });

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope, wordCalculator: wordCalculatorMock
        	});
        }));

    it('should call wordCalculator calculate method', function () {
        spyOn(wordCalculatorMock, "calculate");
        scope.wordChange();
        expect(wordCalculatorMock.calculate).toHaveBeenCalled();
	});

    it('dollar words are kept', function () {
        wordCalculatorMock.calculate = function(word) { return "$1.00"; };
        scope.word = "buzzy";
        scope.wordChange();
        expect(scope.bank).toEqual(["buzzy"]);
    });

    it('words that are not a dollar are not kept', function () {
        wordCalculatorMock.calculate = function(word) { return "$1.02"; };
        scope.word = "buzzy";
        scope.wordChange();
        expect(scope.bank).toEqual([ ]);
    });
});