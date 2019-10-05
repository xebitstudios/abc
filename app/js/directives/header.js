(function() {
  'use strict';

  ssceexamsuiApp
    .directive('mockHeader', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'partials/MockHeader.html',
            controller: function($scope) {

            },
            scope: {
                'text': '@'
            },
            link: function (scope, element, attrs) {
                element.button();
                scope.$watch('text', function (value) {
                    element.button('option', 'label', value);
                });
            }
        };
    });
    
})();
