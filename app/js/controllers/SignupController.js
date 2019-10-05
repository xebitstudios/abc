(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('SignupController', SignupController);

    // SignupController.$inject = ['$scope', '$log', '$controller', '$rootScope', 'ConfigService', 'ApiService', 'growl', '$location'];

    /* @ngInject */
    function SignupController($scope, $log, $controller, $rootScope, ConfigService, ApiService, growl, $location) {

        $controller('BaseController', {$scope: $scope});
        var baseRoute = '';

        $scope.title = "Signup to SSCEexams";

        $scope.registerschoolclick = function() {
            console.log('Register School link clicked!');
            $location.path(baseRoute + 'registersch');
        };

        $scope.registernewuser = function() {
            $log.info('Sending new user details to server');
            var userdetails = {
                susr: $('#susr').val(),
                semail: $('#semail').val(),
                spwd: $('#spwd').val(),
                sspwd: $('#sspwd').val()
             };
            console.log('userdetails is: ');
            console.log(userdetails);
            $scope.registerNewUser(userdetails);
        };

        $scope.registerNewUser = function(userdetails) {
            ApiService.registerUser(userdetails)
                .then(function(response) {
                        console.log('Sending the new user form details: ');
                        console.log(response);
                        console.log(response.data);
                        if(response.data) {
                            console.log('User created successfully.');
                            growl.info('New user form submitted successfully, you can now proceed to login. Thanks.', { ttl: 3000 });
                            $location.path(baseRoute);
                        }
                    }, function(error) {
                        console.log('error', error);
                        growl.error('Error: Form submission failed!', { ttl: 3000 });
                        $location.path(baseRoute);
                    }
                );
            };
    }

     
})();
