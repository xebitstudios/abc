(function() {
	'use strict';

	angular
        .module('ssceexamsuiApp')
		.factory('HeaderService', HeaderService);

		// HeaderService.$inject = ['window'];

		/* @ngInject */
		function HeaderService(window) {

			return {
				getTab: getTab,
				setTab: setTab
			};

			function getTab() {
				console.log('getTab is called.');
			};

			function setTab(val) {
				// console.log('setTab is called with val = ' + val);
				for(var ln=0;ln<$('#righttray ul li').length;ln++) {
					if(ln != val) {
						$('#righttray ul li:eq(' + ln + ')').removeClass('active');
					} else {
						$('#righttray ul li:eq(' + val + ')').addClass('active');
					}
	            }
			};	
		}
})();
