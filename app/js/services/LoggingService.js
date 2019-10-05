(function() {
	'use strict';

	angular
        .module('ssceexamsuiApp')
		.factory('LoggingService', LoggingService);

		// LoggingService.$inject = ['window'];

		/* @ngInject */
		function LoggingService($http, $q, growl, $rootScope, window) {

			// var LoggingAPI = 'http://192.168.1.144:8066';
			// var LoggingAPI = 'localhost:8066';

			return {
				postTrack: postTrack
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

			function getDate() {
				var myDate = new Date();
				return (myDate.getMonth() + 1) + ":" +
					 myDate.getDate() + ":" + 
					 myDate.getFullYear() + ':' + 
					 myDate.getHours() + ":" + 
					 myDate.getMinutes() + ":" + 
					 myDate.getSeconds() + ":" + 
					 myDate.getMilliseconds() + ';';
			};

			function postTrack(val) {
				// if(window.localStorage.track) {
				// 	console.log('window.localStorage.track is: ' + window.localStorage.track);
				// 	var old = window.localStorage.track;
				// 	window.localStorage.track = old + val;

				// 	if ((window.localStorage.track.split('}{')).length > 4) {
				// 		console.log("Sending this to the external Tracking Data Ingestor service = " + (window.localStorage.track.split('}{')).length + ".");
				// 		ingestLogs(window.localStorage.track);
				// 		clearTrack();
				// 	}
				// } else {
				// 	window.localStorage.track = val;
				// }
			};

			function ingestLogs(ulogs) {
				console.log('Ingesting logs: ' + ulogs);
				console.log("calling: " + $rootScope.theAPI + '/api/ingestlogs');
				console.log('theeAPI is: ' + theeAPI);
				window.localStorage.track = '-';
				var vObj = {
	            	method: 'POST',
	                url: $rootScope.theAPI + '/api/ingestlogs',
	                data: {
	                	userid: '1452552',
	                    val: ulogs
	                },
	                headers: {
	                    'Content-Type': 'application/json',
	                    'Authorization': $rootScope.token || window.sessionStorage.act
	                }
	            };
	            return httpPromise(vObj);
			};

			function clearTrack() {
				console.log('calling clearTrack()...');
				window.localStorage.track = '';
			};
		}
})();