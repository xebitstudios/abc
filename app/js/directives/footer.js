(function() {
  'use strict';

  ssceexamsuiApp
    .directive('mockFooter', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'partials/MockFooter.html',
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
