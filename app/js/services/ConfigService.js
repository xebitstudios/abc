(function() {
	'use strict';

	angular
        .module('ssceexamsuiApp')
		.factory('ConfigService', ConfigService);

		// ConfigService.$inject = ['$rootScope'];

		var urlPath = 'SUSKYOP/kyop_mult_web_kyoppresentation_01/users/getUser.json';

		/* @ngInject */
		function ConfigService($rootScope) {

			return {
				setUrl: setUrl,
				getApiBaseRoute: getApiBaseRoute,
				getUserId: getUserId,
				getUrlPath: getUrlPath
			};

			function setUrl(val) {
				var devurlset = 'http://10.255.211.124:6045';
				var qaurlset = 'https://150.250.242.52:6040';
				var qaapiset = 'http://150.250.242.52:36095';

				if(val === 'dev') {
					$rootScope.url = devurlset;
				} else if(val === 'qa') {
					$rootScope.url = qaurlset;
				} else {
					return devurlset;
				}

				return $rootScope.url;
			}

			function getApiBaseRoute() {
				var nonWebsealApi = 'http://10.255.211.124:37021/';
				if (($(location).attr('href').search('localhost:8030')) !== -1) {
					// console.log('Found the localhost Route...');
					$rootScope.baseApiRoute = nonWebsealApi;
				} else if(($(location).attr('href').search($rootScope.junctionpath)) !== -1) {
					// console.log('Found the Webseal Route...');
					$rootScope.baseApiRoute = 'https://' + location.host + '/' + $rootScope.junctionpath + '/';
				} else {
					// console.log('Found the 10.255.211.124:81 Route...');
					$rootScope.baseApiRoute = nonWebsealApi;
				}

				return $rootScope.baseApiRoute;        
            }

	        function getUserId() {
	        	return $rootScope.userId;
	        }

	        function getUrlPath() {
	        	return urlPath;
	        }
		}
})();
