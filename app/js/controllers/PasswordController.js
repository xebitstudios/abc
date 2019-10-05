(function() {
  'use strict';

  angular
    .module('ssceexamsuiApp')
    .controller('PasswordController', PasswordController);

  // PasswordController.$inject = ['$scope'];

  /* @ngInject */
  function PasswordController($scope) {

    $scope.password = '';
    $scope.strength = '';

    $scope.grade = function() {
      var size = $scope.password.length;
      if (size > 8) {
        $scope.strength = 'strong';
      } else if (size > 3) {
        $scope.strength = 'medium';
      } else {
        $scope.strength = 'weak';
      }
    };
        
  }
})();
