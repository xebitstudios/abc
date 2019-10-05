(function() {
    'use strict';

    ssceexamsuiApp
		.filter('selectedexamfilter', function () {
			return function (yr, yrpick) {
				if (yr === yrpick) { 
					return 'chosen'; 
				} else {
					return ''; 
				}				
			};
		});
})();
