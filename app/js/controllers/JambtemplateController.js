(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('JambtemplateController', JambtemplateController);

    // JambtemplateController.$inject = ['$scope', '$log', '$location', '$controller', '$rootScope', 'ConfigService', 'HeaderService', 'ApiService', 'growl', '$timeout'];

    /* @ngInject */
    function JambtemplateController($scope, $log, $location, $controller, $rootScope, ConfigService, HeaderService, ApiService, growl, $timeout) {

        $controller('BaseController', {$scope: $scope});
        $rootScope.baseRoute = '';

        $scope.inSynthetics = function() {
            console.log('Now in the Synthetics page!');
        };

        $scope.inSynthetics();

        $timeout(function(){
           HeaderService.setTab(3);
        }, 100);
    }
})();
