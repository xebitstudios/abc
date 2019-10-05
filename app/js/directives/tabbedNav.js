ssceexamsuiApp.directive('tabbedNav', function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        templateUrl: 'templates/directives/MyTabsDirective.html'
    };
});