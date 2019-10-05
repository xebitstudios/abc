(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('RegisterSchoolController', RegisterSchoolController);

    // RegisterSchoolController.$inject = ['$scope', '$log', '$controller', '$rootScope', 'ConfigService', 'ApiService', 'growl', '$location'];

    /* @ngInject */
    function RegisterSchoolController($scope, $log, $controller, $rootScope, ConfigService, ApiService, growl, $location) {

        $controller('BaseController', {$scope: $scope});

        $scope.title = "Register your School to SSCEexams";

        $scope.schdetails = {
            username: '',
            pword: '',
            schname: '',
            schaddress: ''
        };

        /**
        */

        $scope.submitForm = function() {
            console.log('$scope.schdetails.username is: ' + $scope.username);
            console.log('$scope.schdetails.pword is: ' + $scope.pword); 
            console.log('$scope.schdetails.schname is: ' + $scope.schname);
            console.log('$scope.schdetails.schaddress is: ' + $scope.schaddress); 

            console.log('Register form submitted!');
            ApiService.RegisterSchool(schdetails);
            // $location.path(baseRoute);
        };
    }

     
})();
