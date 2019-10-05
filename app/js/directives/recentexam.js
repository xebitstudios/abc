(function() {
  'use strict';

  ssceexamsuiApp
    .directive('recentExam', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'partials/RecentExam.html',
            controller: function($scope) {
                $scope.attn = $scope.attn[0];
                console.log('attn is: ');
                console.log($scope.attn);

                // $scope.closemee = function (val) {
                //     // console.log("val is: " + val);
                //     $('#analy' + val + '').hide("slow");
                // };
            },
            scope: {
                attn: '=',
                indx: '='
            }
        };
    });    
})();
