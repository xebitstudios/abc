(function() {
    'use strict';

    ssceexamsuiApp
		.filter('phonenumberfilter', function () {
			return function (tel) {
				if (!tel) { return ''; }

				var value = (tel.toString().trim().replace(/^\+/, '')).substring(0,47);

				if (value.match(/[^0-9]/)) {
					return tel.substring(0,9);
				}
				
				return value;
			};
		});
})();
