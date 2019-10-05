(function() {
    'use strict';

    ssceexamsuiApp
		.filter('progressbarfilter', function () {
			return function (pct) {
				if (pct < 50) { 
					return 'progress-bar-success'; 
				} else if ((pct > 50) && (pct < 70)) { 
					return 'progress-bar-info'; 
				} else if ((pct > 70) && (pct < 90)) { 
					return 'progress-bar-warning'; 
				} else if ((pct > 90) && (pct < 100)) {
					return 'progress-bar-danger'; 
				}				
			};
		});
})();
