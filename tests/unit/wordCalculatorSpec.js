describe("WordCalculator Tests", function(){
	var wordCalculator;

	beforeEach(module("myApp"));

	beforeEach(inject(function($injector){
		wordCalculator = $injector.get("wordCalculator");
	}));

	it("calculate d should return $.01", function(){
		var count = wordCalculator.calculate("a");
		expect(count).toBe("$.01");
	});

	it('calculate z should return $.26', function(){
		var count = wordCalculator.calculate("z");
		expect(count).toBe("$.26");
	});
	
	it('calculate numbers should return error', function(){
		var count = wordCalculator.calculate("222");
		expect(count).toBe("ERROR");
	});

	it('dollar words are kept', function(){
		var count = wordCalculator.calculate("buzzy");
		expect(count).toBe("$1.00");
	});

	//any other tests...

});