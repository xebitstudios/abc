(function() {
  'use strict';

  ssceexamsuiApp
    .directive('examScore', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'partials/ExamScore.html',
            controller: function($scope) {
                $scope.subjj = $scope.subjj;
                // console.log('subjj is: ');
                // console.log($scope.subjj);

                $scope.closeme = function (val) {
                    // console.log("val is: " + val);
                    $('#hideme' + val + '').hide("slow");
                    $('#' + val + '').hide("slow");
                };
            },
            scope: {
                subjj: '=',
                indx: '='
            }
        };
    });    
})();
