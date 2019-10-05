(function() {
  'use strict';

  ssceexamsuiApp
    .directive('topRow', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'partials/TopRow.html',
            controller: function($scope) {
                $scope.rowt = $scope.toproww[$scope.indx];
                // console.log('toproww is: ');
                // console.log($scope.toproww);

                $scope.closemee = function (val) {
                    // console.log("val is: " + val);
                    $('#analy' + val + '').hide("slow");
                };
            },
            scope: {
                toproww: '=',
                indx: '='
            }
        };
    });    
})();
