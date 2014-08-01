describe("WordCalculator Tests", function(){
	var wordCalculator;

	beforeEach(module("myApp"));

	beforeEach(inject(function($injector){
		wordCalculator = $injector.get("wordCalculator");
	}));

	it("calculate d should return $.01", function(){
		// write test
		expect(true).toBe(true);
	});

	it('calculate z should return $.26', function(){
		// write test
		expect(true).toBe(true);
	});
	
	it('calculate ; should return error', function(){
		// write test
		expect(true).toBe(true);
	});

	//any other tests...

});