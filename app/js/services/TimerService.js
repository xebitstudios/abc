(function() {
	'use strict';

	angular
        .module('ssceexamsuiApp')
		.factory('TimerService', TimerService);

		// TimerService.$inject = ['window'];

		/* @ngInject */
		function TimerService(window) {

			return {
				getTime: getTime
			};

			function getResult(timepast) {
				var secss = Math.floor(timepast/1000)%60;
	            var minss = Math.floor(timepast/(60*1000))%60;
	            var hrss = Math.floor(timepast/(60*60*1000))%24;
	            // console.log('secss is: ' + secss);
	            // console.log('minss is: ' + minss);
	            // console.log('hrss is: ' + hrss);

	            return hrss + ' hrs ' + minss + ' mins ' + secss + ' secs';
			};

			function getTime(oldtime, totaltime) {
				console.log('getTime is called.');	
				// console.log('totaltime is: ' + totaltime);
				var timegone = new Date().getTime() - oldtime;
				var timeleft = (totaltime*60*1000) - timegone;
				var pctgone = (100*(timegone/(timegone + timeleft))).toFixed();

				// console.log('timegone is: ' + getResult(timegone));
				// console.log('timeleft is: ' + getResult(timeleft));
				// console.log('pctgone is: ' + pctgone + '%');

	            return [getResult(timegone), getResult(timeleft), pctgone];
			};
		}
})();
