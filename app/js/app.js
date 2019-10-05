// (function() {
// 'use strict';
	
	// create our ssceexamsuiApp module
	var ssceexamsuiApp = angular
		.module('ssceexamsuiApp', [
			// Angular modules
			'ngAnimate',
			'ngSanitize',
			'ngResource',
			'ngModal',
			'ngRoute',
			// 3rd Party modules
			'nvd3',
			'ui.bootstrap',
			'ui.select',
			'ui.footable',
			'angular-growl',
			'datepicker'
			// 'angularjs-dropdown-multiselect'
		])
		.factory('myCache', function($cacheFactory) {
			return $cacheFactory('myCache');
		})
		.config(['$httpProvider', function($httpProvider) {
			$httpProvider.defaults.headers.common["X-Requested-With"] = 'XmlHttpRequest';
		}])
		.config(['$logProvider', function($logProvider) {
		  	// enable this line to turn off/disable all the logging within controller
			$logProvider.debugEnabled(true);
		}])
		.config(['$provide', '$httpProvider', function($provide, $httpProvider) {
			$provide.factory('notAuthorizedInterceptor', function($q, $rootScope) {
				return {
					responseError: function (response) {
						if (response.status === 401) {
							$rootScope.unauthorized = true;
						}
						return $q.reject(response);
					}
				};
			});
			$httpProvider.interceptors.push('notAuthorizedInterceptor');
		}])
		.config(['$provide', function($provide) {
		  	$provide.decorator('$log', ['$delegate', function ($delegate) {
		  		// this extension adds a date timestamp to all debug logs, it keeps track of the original debug method
			  	var origDebug = $delegate.debug; 
			  	// intercept the call to $log.debug so we can enhance it
			  	$delegate.debug = function () {
			  		var args = [].slice.call(arguments);
			  		args[0] = [new Date().toString(), ': ', args[0]].join('');
			  		// send on our enhanced message to the original debug method
			  		origDebug.apply(null, args);
			  	};
			  	return $delegate;
			  }
			]);
		}])
		.config(function($routeProvider, $locationProvider) {
			
	        var baseRoute = '/';
			console.log('baseRoute in AppJS is: ' + baseRoute);

			$routeProvider
				.when(baseRoute,
				{
					templateUrl:'templates/LoginPage.html',
					controllers:'LoginController'
					// controllerAs:'hlvm'
				})
				.when(baseRoute + 'signup',
				{
					templateUrl:'templates/Signup.html',
					controllers:'SignupController'
					// controllerAs:'suvm'
				})
				.when(baseRoute + 'pricing',
				{
					templateUrl:'templates/Pricing.html',
					controllers:'PricingController'
					// controllerAs:'pvm'
				})
				.when(baseRoute + 'contactus',
				{
					templateUrl:'templates/Contactus.html',
					controllers:'ContactController'
					// controllerAs:'cvm'
				})
				.when(baseRoute + 'registersch',
				{
					templateUrl:'templates/RegisterSchool.html',
					controllers:'RegisterSchoolController'
					// controllerAs:'rsvm'
				})
				.when(baseRoute + 'dashboard',
				{
					templateUrl:'templates/LandingPage.html',
					controllers:'LandingController'
					// controllerAs:'lcvm'
				})
				.when(baseRoute + 'testcenter',
				{
					templateUrl:'templates/TestCenter.html',
					controllers:'TestcenterController'
					// controllerAs:'tcvm'
				})
				.when(baseRoute + 'analytics',
				{
					templateUrl:'templates/Analytics.html',
					controllers:'AnalyticsController'
					// controllerAs:'avm'
				})
				.when(baseRoute + 'synthetics',
				{
					templateUrl:'templates/Synthetics.html',
					controllers:'SyntheticsController'
					// controllerAs:'svm'
				})
				.when(baseRoute + 'sscetemplate',
				{
					templateUrl:'templates/SsceTemplate.html',
					controllers:'SscetemplateController'
					// controllerAs:'stm'
				})
				.when(baseRoute + 'jambtemplate',
				{
					templateUrl:'templates/JambTemplate.html',
					controllers:'JambtemplateController'
					// controllerAs:'jtm'
				})
				.when(baseRoute + 'sscephysicsatemplate',
				{
					templateUrl:'templates/SscePhysicsATemplate.html',
					controllers:'SscephysicsatemplateController'
					// controllerAs:'spatm'
				})
				.when(baseRoute + 'sscephysicsbtemplate',
				{
					templateUrl:'templates/SscePhysicsBTemplate.html',
					controllers:'SscephysicsbtemplateController'
					// controllerAs:'spbtm'
				})
				.when(baseRoute + 'ssceenglishbtemplate',
				{
					templateUrl:'templates/SsceEnglishBTemplate.html',
					controllers:'SsceenglishbtemplateController'
					// controllerAs:'sebtm'
				})
				.when(baseRoute + 'ssceeconomicsbtemplate',
				{
					templateUrl:'templates/SsceEconomicsBTemplate.html',
					controllers:'SsceeconomicsbtemplateController'
					// controllerAs:'secbtm'
				})
				.when(baseRoute + 'sscegovernmentbtemplate',
				{
					templateUrl:'templates/SsceGovernmentBTemplate.html',
					controllers:'SscegovernmentbtemplateController'
					// controllerAs:'sgvbtm'
				})
				.when(baseRoute + 'sscegeographybtemplate',
				{
					templateUrl:'templates/SsceGeographyBTemplate.html',
					controllers:'SscegeographybtemplateController'
					// controllerAs:'sgbtm'
				})
				.when(baseRoute + 'sscemathematicsbtemplate',
				{
					templateUrl:'templates/SsceMathematicsBTemplate.html',
					controllers:'SscemathematicsbtemplateController'
					// controllerAs:'smbtm'
				})
				.when(baseRoute + 'ssceagricscibtemplate',
				{
					templateUrl:'templates/SsceAgricSciBTemplate.html',
					controllers:'SsceagricscibtemplateController'
					// controllerAs:'sasbtm'
				})
				.when(baseRoute + 'sscecommercebtemplate',
				{
					templateUrl:'templates/SsceCommerceBTemplate.html',
					controllers:'SscecommercebtemplateController'
					// controllerAs:'scmbtm'
				})
				.when(baseRoute + 'sscebiologybtemplate',
				{
					templateUrl:'templates/SsceBiologyBTemplate.html',
					controllers:'SscebiologybtemplateController'
					// controllerAs:'sbmbtm'
				})
				.when(baseRoute + 'sscelitinengbtemplate',
				{
					templateUrl:'templates/SsceLitInEngBTemplate.html',
					controllers:'SscelitinengbtemplateController'
					// controllerAs:'slietm'
				})
				.when(baseRoute + 'sscechemistrybtemplate',
				{
					templateUrl:'templates/SsceChemistryBTemplate.html',
					controllers:'SscechemistrybtemplateController'
					// controllerAs:'schtm'
				})
				.when('/404',
				{
					templateUrl:'templates/404.html',
					controllers:'ErrorPageController'
				})
				.otherwise({
					redirectTo: baseRoute
				});
			$locationProvider.html5Mode({
				enabled: false,
				requireBase: false
			});
		})	   
		.run(function($rootScope) {
			$rootScope.baseRoute = $(location).attr('pathname');
		})
		.run(function($rootScope, $location) {
			// $rootScope.$on('$routeChangeStart', function(event, next, current) {
			// 	if(!$rootScope.loggedUser) {
			// 		$location.path('/register');
			// 	}
			// });

			$rootScope.$on('$locationChangeStart', function(event, next, current) {
				console.log("Current: " + current);
				console.log("Next: " + next);
			});

			// $rootScope.$on('$locationChangeSuccess', function() {
			// 	$rootScope.actualLocation = $location.path();
			// });

			// $rootScope.$watch(function() { 
			// 	return $location.path() 
			// }, function(newLocation, oldLocation) {
			// 	if($rootScope.actualLocation == newLocation) {
			// 		$location.path('/register');
			// 	}
			// });
		})
		.run(function ($templateCache) {})
		.config(function(ngModalDefaultsProvider) {
			return ngModalDefaultsProvider.set({
		    	closeButtonHtml: "<i class='fa fa-times'></i>"
			});
		})
		.config(['growlProvider', function (growlProvider) {
			growlProvider.globalPosition('top-center');
		}])
		.directive("footable", function($timeout) {
		    return {
		        restrict: 'A',
		        link: function(scope, element, attrs){
		            element.footable(scope.$eval(attrs.footable));
		            $timeout(function(){
		               element.trigger('footable_redraw');
		            }, 100);
		        }
		    };
		})
		.factory('getLocalStorage', function() {    
	    });
// })();