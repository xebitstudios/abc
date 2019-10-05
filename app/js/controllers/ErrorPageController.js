(function() {
	'use strict';

	angular
        .module('ssceexamsuiApp')
		.controller('ErrorPageController', ErrorPageController);

		// ErrorPageController.$inject = ['$scope', '$location', '$controller'];
		
	    /* @ngInject */
	    function ErrorPageController($scope, $location, $controller){
	       $controller('BaseController', {$scope: $scope});

	       $scope.goback = function() {
            $location.path("/dashboard");
        };
	    }
})();
