describe("Command Builder", function(){
	it("should exist", function(){
		expect(buildCommand()).toBeTruthy();
	});

	it("should format a command name without parameters", function(){
		expect(buildCommand(["make"])).toEqual("[make]");
	});

	it("should format a command name with a single parameters", function(){
		expect(buildCommand(["make"],["clean"])).toEqual("[make:clean]");
	});

	it("should format a command name with a multiple parameters", function(){
		expect(buildCommand(["make"],["clean","install","deploy","test"])).toEqual("[make:clean-install-deploy-test]");
	});
});