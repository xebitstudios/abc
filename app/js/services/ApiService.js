(function() {
	'use strict';

	angular
        .module('ssceexamsuiApp')
		.factory('ApiService', ApiService);

		// ApiService.$inject = ['$http', '$q', 'growl', '$rootScope', 'window'];

		/* @ngInject */
		function ApiService($http, $q, growl, $rootScope, window) {
			
			return {
				getPhysicsSectionA: getPhysicsSectionA,
				getPhysicsSectionB: getPhysicsSectionB,
				getEnglishSectionB: getEnglishSectionB,
				getEconomicsSectionB: getEconomicsSectionB,
				getGeographySectionB: getGeographySectionB,
				getMathematicsSectionB: getMathematicsSectionB,
				getAgricSciSectionB: getAgricSciSectionB,
				getGovernmentSectionB: getGovernmentSectionB,
				getCommerceSectionB: getCommerceSectionB,
				getBiologySectionB: getBiologySectionB,
				getLitInEngSectionB: getLitInEngSectionB,
				getChemistrySectionB: getChemistrySectionB,
				newUser: newUser,
				getUsers: getUsers,
				getUserById: getUserById,
				getUserByUnameAndPwd: getUserByUnameAndPwd,
				putUser: putUser,
				deleteUser: deleteUser,
				getAnalyticsdata: getAnalyticsdata,
				chart1Update: chart1Update,
				chart2Update: chart2Update,
				chart3Update: chart3Update,
				chart4Update: chart4Update,
				chart5Update: chart5Update,
				chart6Update: chart6Update,
				sendContactInfo: sendContactInfo,
				registerUser: registerUser
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

			function getUsers() {
				console.log('calling the getUsers data');
				var vObj = {
	            	method: 'GET',
                    url: '/api/users',
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function registerUser(userdetails) {
				console.log('registering new user');
				var vObj = {
	            	method: 'POST',
                    url: '/api/registeruser',
                    data: userdetails,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function sendContactInfo(msg) {
				console.log('sending the Contact Us form data: ');
				console.log(msg);
				var vObj = {
	            	method: 'POST',
                    url: '/api/contactus',
                    data: msg,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function getAnalyticsdata(userid) {
				console.log('calling the getAnalyticsdata with user: ' + userid);
				var vObj = {
	            	method: 'GET',
                    url: '/api/getanalyticsdata/' + userid,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            // console.log(vObj);
	            return httpPromise(vObj);
			};

			function chart1Update(mth, yr, userid) {
				console.log('POSTing the chart1Update');
				var vObj = {
	            	method: 'POST',
                    url:'/api/analytics/chart1',
                    data: {
                    	mth: mth,
                    	yr: yr,
                    	userid: userid
                    },
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function chart2Update(subj, yr, userid) {
				console.log('POSTing the chart2Update');
				var vObj = {
	            	method: 'POST',
                    url: '/api/analytics/chart2/',                   
                    data: {
                    	subj: subj,
                    	yr: yr,
                    	userid: userid
                    },
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function chart3Update(yr, userid) {
				console.log('POSTing the chart3Update');
				var vObj = {
	            	method: 'POST',
                    url: '/api/analytics/chart3',
                    data: {
                    	yr: yr,
                    	userid: userid
                    },
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function chart4Update(topnum, userid) {
				console.log('POSTing the chart4Update');
				var vObj = {
	            	method: 'POST',
                    url: '/api/analytics/chart4',                  
                    data: {
                    	topnum: topnum,
                    	userid: userid
                    },
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function chart5Update(subj, userid) {
				console.log('POSTing the chart5Update');
				var vObj = {
	            	method: 'POST',
                    url: '/api/analytics/chart5',                   
                    data: {
                    	subj: subj,
                    	userid: userid
                    },
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function chart6Update(subj, userid) {
				console.log('POSTing the chart6Update');
				var vObj = {
	            	method: 'POST',
                    url: '/api/analytics/chart6',                   
                    data: {
                    	subj: subj,
                    	userid: userid
                    },
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function getUserById(id) {
				console.log('calling the getUser data: ' + id);
				var vObj = {
	            	method: 'GET',
                    url: '/api/user?id=' + id,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function getUserByUnameAndPwd(uname, pwd) {
				console.log('calling the getUserByUnameAndPwd for username: ' + uname + ', password: ' + pwd);
				var vObj = {
	            	method: 'GET',
                    url: '/api/user?name=' + uname + '&password=' + pwd,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function putUser(id, name) {
				console.log('calling the putUser, id: ' + id + ', name: ' + name);
				var vObj = {
	            	method: 'PUT',
                    url: '/api/user?id=' + id,                    
                    data: {
                    	name: name
                    },
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function newUser() {
				console.log('POSTing the newUser');
				var vObj = {
	            	method: 'POST',
                    url: '/api/user',                    
                    data: {
                    	name: "here"
                    },
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function deleteUser(id) {
				console.log('calling the deleteUser data: ' + id);
				var vObj = {
	            	method: 'DELETE',
                    url: '/api/user?id=' + id,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Authorization': $rootScope.token || window.sessionStorage.act
                    }
	            };
	            return httpPromise(vObj);
			};

			function getObjYrJson(subj, yr) {
				console.log('calling the getObjYrJson data, subj: ' + subj + ', year: ' + yr + '.');
				var vObj = {
	            	method: 'GET',
                    url: '/' + subj + '/' + yr + '',
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        // 'Authorization': $rootScope.token || window.sessionStorage.act
                    },
                    cache: true
	            };
	            return httpPromise(vObj);
			};

			function getPhysicsSectionA(val) {
				console.log('Year selected is: ' + val);
				var vObj = {
		            "Q1": {
		                "a": {
		                    "q0": "(a) Explain with the aid of a diagram what is meant by the moment of a force about a point,"
		                },
		                "b": {
		                    "q0": "(b) State the conditions of equilibrium for a number of coplana parallel forces. A metre rule is found to balance at the 48 cm mark. When a body of mass 60g is suspended at the 6cm mark the balance point is found to be at the 30 cm mark. Calculate",
		                    "q1": "(i) the mass of the metre rule",
		                    "q2": "(ii) the distance of the balance point from the zero end, if the body were moved to the 13cm mark,"
		                },
		                "c": {
		                    "q0": "(c) Show that the efficiency E, the force ratio M.A. and the velocity ratio V.R of a machine are related by the equation.",
		                    "q1": "E = (M.A x 100%)/V.R",
		                    "q2": "The efficiency of a machine is 80%. Determine the work done by a person using this machine to raise a load of 200kg through a vertical distance of 3.0 m (Take g = 10 ms^2)."
		                }
		            },
		            "Q2": {
		                "a": {
		                    "q0": "(a) Draw a labelled diagram of a vacuum flask. Explain how its construction minimizes heat exchange with the surroundings,"
		                },
		                "b": {
		                    "q0": "(b) State Boyle’s law. A thread of mercury of length 15cm is used to trap some air in a capillary tube with uniform cross-sectional area and closed at one end with the tube vertical and the open end uppermost, the length of the trapped air column is 20 cm. Calculate the length of the air column when the tube is held: ",
		                    "q1": "(i) horizontally, ",
		                    "q2": "(ii) vertically with the open end underneath. (Atmospheric pressure = 76 cm of mercury),"
		                },
		                "c": {
		                    "q0": "(c) Explain why it is not advisable to sterilize a clinical thermometer in boiling water at normal atmospheric pressure."
		                }
		            },
		            "Q3": {
		                "a": {
		                    "q0": "(a) Explain with the aid of a diagram how a converging lens could be used to: ",
		                    "q1": "(i) ignite a piece of carbon paper,",
		                    "q2": "(ii) produce an enlarged picture on a screen,",
		                    "q3": "(iii) correct an eye defect,"
		                },
		                "b": {
		                    "q0": "(b) What is a mechanical wave? Describe with the aid of a diagram, an experiment to show that sound needs a material medium for transmission. State three characteristics of sound and mention the factor on which each depends."
		                }
		            },
		            "Q4": {
		                "a": {
		                    "q0": "(a) Explain what is meant by: ",
		                    "q1": "(i) electric field intensity,",
		                    "q2": "(ii) electric lines of force,"
		                },
		                "b": {
		                    "q0": "(b) Two similar but opposite point charges - q and + q each of magnitude 5.0 x 10' 8C are separated by a distance of 8.0cm in vacuum as shown in the diagram below.",
		                    "q1": "img**phys_1998_sectiona_qst4_b_1.jpg",
		                    "q2": "Calculate the magnitude and direction of the resultant electric field intensity E at the point P. Draw the lines of force due to this system of charges.",
		                    "q3": "Take 1/(4ml) = 9 x 10 NmC"
		                },
		                "c": {
		                    "q0": "(c) Calculate the following in the series circuit shown above: ",
		                    "q1": "(i) reactance of the capacitor,",
		                    "q2": "(ii) impedance of the circuit,",
		                    "q3": "(iii) current through the circuit,",
		                    "q4": "(iv) voltage across the capacitor,",
		                    "q5": "(v) average power used in the circuit.",
		                    "q6": "img**phys_1998_sectiona_qst4_c_1.jpg"
		                    // "q7": "/img/physics/myimage.jpg"
		                }
		            }
		        };
				return vObj;
			};

			function getAgricSciSectionB(val) {
				console.log('AgricSci Year selected is: ' + val);

				if(val == 1988) {
		        	return getObjYrJson('agricsci', '1988'); 
		        }	        
		        else if(val == 1989) { 
		        	return getObjYrJson('agricsci', '1989'); 
		        }
		        else if(val == 1990) { 
		        	return getObjYrJson('agricsci', '1990'); 
		        }
		        else {
		        	return getObjYrJson('agricsci', '1988'); 
		        }
			};

			function getMathematicsSectionB(val) {
				console.log('Mathematics Year selected is: ' + val);

				if(val == 1988) {
		        	return getObjYrJson('maths', '1988');
		        }	        
		        else if(val == 1989) { 
		        	return getObjYrJson('maths', '1989');
		        }
		        else if(val == 1990) { 
		        	return getObjYrJson('maths', '1990');
		        }
		        else {
		        	return getObjYrJson('maths', '1988');
		        }
			};

			function getGeographySectionB(val) {
				console.log('Geography Year selected is: ' + val);

		        if(val == 1988) {
		        	return getObjYrJson('geography', '1988');
		        }	        
		        else if(val == 1989) { 
		        	return getObjYrJson('geography', '1989');
		        }
		        else if(val == 1990) { 
		        	return getObjYrJson('geography', '1990');
		        }
		        else {
		        	return getObjYrJson('geography', '1988');
		        }
			};

			function getEconomicsSectionB(val) {
				console.log('Economics Year selected is: ' + val);

		        if(val == 1988) {
		        	return getObjYrJson('econ', '1988'); 
		        }	        
		        else if(val == 1989) { 
		        	return getObjYrJson('econ', '1989'); 
		        }
		        else if(val == 1990) { 
		        	return getObjYrJson('econ', '1990'); 
		        }
		        else {
		        	return getObjYrJson('econ', '1988'); 
		        }
			};

			function getEnglishSectionB(val) {
				console.log('English Year selected is: ' + val);

		        if(val == 1988) {
		        	return getObjYrJson('english', '1988'); 
		        }	        
		        else if(val == 1989) { 
		        	return getObjYrJson('english', '1989');
		        }
		        else if(val == 1990) { 
		        	return getObjYrJson('english', '1990');
		        }
		        else {
		        	return getObjYrJson('english', '1988');
		        }
			};

			function getPhysicsSectionB(val) {
				console.log('Physics Year selected is: ' + val);

		        if(val == 1988) {
		        	return getObjYrJson('physics', '1988'); 
		        }	        
		        else if(val == 1989) { 
		        	return getObjYrJson('physics', '1989');
		        }
		        else if(val == 1990) { 
		        	return getObjYrJson('physics', '1990');
		        }
		        else if(val == 1991) { 
		        	return getObjYrJson('physics', '1991');
		        }
		        else {
		        	return getObjYrJson('physics', '1988');
		        }
			};

			function getGovernmentSectionB(val) {
				console.log('Government Year selected is: ' + val);

		        if(val == 1988) {
		        	return getObjYrJson('govt', '1988'); 
		        }	        
		        else if(val == 1989) { 
		        	return getObjYrJson('govt', '1989'); 
		        }
		        else if(val == 1990) { 
		        	return getObjYrJson('govt', '1990'); 
		        }
		        else {
		        	return getObjYrJson('govt', '1988');
		        }
			};

			function getCommerceSectionB(val) {
				console.log('Commerce Year selected is: ' + val);

		        if(val == 1988) {
		        	return getObjYrJson('commerce', '1988'); 
		        }	        
		        else if(val == 1989) { 
		        	return getObjYrJson('commerce', '1989'); 
		        }
		        else if(val == 1990) { 
		        	return getObjYrJson('commerce', '1990'); 
		        }
		        else if(val == 1991) { 
		        	return getObjYrJson('commerce', '1991'); 
		        }
		        else {
		        	return getObjYrJson('commerce', '1989');
		        }
			};

			function getBiologySectionB(val) {
				console.log('Biology Year selected is: ' + val);

		        if(val == 1988) {
		        	return getObjYrJson('biology', '1988'); 
		        }	        
		        else if(val == 1989) { 
		        	return getObjYrJson('biology', '1989'); 
		        }
		        else {
		        	return getObjYrJson('biology', '1988');
		        }
			};
			
			function getLitInEngSectionB(val) {
				console.log('LitInEng Year selected is: ' + val);

		        if(val == 1988) {
		        	return getObjYrJson('LitInEng', '1988'); 
		        }
		        else {
		        	return getObjYrJson('LitInEng', '1988');
		        }
			};

			function getChemistrySectionB(val) {
				console.log('Chemistry Year selected is: ' + val);

		        if(val == 1988) {
		        	return getObjYrJson('chemistry', '1988'); 
		        }	        
		        else if(val == 1989) { 
		        	return getObjYrJson('chemistry', '1989'); 
		        }
		        else if(val == 1990) { 
		        	return getObjYrJson('chemistry', '1990'); 
		        }
		        else {
		        	return getObjYrJson('chemistry', '1988');
		        }
			};
		}
})();