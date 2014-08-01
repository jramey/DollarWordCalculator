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
        // delete this and add test code
        expect(true).toBe(true);
	});
});