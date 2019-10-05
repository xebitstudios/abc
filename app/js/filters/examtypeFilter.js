(function() {
    'use strict';

    ssceexamsuiApp
		.filter('examtypefilter', function () {
			return function (val) {
				if (val == 'SSCE') { 
					return 'Senior School Certificate Examinations (S.S.C.E)'; 
				} else if (val == 'GCE') { 
					return 'General Certificate Examinations (G.C.E)'; 
				} else if (val == 'NECO') { 
					return 'National Examinations Council (N.E.C.O)'; 
				} else if (val == 'JAMB') { 
					return 'Joint Admissions and Matriculation Board (J.A.M.B)'; 
				} else {
					return val; 
				}				
			};
		});
})();
