// describe('PasswordController unit tests', function() {

//   // beforeEach(angular.mock.module('ssceexamsuiApp'));
//   beforeEach(module('ssceexamsuiApp'));

//   var $controller;

//   beforeEach(inject(function(_$controller_){
//     $controller = _$controller_;
//   }));

//   describe('PasswordController exists', function() {
//     it('should have a PasswordController controller', function() {
//       expect(ssceexamsuiApp.PasswordController).not.toEqual(null);
//     });
//   });

//   describe('$scope.grade', function() {
//     var $scope, controller;

//     beforeEach(function() {
//       $scope = {};
//       controller = $controller('PasswordController', { $scope: $scope });
//     });

//     it('$scope.grade is Defined', function() {
//       expect($scope.grade).toBeDefined();
//     });

//     it('sets the strength to "strong" if the password length is >8 chars', function() {
//       $scope.password = 'longerthaneightchars';
//       $scope.grade();
//       expect($scope.strength).toEqual('strong');
//     });

//     it('sets the strength to "weak" if the password length <3 chars', function() {
//       $scope.password = 'a';
//       $scope.grade();
//       expect($scope.strength).toEqual('weak');
//     });
//   });

// });