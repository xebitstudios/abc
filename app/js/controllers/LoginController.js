(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('LoginController', LoginController);

    // LoginController.$inject = ['$scope', '$log', '$controller', '$rootScope', 'AuthService', 'growl', '$location', 'window'];

    /* @ngInject */
    function LoginController($scope, $log, $controller, $rootScope, AuthService, growl, $location, window) {

        $controller('BaseController', {$scope: $scope});

        $scope.title = "Login to SSCEexams";

        // implement pre-paid coupon code for specific durationlogin functionality

        $scope.username = '';
        $scope.pword = '';
        $rootScope.login = false;
        window.sessionStorage.act = '';
        $rootScope.token = '';

        $scope.disabletray = function() {
            $('#righttray ul').addClass("hide");
        };

        $scope.submitForm = function() {
            // console.log('$scope.username is: ' + $scope.username);
            // console.log('$scope.pword is: ' + $scope.pword);
            if(($scope.username == 'bawo') && ($scope.pword == 'oyowe')) {
            // if(($scope.username) && ($scope.pword)) {
                AuthService.postLoginForm({
                    uname: $scope.username, 
                    pwd: $scope.pword
                }).then(function(response) {
                    console.log('The Api response is: ');
                    console.log(response);
                    if(response.success) {
                        console.log('User Authenticated successfully.');
                        $rootScope.token = response.token;
                        window.sessionStorage.act = response.token;
                        $rootScope.login = true;
                        var baseRoute = '';
                        $location.path(baseRoute + 'dashboard');
                        $('#righttray ul').removeClass("hide");
                    }
                }, function(error) {
                    // promise rejected, could log the error with: console.log('error', error);
                    console.log('error', error);
                    growl.error('Error: Invalid User Parameters!', { ttl: 3000 });
                });
            } else {
                growl.error('Error: Invalid User Parameters!', { ttl: 3000 });
                $('#righttray ul').addClass("hide");
            }
        };

        $scope.loginUser = function(u, p) {
            // send the username and password to the DB to check if this user is registered
            return AuthService.postLoginForm({
                uname: u, 
                pwd: p
            });
        };

        $scope.disabletray();          
    }
})();
