// // 'use strict';

// describe('ApiService tests', function() {

// 	var authApiResp = { "data": "User Authenticated Successfully." };

// 	var postLoginFormResp = {
// 		success: true,
// 		message: 'Enjoy your token!',
// 		token: 'vdgdtGHFTHJFJfgddfTDTUDU757HJFvhgchgc'
// 	};

// 	var postTokenSyncDataResp = {};

// 	var getTokenListDataResp = {};

// 	var ApiService = {};
// 	var $httpBackend;

// 	// beforeEach(module('ApiService'));
// 	// Using the $provide and setting up the mock service in an anonymous module
// 	beforeEach(angular.mock.module(function($provide) {
// 			$provide.factory('ApiService', ApiService);

// 			ApiService.$inject = ['$http', '$q', '$timeout', '$rootScope'];

// 			function ApiService($http, $q, $timeout, growl, $rootScope, $window, ConfigService) {
				
// 				return {
// 					postLoginForm: postLoginForm,
// 					postTransportKeyData: postTransportKeyData,
// 					postLoadSeedData: postLoadSeedData,
// 					getParameterMaintData: getParameterMaintData,
// 					postParameterMaintData: postParameterMaintData,
// 					getAliasParameterMaintData: getAliasParameterMaintData,
// 					postTokenSyncData: postTokenSyncData,
// 					postValidateToken: postValidateToken,
// 					getTokenValidateResponse: getTokenValidateResponse,
// 					getTokenListData: getTokenListData,
// 					getTimeWindowData: getTimeWindowData,
// 					postTimeWindowData: postTimeWindowData,
// 					getTokenSyncData: getTokenSyncData,
// 					postAliasParameterMaintData: postAliasParameterMaintData
// 				};

// 				function getTokenListData(urlsection, searchParam, searchModel) {

// 					var deferred = $q.defer();

// 					$timeout(function() {					

// 					}, 2000);

// 					console.log('ConfigService.getApiBaseRoute is: ');
// 					console.log(ConfigService.getApiBaseRoute());

// 					$http({
// 		            	method: 'GET',
// 	                    url: ConfigService.getApiBaseRoute() + urlsection + '/' + searchParam + '/' + searchModel + '',
// 	                    headers: {
// 	                        'Content-Type': 'application/json;charset=UTF-8',
// 	                        // 'Authorization': $rootScope.token || $window.sessionStorage.act
// 	                    }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            return deferred.promise;
// 				};
				
// 				function getTokenSyncData(val) {
// 					console.log('I got called hahahaha...');

// 					var deferred = $q.defer();

// 					$timeout(function() {					
// 					}, 2000);
					
// 					$http({
// 		            	method: 'GET',
// 	                    url:  ConfigService.getApiBaseRoute() + 'NCHelpdesk-il-web/api/cadas/tokensync/' + val,
// 	                    headers: {
// 	                        'Content-Type': 'application/json;charset=UTF-8',
// 	                        // 'Authorization': $rootScope.token || $window.sessionStorage.act
// 	                    }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            return deferred.promise;
// 				};

// 				function postLoginForm(uname, pword) {

// 					var deferred = $q.defer();

// 					$timeout(function() {					

// 					}, 2000);

// 					$http({
// 		            	method: 'POST',
// 		                url: '/api/authenticate',
// 		                data: {
// 		                    name: uname,
// 		                    password: pword
// 		                },
// 		                headers: {
// 		                    'Content-Type': 'application/json'
// 		                    // 'Authorization': $rootScope.token
// 		                }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            return deferred.promise;
// 				};

// 				function postTokenSyncData() {

// 					var deferred = $q.defer();

// 					$timeout(function() {					

// 					}, 2000);

// 					$http({
// 		            	method: 'POST',
// 		                url: ConfigService() + 'NCHelpdesk-il-web/api/cadas/tokensync/',
// 		                data: {
// 		                },
// 		                headers: {
// 		                    'Content-Type': 'application/x-www-form-urlencoded',
// 	                        'Authorization': $rootScope.token || $window.sessionStorage.act
// 		                }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            return deferred.promise;
// 				};

// 				function postValidateToken(val) {

// 					var deferred = $q.defer();

// 					$timeout(function() {					

// 					}, 2000);

// 					$http({
// 		            	method: 'POST',
// 		                url: ConfigService.getApiBaseRoute() + 'NCHelpdesk-il-web/api/cadas/tokenvalidation/',
// 		                data: val,
// 		                headers: {
// 		                    'Content-Type': 'application/x-www-form-urlencoded',
// 	                        'Authorization': $rootScope.token || $window.sessionStorage.act
// 		                }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            return deferred.promise;
// 				};

// 				function getTokenValidateResponse(val) {

// 					var deferred = $q.defer();

// 					$http({
// 		            	method: 'GET',
// 		                url: ConfigService.getApiBaseRoute() + 'NCHelpdesk-il-web/api/cadas/tokenvalidation/' + val,
// 		                data: val,
// 		                headers: {
// 		                    'Content-Type': 'application/json'
// 	                        // 'Authorization': $rootScope.token || $window.sessionStorage.act
// 		                }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            return deferred.promise;
// 				};

// 				function postTransportKeyData(val) {

// 					var deferred = $q.defer();

// 					$http({
// 		            	method: 'POST',
// 		                url: ConfigService.getApiBaseRoute() + 'NCHelpdesk-il-web/api/cadas/tokenloadtranskey/',
// 		                data: val,
// 	                    headers: {
// 	                        'Content-Type': 'application/json'
// 	                        // 'Authorization': $rootScope.token || $window.sessionStorage.act
// 	                    }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            console.log("deferred.promise is: ");
// 		            console.log(deferred.promise);

// 		            return deferred.promise;
// 				};

// 				function postLoadSeedData(val) {

// 					var deferred = $q.defer();

// 					$http({
// 		            	method: 'POST',
// 		                url: ConfigService.getApiBaseRoute() + 'NCHelpdesk-il-web/api/cadas/tokenloadseed/',
// 		                data: val,
// 	                    headers: {
// 	                        'Content-Type': 'application/json'
// 	                        // 'Authorization': $rootScope.token || $window.sessionStorage.act
// 	                    }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            return deferred.promise;
// 				};

// 				function getAliasParameterMaintData() {

// 					var deferred = $q.defer();

// 					$http({
// 		            	method: 'GET',
// 	                    url: ConfigService.getApiBaseRoute() + 'NCHelpdesk-il-web/api/cadas/tokenaliasmaintenance/',
// 	                    headers: {
// 	                        'Content-Type': 'application/json'
// 	                        // 'Authorization': $rootScope.token || $window.sessionStorage.act
// 	                    }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            return deferred.promise;
// 				};

// 				function getParameterMaintData() {

// 					var deferred = $q.defer();

// 					$http({
// 		            	method: 'GET',
// 	                    url: ConfigService.getApiBaseRoute() + 'NCHelpdesk-il-web/api/cadas/tokenparamsmaintenance/',
// 	                    headers: {
// 	                        'Content-Type': 'application/json'
// 	                        // 'Authorization': $rootScope.token || $window.sessionStorage.act
// 	                    }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            return deferred.promise;
// 				};

// 				function postParameterMaintData(val) {

// 					var deferred = $q.defer();

// 					$http({
// 		            	method: 'POST',
// 	                    url: ConfigService.getApiBaseRoute() + 'NCHelpdesk-il-web/api/cadas/tokenparamsmaintenance/',
// 	                    data: val,
// 	                    headers: { 
// 	                    	'Content-Type': 'application/json'
// 	                    }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            return deferred.promise;
// 				};

// 				function postAliasParameterMaintData(val) {

// 					var deferred = $q.defer();

// 					$http({
// 		            	method: 'POST',
// 	                    url: ConfigService.getApiBaseRoute() + 'NCHelpdesk-il-web/api/cadas/tokenaliasmaintenance/',
// 	                    data: val,
// 	                    headers: { 
// 	                    	'Content-Type': 'application/json'
// 	                    }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            return deferred.promise;
// 				};

// 				function getTimeWindowData(searchval1, searchval2) {

// 					var deferred = $q.defer();

// 					$http({
// 		            	method: 'GET',
// 	                    // url: ConfigService.getApiBaseRoute() + 'NCHelpdesk-il-web/api/cadas/tokentimemaintenance/',
// 	                    url: '/NCHelpdesk-il-web/api/cadas/tokentimemaintenance/' + searchval1 + '/' + searchval2 + '/',
// 	                    headers: {
// 	                        'Content-Type': 'application/json',
// 	                        // 'Authorization': $rootScope.token || $window.sessionStorage.act
// 	                    }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            return deferred.promise;
// 				};

// 				function postTimeWindowData(val) {

// 					var deferred = $q.defer();

// 					$http({
// 		            	method: 'POST',
// 	                    url: ConfigService.getApiBaseRoute() + 'NCHelpdesk-il-web/api/cadas/tokentimemaintenance/',
// 	                    data: val,
// 	                    headers: { 
// 	                    	'Content-Type': 'application/json',
// 	                    	// 'Authorization': $rootScope.token || $window.sessionStorage.act
// 	                    }
// 		            })
// 		            .success(function (response) {
// 		            	deferred.resolve(response);
// 		            })
// 		            .error(function (response) {
// 		            	deferred.resolve(response);
// 		            });

// 		            return deferred.promise;
// 				};
// 			}
// 		})
// 	);

// 	beforeEach(angular.mock.inject(function(_ApiService_, _$httpBackend_) {
// 		ApiService = _ApiService_;
// 		$httpBackend = _$httpBackend_;
// 	}));

// 	it('should have a postLoginForm API return response', function() {
// 		var response;

// 		$httpBackend.when('POST', '/api/authenticate')
// 			.respond(200, postLoginFormResp);

// 		ApiService.postLoginForm({ "name": "John", "password": "johnpwd" })
// 			.then(function(data) {
// 				response = data;
// 			});
// 		$httpBackend.flush();

// 		expect(response).toEqual(postLoginFormResp);
// 	});

// 	// it('should have a postTokenSyncData API return response', function() {
// 	// 	var response;
// 	// 	// url: ConfigService.getApiBaseRoute() + 'NCHelpdesk-il-web/api/cadas/tokensync/',

// 	// 	$httpBackend.when('POST', 'http://10.255.211.124:6045/NCHelpdesk-il-web/api/cadas/tokensync/')
// 	// 		.respond(200, postTokenSyncDataResp);

// 	// 	ApiService.postTokenSyncData({})
// 	// 		.then(function(data) {
// 	// 			response = data;
// 	// 		});
// 	// 	$httpBackend.flush();

// 	// 	expect(response).toEqual(postTokenSyncDataResp);
// 	// });

// 	it('should have a postLoginForm API defined', function() {
// 		expect(ApiService.postLoginForm).toBeDefined();
// 		expect(ApiService.postLoginForm).toEqual(jasmine.any(Function));
// 	});

// 	it('should have a getTokenSyncData API defined', function() {
// 		expect(ApiService.getTokenSyncData).toBeDefined();
// 		expect(ApiService.getTokenSyncData).toEqual(jasmine.any(Function));
// 	});

// 	it('should have a postTransportKeyData API defined', function() {
// 		expect(ApiService.postTransportKeyData).toBeDefined();
// 		expect(ApiService.postTransportKeyData).toEqual(jasmine.any(Function));
// 	});

// 	it('should have a getParameterMaintData API defined', function() {
// 		expect(ApiService.getParameterMaintData).toBeDefined();
// 		expect(ApiService.getParameterMaintData).toEqual(jasmine.any(Function));
// 	});

// 	it('should have a postParameterMaintData API defined', function() {
// 		expect(ApiService.postParameterMaintData).toBeDefined();
// 		expect(ApiService.postParameterMaintData).toEqual(jasmine.any(Function));
// 	});

// 	it('should have a postTokenSyncData API defined', function() {
// 		expect(ApiService.postTokenSyncData).toBeDefined();
// 		expect(ApiService.postTokenSyncData).toEqual(jasmine.any(Function));
// 	});

// 	it('should have a postValidateToken API defined', function() {
// 		expect(ApiService.postValidateToken).toBeDefined();
// 		expect(ApiService.postValidateToken).toEqual(jasmine.any(Function));
// 	});

// 	it('should have a getTokenValidateResponse API defined', function() {
// 		expect(ApiService.getTokenValidateResponse).toBeDefined();
// 		expect(ApiService.getTokenValidateResponse).toEqual(jasmine.any(Function));
// 	});

// 	it('should have a getTimeWindowData API defined', function() {
// 		expect(ApiService.getTimeWindowData).toBeDefined();
// 		expect(ApiService.getTimeWindowData).toEqual(jasmine.any(Function));
// 	});

// 	it('should have a postTimeWindowData API defined', function() {
// 		expect(ApiService.postTimeWindowData).toBeDefined();
// 		expect(ApiService.postTimeWindowData).toEqual(jasmine.any(Function));
// 	});

// 	it('should have a postAliasParameterMaintData API defined', function() {
// 		expect(ApiService.postAliasParameterMaintData).toBeDefined();
// 		expect(ApiService.postAliasParameterMaintData).toEqual(jasmine.any(Function));
// 	});

// 	it('should have a postLoadSeedData API defined', function() {
// 		expect(ApiService.postLoadSeedData).toBeDefined();
// 		expect(ApiService.postLoadSeedData).toEqual(jasmine.any(Function));
// 	});

// 	it('should have a getAliasParameterMaintData API defined', function() {
// 		expect(ApiService.getAliasParameterMaintData).toBeDefined();
// 		expect(ApiService.getAliasParameterMaintData).toEqual(jasmine.any(Function));
// 	});

// 	// it('should have a getTokenListData API return response', function() {
// 	// 	var response;
// 	// 	var rootScopeurl = 'http://10.255.211.124:6045';
// 	// 	var urlsection = 'NCHelpdesk-il-web/api/tokenlistmodel';
// 	// 	var searchParam = 'tokenid';
// 	// 	var searchModel = '55';

// 	// 	$httpBackend.when('POST', rootScopeurl + '/' + urlsection + '/' + searchParam + '/' + searchModel + '')
// 	// 		.respond(200, getTokenListDataResp);

// 	// 	ApiService.getTokenListData(urlsection, searchParam, searchModel)
// 	// 		.then(function(data) {
// 	// 			response = data;
// 	// 		});
// 	// 	$httpBackend.flush();

// 	// 	expect(response).toEqual(getTokenListDataResp);
// 	// });

// 	// it('should get empty token from the service when token not retrieved', function() {
// 	// 	var tokenval = '';
// 	// 	TokenService.setToken(tokenval);
// 	// 	dump(angular.mock.dump(tokenval));
// 	// 	expect(TokenService.getToken()).toEqual('');
// 	// });
	
// 	// it('should set the token supplied in the service', function() {
// 	// 	var tokenval = 'eyuehkhKJK676hjjj';
// 	// 	TokenService.setToken(tokenval);
// 	// 	dump(angular.mock.dump(tokenval));
// 	// 	expect(TokenService.getToken()).toEqual('eyuehkhKJK676hjjj');
// 	// });

// });