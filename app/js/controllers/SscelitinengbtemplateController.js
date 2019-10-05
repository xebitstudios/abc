(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('SscelitinengbtemplateController', SscelitinengbtemplateController);

    // SscelitinengbtemplateController.$inject = ['$scope', '$log', '$location', '$controller', '$rootScope', 'ConfigService', 'HeaderService', 'ApiService', 'TimerService', 'growl', '$timeout'];

    /* @ngInject */
    function SscelitinengbtemplateController($scope, $log, $location, $controller, $rootScope, ConfigService, HeaderService, ApiService, TimerService, growl, $timeout, LoggingService) {

        $controller('BaseController', {$scope: $scope});
        $rootScope.baseRoute = '';
        $scope.exmid = 'liteng_B';
        $scope.logEvent = function() {
            LoggingService.postTrack('{' + $scope.exmid + ',' + $scope.userid + ',' + $scope.examyear + ',' + $scope.qqt.Qval + ',' + new Date().getTime() + '}');
        };

        $scope.intab = function() {
            console.log('Now in the SSCE LitInEnglish_B Template page!');
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
        $scope.examyear = $rootScope.litineng_selected_year;
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

        $scope.getImage = function(val) {
            console.log('getImage val is: ' + val);
            if(val == undefined) return false;
            if(_.contains(val.split('**'), 'img')) { return true; };
            return false;
        };

        $scope.showImage = function(val) {
            console.log('showImage val is: ' + val);
            if(val == undefined) return false;
            if(_.contains(val.split('**'), 'img')) {
                return '/img/litineng/' + val.slice(3,val.length).split('**')[1];
            }
            return '';
        };

        console.log('$rootScope.litineng_selected_year is A: ' + $rootScope.litineng_selected_year);
        $scope.qtt = {};

        $scope.setToZero = function() {
            $scope.sctn1PassaObjNum = 0;
            $scope.currentQst = 0;
            $scope.setQst();
        };
        $scope.dinstruction = 'Answer All questions in this section.';

        $scope.sectionclick = function(val) {
            $scope.sectionHeader = val;
            $scope.markChosen(val);
            // console.log('val is: ' + val);
            if(val == 'Section 1 - Part 1') {
                $scope.dinstruction = 'Answer All questions in this section.';
                $scope.qqt = {
                    "qstarray": $scope.qtt.SA.P1.qst,
                    "qstlist": _.omit($scope.qtt.SA.P1, 'qst')
                };
                $scope.qtlength = _.keys($scope.qqt.qstlist).length;
                $scope.setToZero();
            } else if(val == 'Section 1 - Part 2') {
                $scope.dinstruction = 'Answer All questions in this section.';
                $scope.qqt = {
                    "qstarray": $scope.qtt.SA.P2.qst,
                    "qstlist": _.omit($scope.qtt.SA.P2, 'qst')
                };
                $scope.qtlength = _.keys($scope.qqt.qstlist).length;
                $scope.setToZero();
            } else if(val == 'Section 2 - Part 1') {
                $scope.qqt = {
                    "qstarray": $scope.qtt.SB.P1.qst,
                    "qstlist": _.omit($scope.qtt.SB.P1, 'qst')
                };
                // $scope.dinstruction = $scope.qqt.qstarray;
                $scope.qtlength = _.keys($scope.qqt.qstlist).length;
                $scope.setToZero();
            } else if(val == 'Section 2 - Part 2') {
                $scope.qqt = {
                    "qstarray": $scope.qtt.SB.P2.qst,
                    "qstlist": _.omit($scope.qtt.SB.P2, 'qst')
                };
                // $scope.dinstruction = $scope.qqt.qstarray;
                $scope.qtlength = _.keys($scope.qqt.qstlist).length;
                $scope.setToZero();
            } else if(val == 'Section 2 - Part 3') {
                $scope.qqt = {
                    "qstarray": $scope.qtt.SB.P3.qst,
                    "qstlist": _.omit($scope.qtt.SB.P3, 'qst')
                };
                // $scope.dinstruction = $scope.qqt.qstarray;
                $scope.qtlength = _.keys($scope.qqt.qstlist).length;
                $scope.setToZero();
            } else if(val == 'Section 2 - Part 4') {
                $scope.qqt = {
                    "qstarray": $scope.qtt.SB.P4.qst,
                    "qstlist": _.omit($scope.qtt.SB.P4, 'qst')
                };
                // $scope.dinstruction = $scope.qqt.qstarray;
                $scope.qtlength = _.keys($scope.qqt.qstlist).length;
                $scope.setToZero();
            }
        };

        $scope.sectionHeader = 'Section 1 - Part 1';        
        // console.log('$scope.qtt is now: ');
        // console.log($scope.qtt);

        $scope.sectionslist = [
            {'val' : 'Section 1 - Part 1', 'ischosen': 'chosen'},
            {'val' : 'Section 1 - Part 2', 'ischosen': ''},
            {'val' : 'Section 2 - Part 1', 'ischosen': ''},
            {'val' : 'Section 2 - Part 2', 'ischosen': ''},
            {'val' : 'Section 2 - Part 3', 'ischosen': ''},
            {'val' : 'Section 2 - Part 4', 'ischosen': ''}
        ];

        $scope.markChosen = function(val) {
            for(var e=0;e<$scope.sectionslist.length;e++) {
                $scope.sectionslist[e].ischosen = '';
            }

            if(val == 'Section 1 - Part 1') {
                $scope.sectionslist[0].ischosen = 'chosen';
            } else if(val == 'Section 1 - Part 2') {
                $scope.sectionslist[1].ischosen = 'chosen';
            }
             else if(val == 'Section 2 - Part 1') {
                $scope.sectionslist[2].ischosen = 'chosen';
            }
             else if(val == 'Section 2 - Part 2') {
                $scope.sectionslist[3].ischosen = 'chosen';
            }
             else if(val == 'Section 2 - Part 3') {
                $scope.sectionslist[4].ischosen = 'chosen';
            }
             else if(val == 'Section 2 - Part 4') {
                $scope.sectionslist[5].ischosen = 'chosen';
            }
        };

        $scope.markChosen('Section 1 - Part 1');
        $scope.selectedSection = 0;
        $scope.sctn1PassaObjNum = 0;
        $scope.currentQst = 0;

        $scope.setQst = function() {
            $scope.sctn1PassaObj = _.pick($scope.qqt.qstlist, _.keys($scope.qqt.qstlist)[$scope.sctn1PassaObjNum]);
            $scope.sc1PsaQst = $scope.sctn1PassaObj[_.keys($scope.sctn1PassaObj)]; 
            $scope.currentQst = $scope.sctn1PassaObjNum + 1;
            $scope.qstkey = _.keys($scope.sctn1PassaObj)[0];
            $scope.qstvalue = (_.values($scope.sctn1PassaObj)[0]).qs;
            $scope.imgvalue = (_.values($scope.sctn1PassaObj)[0]).img;
        };

        ApiService.getLitInEngSectionB($rootScope.litineng_selected_year)
            .then(function(response) {
                    console.log('The Api.getLitInEngSectionB() response is: ');
                    console.log(response);
                    console.log(response.data);
                    if(response.data) {
                        console.log('call successful.');
                        $scope.qtt = response.data;
                        if($scope.selectedSection == 0) {
                            $scope.qqt = {
                                "qstarray": $scope.qtt.SA.P1.qst,
                                "qstlist": _.omit($scope.qtt.SA.P1, 'qst')
                            };
                        }

                        $scope.qtlength = _.keys($scope.qqt.qstlist).length;

                        $scope.setQst();
                        $scope.getFirst();
                    }
                }, function(error) {
                    console.log('error', error);
                    // growl.error('Error: Api.getLitInEngSectionB() failed!', { ttl: 3000 });
                }
            );
    }
})();
