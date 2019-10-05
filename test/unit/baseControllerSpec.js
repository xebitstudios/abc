// describe('BaseController unit tests', function() {

// 	var $scope = {};
// 	var ctrl, timeout;
//  //    var ngAnimateMock,
// 	// 	ngSanitizeMock,
// 	// 	ngResourceMock,
// 	// 	ngModalMock,
// 	// 	ngRouteMock,
// 	// 	nvd3Mock,
// 	// 	uiBootstrapMock,
// 	// 	uiSelectMock,
// 	// 	uiFootableMock,
// 	// 	angularGrowlMock,
// 	// 	datepickerMock;

// 	// // Mock the module myApp
// 	// beforeEach(module('ssceexamsuiApp', function ($provide) {
//  //        // userServiceMock = { getUserDetails: jasmine.createSpy() }; 
//  //        // $provide.value('userService', userServiceMock);

//  //        ngAnimateMock = {}; 
//  //        $provide.value('ngAnimate', ngAnimateMock);
//  //        ngSanitizeMock = {}; 
//  //        $provide.value('ngSanitize', ngSanitizeMock);
//  //        ngResourceMock = {}; 
//  //        $provide.value('ngResource', ngResourceMock);
//  //        ngModalMock = {}; 
//  //        $provide.value('ngModal', ngModalMock);
//  //        ngRouteMock = {}; 
//  //        $provide.value('ngRoute', ngRouteMock);
//  //        nvd3Mock = {}; 
//  //        $provide.value('nvd3', nvd3Mock);
//  //        uiBootstrapMock = {}; 
//  //        $provide.value('ui.bootstrap', uiBootstrapMock);
//  //        uiSelectMock = {}; 
//  //        $provide.value('ui.select', uiSelectMock);
//  //        uiFootableMock = {}; 
//  //        $provide.value('ui.footable', uiFootableMock);
//  //        angularGrowlMock = {}; 
//  //        $provide.value('angular-growl', angularGrowlMock);
//  //        datepickerMock = {}; 
//  //        $provide.value('datepicker', datepickerMock);

//  //    }));

// 	// beforeEach(inject(function($controller, $rootScope, $timeout){
// 	// 	timeout = $timeout;
//  //        scope = $rootScope.$new();
// 	// 	ctrl = $controller('BaseController', {'$scope' : scope, '$timeout': timeout});
//  //    }));

//  //    ssceexamsuiApp
// 	// 	.controller('BaseController', BaseController);

// 	// BaseController.$inject = ['$scope', '$timeout'];//, '$rootScope', 'ConfigService'];

// 	var BaseController = function($scope, $timeout) {
// 	    $scope.aval = 'yes';
	    
// 	    $scope.getDate = function() {
// 	        var dte = Date();
// 	        return dte;
// 	    };

// 		$scope.footable = function() {
// 			$('.footable').footable();
// 		};

// 		$scope.footable();

// 		$timeout(function() {
// 			$('.footable').trigger('footable_redraw');
// 		}, 100);
        
// 	};
	
// 	BaseController();

// 	it("should exist", function() {		
//         // flush timeout(s) for all code under test.
// 		// $timeout.flush(100);
// 		// this will throw an exception if there are any pending timeouts.
// 		expect($scope.aval).toBe('yes');
// 		// $timeout.verifyNoPendingTasks();
//     });

//     it("should exist", function() {
		
//         expect($scope.aval).not.toEqual('No');
//         // var getDate = scope.getDate();
//     });
// });
