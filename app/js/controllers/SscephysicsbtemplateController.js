(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('SscephysicsbtemplateController', SscephysicsbtemplateController);

    // SscephysicsbtemplateController.$inject = ['$scope', '$log', '$interval', '$location', '$controller', '$rootScope', 'ConfigService', 'HeaderService', 'ApiService', 'TimerService', 'LoggingService', 'growl', '$timeout'];

    /* @ngInject */
    function SscephysicsbtemplateController($scope, $log, $interval, $location, $controller, $rootScope, ConfigService, HeaderService, ApiService, TimerService, LoggingService, growl, $timeout) {

        $controller('BaseController', {$scope: $scope});
        $rootScope.baseRoute = '';
        $scope.exmid = 'phy_B';
        $scope.logEvent = function() {
            LoggingService.postTrack('{' + $scope.exmid + ',' + $scope.userid + ',' + $scope.examyear + ',' + $scope.qqt.Qval + ',' + new Date().getTime() + '}');
        };

        $scope.intab = function() {
            console.log('Now in the SSCE Physics_B Template page!');
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
        $scope.examyear = $rootScope.physics_selected_year;
        $scope.movedTime = false;

        $scope.themodal = {
            modalShown: false
        };

        $scope.toggleModal = function(val) {
            console.log('$scope.toggleModal called.');
            (val == 1) ? ($scope.themodal.modalShown = !$scope.themodal.modalShown) : (console.log('modal not selected!'));
        };

        $scope.moveTime = function() {
            // $interval(function () {
            // $scope.updateTime();
            // }, 2000);
        };

        $scope.updateTime = function() {
            $scope.timegoneleft = TimerService.getTime($scope.oldtime, $scope.totaltimemins);
            $scope.timegone = $scope.timegoneleft[0];
            $scope.timeleft = $scope.timegoneleft[1];
            $scope.pctused = ($scope.timegoneleft[2] > 100 ? 100 : $scope.timegoneleft[2]);
            if(!$scope.movedTime) { 
                console.log('tick tock begins...');
                $scope.moveTime();
                $scope.movedTime = !$scope.movedTime;
            }
        };

        $scope.getStartTime = function() {
            $scope.oldtime = new Date().getTime();
            console.log('start time is: ' + $scope.oldtime);
        };

        $scope.getNum = function() {
            return $scope.qqt.Qval;
        };

        $scope.colorBorder = function(qst, opt, reslt) {
            if($rootScope.rtscore) {
                // remove all the border colors on all options
                $(".div_phy_" + qst + " p").removeClass('redborder');
                $(".div_phy_" + qst + " p").removeClass('greenborder');
                // now set the specific border on the option selected
                if(reslt==true) {
                    $("#div_phy_" + qst + "_" + opt + " p").addClass('greenborder');
                } else {
                    $("#div_phy_" + qst + "_" + opt + " p").addClass('redborder');
                }
            }
        };

        $scope.optClick = function(val1, val2) {
            // var ellm = val3 + "_" + val1 + "_" + val2;
            console.log('element ID is: ' + 'phy' + "_" + val1 + "_" + val2);
            // $("#phy_1_2").prop("checked") = true
            // $(".phy_1").length = 5
            console.log('qst is: ' + val1 + ', opt is: ' + val2);
            if(val2==0) { 
                console.log('checkbox A clicked!');
                $scope.qqt.Q.sel = 'A';
                if($scope.qqt.Q.ans == 'A') {
                    $scope.colorBorder(val1, val2, true);
                } else {
                    $scope.colorBorder(val1, val2, false);
                }
            }
            if(val2==1) { 
                console.log('checkbox B clicked!');
                $scope.qqt.Q.sel = 'B';
                if($scope.qqt.Q.ans == 'B') {
                    $scope.colorBorder(val1, val2, true);
                } else {
                    $scope.colorBorder(val1, val2, false);
                }
            }
            if(val2==2) { 
                console.log('checkbox C clicked!');
                $scope.qqt.Q.sel = 'C';
                if($scope.qqt.Q.ans == 'C') {
                    $scope.colorBorder(val1, val2, true);
                } else {
                    $scope.colorBorder(val1, val2, false);
                }
            }
            if(val2==3) { 
                console.log('checkbox D clicked!');
                $scope.qqt.Q.sel = 'D';
                if($scope.qqt.Q.ans == 'D') {
                    $scope.colorBorder(val1, val2, true);
                } else {
                    $scope.colorBorder(val1, val2, false);
                }
            }
            if(val2==4) { 
                console.log('checkbox E clicked!');
                $scope.qqt.Q.sel = 'E';
                if($scope.qqt.Q.ans == 'E') {
                    $scope.colorBorder(val1, val2, true);
                } else {
                    $scope.colorBorder(val1, val2, false);
                }
            }
            console.log('$scope.qqt.Q.sel is: ' + $scope.qqt.Q.sel);
        };

        $scope.clearOptions = function(val) {
            console.log('$scope.getNum() is: ' + val);
            if($("#phy_" + val + "_0").prop("checked")) { $scope.seloption = '0'; $scope.setScores(val + "-0"); };
            if($("#phy_" + val + "_1").prop("checked")) { $scope.seloption = '1'; $scope.setScores(val + "-1"); };
            if($("#phy_" + val + "_2").prop("checked")) { $scope.seloption = '2'; $scope.setScores(val + "-2"); };
            if($("#phy_" + val + "_3").prop("checked")) { $scope.seloption = '3'; $scope.setScores(val + "-3"); };
            if($("#phy_" + val + "_4").prop("checked")) { $scope.seloption = '4'; $scope.setScores(val + "-4"); };

            $(".phy_" + val + "").prop("checked", false);
            $(".div_phy_" + val + " p").removeClass('redborder');
            $(".div_phy_" + val + " p").removeClass('greenborder');
            console.log('$scope.seloption is: ' + $scope.seloption);       
        };

        $scope.getStartTime();

        $scope.btnsList = _.pluck(_.values($scope.navbtns), 'title');

        $scope.qqt = {
            "Qval": 1,
            "Q": {
                "qs": "1. Which of the units of the following physical quantities are derived? I. Area II. Thrust III. Pressure IV. Mass ",
                "opts": {
                    "q0": "A. I, II, III and IV",
                    "q1": "B. I, II and III only",
                    "q2": "C. I, II and IV only",
                    "q3": "D. I, and III only",
                    "q4": "E. I and IV only"
                },
                "ans": "B"
            }
        };

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
            $scope.clearOptions($scope.getNum());
            if((_.keys($scope.qtt).length > $scope.qqt.Qval)) {
                $scope.qqt.Qval = (parseInt($scope.qqt.Qval) + 1);
                $scope.qqt.Q = _.values($scope.qtt)[$scope.qqt.Qval - 1];
                if(!$scope.qqt.Q.img) {
                    $scope.clearImg();
                };
            }
            $scope.logEvent();
        };

        $scope.getPrev = function() {
            if(($scope.qqt.Qval > 1)) {
                $scope.qqt.Qval = (parseInt($scope.qqt.Qval) - 1);
                $scope.qqt.Q = _.values($scope.qtt)[$scope.qqt.Qval - 1];
                if(!$scope.qqt.Q.img) {
                    $scope.clearImg();
                };
            }
        };

        $scope.getFirst = function() {
            $scope.qqt.Qval = 1;
            $scope.qqt.Q = _.values($scope.qtt)[0];
            if(!$scope.qqt.Q.img) {
                $scope.clearImg();
            };
        };

        $scope.getLast = function() {
            $scope.qqt.Qval = _.keys($scope.qtt).length;
            $scope.qqt.Q = _.values($scope.qtt)[_.keys($scope.qtt).length - 1];
            if(!$scope.qqt.Q.img) {
                $scope.clearImg();
            };
        };

        $scope.getLetter = function(val, indx) {
            if(_.contains(val.split('img**'), 'xx*')) {
                return '-';
            } else if(_.contains(val.split('**'), 'img')) {
                if(indx == '0'){ return 'A'; }
                if(indx == '1'){ return 'B'; }
                if(indx == '2'){ return 'C'; }
                if(indx == '3'){ return 'D'; }
                if(indx == '4'){ return 'E'; }
                if(indx == '5'){ return 'F'; }
                if(indx == '6'){ return 'G'; }
                if(indx == '7'){ return 'H'; }
                if(indx == '8'){ return 'I'; }
                if(indx == '9'){ return 'J'; }
            }  else {
                return val;
            }
        };

        $scope.getImage = function(val) {
            if(_.contains(val.split('**'), 'xx*img')) { return true; };
            return (_.contains(val.split('**'), 'img'));
        };

        $scope.checkImage = function(val) {
            if(_.contains(val.split('**'), 'img')) {
                return '';
            } else {
                return val;
            }
        };

        $scope.showImage = function(val) {
            if(_.contains(val.split('**'), 'xx*img')) {
                return '/img/physics/' + val.slice(3,val.length).split('**')[1];
            }
            return '/img/physics/' + val.split('**')[1];
        };

        $scope.getImageLocation = function(val) {
            if(rr.split('**').length > 1) {
                return $scope.getImage("/img/physics/myimage.jpg");
            } else {
                return '';
            }
        };

        $scope.navclick = function(navtitle) {
            $scope.activeNav = navtitle;
        };

        console.log('$rootScope.physics_selected_year is B: ' + $rootScope.physics_selected_year);

        // $scope.qtt = ApiService.getPhysicsSectionB($rootScope.physics_selected_year);
        ApiService.getPhysicsSectionB($rootScope.physics_selected_year)
            .then(function(response) {
                    console.log('The Api.getPhysicsSectionB() response is: ');
                    console.log(response);
                    console.log(response.data);
                    if(response.data) {
                        console.log('call successful.');
                        $scope.qtt = response.data;

                        $scope.qqt.Qval = 1;
                        $scope.qqt.Q.qs = $scope.qtt.Q1.qs;
                        $scope.qqt.Q.opts = $scope.qtt.Q1.opts;
                        $scope.qqt.Q.ans = $scope.qtt.Q1.ans; 
                        
                        $scope.getFirst(); 
                    }
                }, function(error) {
                    console.log('error', error);
                    // growl.error('Error: Api.getPhysicsSectionB() failed!', { ttl: 3000 });
                }
            );
    }
})();
