(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('SsceenglishbtemplateController', SsceenglishbtemplateController);

    // SsceenglishbtemplateController.$inject = ['$scope', '$log', '$location', '$controller', '$rootScope', 'ConfigService', 'HeaderService', 'ApiService', 'TimerService', 'growl', '$timeout'];

    /* @ngInject */
    function SsceenglishbtemplateController($scope, $log, $location, $controller, $rootScope, ConfigService, HeaderService, ApiService, TimerService, growl, $timeout, LoggingService) {

        $controller('BaseController', {$scope: $scope});
        $rootScope.baseRoute = '';
        $scope.exmid = 'eng_B';
        $scope.logEvent = function() {
            LoggingService.postTrack('{' + $scope.exmid + ',' + $scope.userid + ',' + $scope.examyear + ',' + $scope.qqt.Qval + ',' + new Date().getTime() + '}');
        };

        $scope.intab = function() {
            console.log('Now in the SSCE English_B Template page!');
        };

        $scope.intab();

        $timeout(function(){
           HeaderService.setTab(1);
        }, 100);

        $scope.pctused = 0;
        $scope.totaltimemins = 20;
        $scope.timegone = '0 hrs 0 mins 0 secs';
        $scope.timeleft = ' hrs 20 mins 0 secs';
        $scope.activeNav = 'Start';
        $scope.oldtime = 0;
        $scope.lefttime = 0;
        $scope.examyear = $rootScope.english_selected_year;
        $scope.qtlength = 0;

        $scope.getStartTime = function() {
            $scope.oldtime = new Date().getTime();
            console.log('start time is: ' + $scope.oldtime);
        };

        $scope.getStartTime();

        $scope.btnsList = _.pluck(_.values($scope.navbtns), 'title');

        $scope.getNum = function() {
            return $scope.qqt.Qval;
        };

        $scope.setNum = function(val) {
            $scope.qqt.Qval = val;
        };

        $scope.clearImg = function() {
            $scope.qqt.Q.img = "";
        };

        $scope.getNext = function() {
            if($scope.qtlength > $scope.sctn1PassaObjNum+1) {
                $scope.sctn1PassaObjNum = $scope.sctn1PassaObjNum + 1;
                $scope.setQst();
            } else {
                console.log('You have completed the questions in this section!');
            }
            $scope.logEvent();
        };

        $scope.getPrev = function() {
            if($scope.sctn1PassaObjNum > 0) {
                $scope.sctn1PassaObjNum = $scope.sctn1PassaObjNum - 1;
                $scope.setQst();
            } else {
                console.log('You have reached the first question in this section!');
            }
        };

        $scope.getFirst = function() {
            $scope.sctn1PassaObjNum = 0;
            $scope.setQst();
        };

        $scope.getLast = function() {
            $scope.sctn1PassaObjNum = $scope.qtlength - 1;
            $scope.setQst();
        };

        $scope.navclick = function(navtitle) {
            $scope.activeNav = navtitle;
        };

        console.log('$rootScope.english_selected_year is A: ' + $rootScope.english_selected_year);
        $scope.qtt = {};

        $scope.setToZero = function() {
            // console.log('$scope.qqt iss: ');
            // console.log($scope.qqt);
            $scope.sctn1PassaObjNum = 0;
            $scope.currentQst = 0;
            $scope.setQst();
        };
        $scope.dinstruction = 'Answer All questions in this section.';

        $scope.sectionclick = function(val) {
            $scope.sectionHeader = val;
            $scope.markChosen(val);
            // console.log('val is: ' + val);
            if(val == 'Section 1 - Passage A') {
                $scope.dinstruction = 'Answer All questions in this section.';
                $scope.qqt = {
                    "qstarray": $scope.qtt.S1.PA.qst,
                    "qstlist": _.omit($scope.qtt.S1.PA, 'qst')
                };
                $scope.qtlength = _.keys($scope.qqt.qstlist).length;
                $scope.setToZero();
            } else if(val == 'Section 1 - Passage B') {
                $scope.dinstruction = 'Answer All questions in this section.';
                $scope.qqt = {
                    "qstarray": $scope.qtt.S1.PB.qst,
                    "qstlist": _.omit($scope.qtt.S1.PB, 'qst')
                };
                $scope.qtlength = _.keys($scope.qqt.qstlist).length;
                $scope.setToZero();
            } else if(val == 'Section 2') {
                $scope.qqt = {
                    "qstarray": $scope.qtt.S2.headd,
                    "qstlist": _.omit($scope.qtt.S2, 'headd')
                };
                $scope.dinstruction = $scope.qqt.qstarray;
                $scope.qtlength = _.keys($scope.qqt.qstlist).length;
                $scope.setToZero();
            } else if(val == 'Section 3') {
                $scope.qqt = {
                    "qstarray": $scope.qtt.S3.headd,
                    "qstlist": _.omit($scope.qtt.S3, 'headd')
                };
                $scope.dinstruction = $scope.qqt.qstarray;
                $scope.qtlength = _.keys($scope.qqt.qstlist).length;
                $scope.setToZero();
            } else if(val == 'Section 4') {
                $scope.qqt = {
                    "qstarray": $scope.qtt.S4.headd,
                    "qstlist": _.omit($scope.qtt.S4, 'headd')
                };
                $scope.dinstruction = $scope.qqt.qstarray;
                $scope.qtlength = _.keys($scope.qqt.qstlist).length;
                $scope.setToZero();
            } else if(val == 'Section 5') {
                $scope.qqt = {
                    "qstarray": $scope.qtt.S5.headd,
                    "qstlist": _.omit($scope.qtt.S5, 'headd')
                };
                $scope.dinstruction = $scope.qqt.qstarray;
                $scope.qtlength = _.keys($scope.qqt.qstlist).length;
                $scope.setToZero();
            }
        };

        $scope.sectionHeader = 'Section 1 - Passage A';        
        // console.log('$scope.qtt is now: ');
        // console.log($scope.qtt);

        $scope.sectionslist = [
            {'val' : 'Section 1 - Passage A', 'ischosen': 'chosen'},
            {'val' : 'Section 1 - Passage B', 'ischosen': ''},
            {'val' : 'Section 2', 'ischosen': ''},
            {'val' : 'Section 3', 'ischosen': ''},
            {'val' : 'Section 4', 'ischosen': ''},
            {'val' : 'Section 5', 'ischosen': ''}
        ];

        $scope.markChosen = function(val) {
            for(var e=0;e<$scope.sectionslist.length;e++) {
                $scope.sectionslist[e].ischosen = '';
            }

            if(val == 'Section 1 - Passage A') {
                $scope.sectionslist[0].ischosen = 'chosen';
            } else if(val == 'Section 1 - Passage B') {
                $scope.sectionslist[1].ischosen = 'chosen';
            }
             else if(val == 'Section 2') {
                $scope.sectionslist[2].ischosen = 'chosen';
            }
             else if(val == 'Section 3') {
                $scope.sectionslist[3].ischosen = 'chosen';
            }
             else if(val == 'Section 4') {
                $scope.sectionslist[4].ischosen = 'chosen';
            }
             else if(val == 'Section 5') {
                $scope.sectionslist[5].ischosen = 'chosen';
            }
        };

        $scope.markChosen('Section 1 - Passage A');
        $scope.selectedSection = 0;
        $scope.sctn1PassaObjNum = 0;
        $scope.currentQst = 0;

        $scope.setQst = function() {
            $scope.sctn1PassaObj = _.pick($scope.qqt.qstlist, _.keys($scope.qqt.qstlist)[$scope.sctn1PassaObjNum]);
            $scope.sc1PsaQst = $scope.sctn1PassaObj[_.keys($scope.sctn1PassaObj)]; 
            $scope.currentQst = $scope.sctn1PassaObjNum + 1;
            $scope.qstkey = _.keys($scope.sctn1PassaObj)[0];
            $scope.qstvalue = (_.values($scope.sctn1PassaObj)[0]).qs;
        };

        ApiService.getEnglishSectionB($rootScope.english_selected_year)
            .then(function(response) {
                    console.log('The Api.getEnglishSectionB() response is: ');
                    console.log(response);
                    console.log(response.data);
                    if(response.data) {
                        console.log('call successful.');
                        $scope.qtt = response.data;
                        if($scope.selectedSection == 0) {
                            $scope.qqt = {
                                "qstarray": $scope.qtt.S1.PA.qst,
                                "qstlist": _.omit($scope.qtt.S1.PA, 'qst')
                            };
                        }

                        $scope.qtlength = _.keys($scope.qqt.qstlist).length;

                        $scope.setQst();
                        $scope.getFirst();
                    }
                }, function(error) {
                    console.log('error', error);
                    // growl.error('Error: Api.getEnglishSectionB() failed!', { ttl: 3000 });
                }
            );
    }
})();
