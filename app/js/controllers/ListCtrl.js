(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('ListCtrl', ListCtrl);

        // ListCtrl.$inject = ['$scope'];

        /* @ngInject */
        function ListCtrl($scope) {
            $scope.items = [
                {'id': 1, 'label': 'First', 'done': true},
                {'id': 2, 'label': 'Second', 'done': false}
            ];

            $scope.getDoneClass = function(item) {
                return {
                    'finished': item.done,
                    'unfinished': !item.done
                };
            };
        }
})();