describe("Command Builder", function(){
	it("should exist", function(){
		expect(buildCommand()).toBeTruthy();
	});

	it("should format a command name without parameters", function(){
		expect(buildCommand(["make"])).toEqual("[make]");
	});
});