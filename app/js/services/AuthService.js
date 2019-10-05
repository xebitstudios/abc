(function() {
	'use strict';

	angular
        .module('ssceexamsuiApp')
		.factory('AuthService', AuthService);

		// AuthService.$inject = ['$http', '$q', 'growl', '$rootScope', 'window', 'ConfigService'];

		/* @ngInject */
		function AuthService($http, $q, growl, $rootScope, window, ConfigService) {
			
			return {
				postLoginForm: postLoginForm,
				setUserId: setUserId
			};

			function httpPromise (vobj) {
				var deferred = $q.defer();
				$http(vobj)
					.success(function(response) {
						deferred.resolve(response);
					})
					.error(function() {
						deferred.reject();
					});
				return deferred.promise;
			};

			function postLoginForm(val) {
				console.log('calling postLoginForm... with ' + val.uname + ', ' + val.pwd + '.');
				var vObj = {
	            	method: 'POST',
	                url: '/api/authenticate',
	                data: {
	                	name: val.uname,
	                	pwd: val.pwd
	                },
	                headers: {
	                    'Content-Type': 'application/json'
	                    // 'Authorization': $rootScope.token || window.sessionStorage.act
	                }
	            };
	            return httpPromise(vObj);
			};

			function setUserId(urlpath) {
				console.log('ConfigService.getApiBaseRoute is: ' + ConfigService.getApiBaseRoute());
				// urlBase = location.origin;//'https://beep.com:10443/';
				var vObj = {
	            	method: 'GET',
	                url: urlpath,
	                headers: {
	                    'Content-Type': 'application/json;charset=UTF-8'
	                    // 'Authorization': $rootScope.token || window.sessionStorage.act
	                }
	            };
	            return httpPromise(vObj);
			};
		}
})();		