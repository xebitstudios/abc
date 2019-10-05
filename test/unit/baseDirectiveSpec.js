// describe('BaseDirective tests', function() {

// 	var element;
// 	var $scope;

// 	beforeEach(module("app"));

// 	beforeEach(inject(function ($compile, $rootScope) {
// 		$scope = $rootScope;
// 		element = angular.element("<div id='simplediv' eh-simple>{{2 + 2}}</div>");
// 		$compile(element)($rootScope);
// 	}));

// 	describe("ehSimple test", function() {
// 		// test that a directive is compiled and displays correct results
// 		// it('should have a correct value', function() {
// 		// 	$scope.$digest();
// 		// 	expect(element.html()).toBe("4");
// 		// });

// 		// test that a class is added to the element
// 		// it('should add a class of plain', function() {
// 		// 	expect(element.hasClass("plain")).toBe(true);
// 		// });

// 		// test the scope of a directive
// 		// it('should respond to a click', function(element) {
// 		// 	// browserTrigger(element, "click"); // browserTrigger does not work
// 		// 	expect(element.scope().clicked).toBe(true);
// 		// });
// 	});
// });