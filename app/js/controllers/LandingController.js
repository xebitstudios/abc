(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('LandingController', LandingController);

    // LandingController.$inject = ['$scope', '$log', '$location', '$controller', '$rootScope', 'ConfigService', 'HeaderService', 'ApiService', 'growl', '$timeout'];

    /* @ngInject */
    function LandingController($scope, $log, $location, $controller, $rootScope, ConfigService, HeaderService, ApiService, growl, $timeout) {

        $controller('BaseController', {$scope: $scope});
        $rootScope.baseRoute = '';
        var baseRoute = '';
        $scope.pgwidth = true;

        console.log('page width is: ' + $('body').width());

        $scope.testcenter = function() {
            console.log('Testcenter link clicked!');
            $location.path(baseRoute + 'testcenter');
        };

        $scope.analytics = function() {
            console.log('Analytics link clicked!');
            $location.path(baseRoute + 'analytics');
        };

        $scope.synthetics = function() {
            console.log('Synthetics link clicked!');
            // $location.path(baseRoute + 'synthetics');
            $location.path(baseRoute + '404');
        };

        $scope.loginclick = function() {
            console.log('Log in link clicked!');
            $location.path(baseRoute);
        };

        $scope.signupclick = function() {
            console.log('Sign up link clicked!');
            $location.path(baseRoute + 'signup');
        };

        $scope.getTheUsers = function() {
            ApiService.getUsers();
        };

        $scope.getTheUser = function() {
            // ApiService.newUser();
            // ApiService.getUserById('58916a76e896b98a8de3fa71');
            // ApiService.getUserByUnameAndPwd('Yemisi', 'yemisipwd');
            // ApiService.putUser('58916a75e896b98a8de3fa70', 'Adetunji');
            ApiService.deleteUser('589f4415d686767952202e83');
        };

        $timeout(function(){
           HeaderService.setTab(0);
           if ($('body').width() < 600) {
              $scope.pgwidth = false;
            } else {
              $scope.pgwidth = true;
            }
        }, 100);
    }
})();