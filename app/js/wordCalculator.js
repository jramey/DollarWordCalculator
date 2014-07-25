(function () {

	var wordCalculator = function (){

		var letterValues = {
			"A" : 1,
			"B" : 2,
			"C" : 3,
			"D" : 4,
			"E" : 5,
			"F" : 6,
			"G" : 7,
			"H" : 8,
			"I" : 9,
			"J" : 10,
			"K" : 11,
			"L" : 12,
			"M" : 13,
			"N" : 14,
			"O" : 15,
			"P" : 16,
			"Q" : 17,
			"R" : 18,
			"S" : 19,
			"T" : 20,
			"U" : 21,
			"V" : 22,
			"W" : 23,
			"X" : 24,
			"Y" : 25,
			"Z" : 26,
		};

		var calculate = function (word) {
            var total = 0;
            var formattedWord = word.toUpperCase();
            for (var i = 0; i < formattedWord.length; i++){
            	total += letterValues[formattedWord[i]];
            }

            return formatValue(total.toString());
        };

        var formatValue = function(value){
			if (isNaN(value))
				return "ERROR";
			else if (value.length < 2)
				return	"$.0" + value;
			else if (value.length < 3)
				return "$." + value;
			else
				return "$" + value.slice(0, value.length-2) + "." + value.slice(value.length-2);
	};

        return {
        	calculate: calculate
        };
	};

	var module = angular.module("myApp");
    module.service("wordCalculator", wordCalculator);

}());