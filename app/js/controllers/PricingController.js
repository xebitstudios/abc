(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('PricingController', PricingController);

    // PricingController.$inject = ['$scope', '$log', '$controller', '$rootScope', 'ConfigService', 'ApiService', 'growl', '$location', '$timeout', 'HeaderService'];

    /* @ngInject */
    function PricingController($scope, $log, $controller, $rootScope, ConfigService, ApiService, growl, $location, $timeout, HeaderService) {

        $controller('BaseController', {$scope: $scope});
        $rootScope.baseRoute = '';
        var baseRoute = '';

        $scope.inTestcenter = function() {
            console.log('Now in the Pricing page!');
        };

        $scope.inTestcenter();

        $timeout(function(){
           HeaderService.setTab(5);
        }, 100);

        $scope.gotoExam = function(subj, url) {
            $rootScope.currentSubject = subj;
            console.log('Sscetemplate link for ' + subj + ' clicked!');
            console.log('baseRoute + url is: ' + baseRoute + url);
            $location.path(baseRoute + url);
        };

        $scope.pricehref = function(val) {
            $log.info('User subscription clicked: ' + val);
            $location.path(baseRoute + '/signup');
        };

        $scope.examsubjects = [
          {
            name: 'Free',
            btnval: 'Sign up for free',
            href: 'freeprice',
            price: 'N0',
            btncolor: "btn-free",
            notes: 'Practice a limited number of real examinations questions covering any 6 subjects over 2 years, view your study progress and see analytics to showing how well you are progressing in your preparations.',
            side: 'Free for students as part of the SSCE examinations Student Preparatory Pack program',
            icn: 'fa fa-users fa-lg'
          },
          {
            name: 'Standard',
            btnval: 'Upgrade to standard',
            href: 'standardprice',
            price: 'N1000',
            btncolor: "btn-standard",
            notes: 'Practice real examinations questions spanning a period of 10 years over all 13 major subjects, view your study progress and see comprehensive analytics showing how well you are progressing in preparations.',
            side: 'This package allows you access to standard student metrics generator and a basic analytics dashboard',
            icn: 'fa fa-bar-chart fa-lg'
          },
          {
            name: 'Premium',
            btnval: 'Upgrade to premium',
            href: 'premiumprice',
            price: 'N2500',
            btncolor: "btn-premium",
            notes: 'Practice real examinations questions spanning a period of 28 years over all 13 major subjects, view your study progress, see and generate comprehensive analytics and progress reports showing how well you are progressing.',
            side: 'This package includes the metrics generator and a comprehensive, 360 degree analytics dashboard',
            icn: 'fa fa-tachometer fa-lg'
          },
          {
            name: 'School',
            btnval: 'Start a free School trial',
            href: 'schoolprice',
            price: 'N500',
            btncolor: "btn-school",
            notes: 'As a member of your school subscription, you can practice all available 28 years of real examinations over all 13 major subjects. View your progress reports and allow your instructors see how well you are preparing and which areas you might need some extra help.',
            side: 'Sold to School organizations in packs of 50 student seats and billed annually',
            icn: 'fa fa-graduation-cap fa-lg'
          }
        ];
    }

     
})();
