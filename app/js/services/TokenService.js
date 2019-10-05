(function() {
	'use strict';

	angular
        .module('ssceexamsuiApp')
		.factory('TokenService', TokenService);

		// TokenService.$inject = ['window'];

		/* @ngInject */
		function TokenService(window) {

			return {
				getToken: getToken,
				setToken: setToken
			};

			function getToken() {
				if(window.sessionStorage.act) {
					return window.sessionStorage.act;
				} else {
					return '';
				}
			};

			function setToken(val) {
				window.sessionStorage.act = val;
			};		
		}
})();

// })();
