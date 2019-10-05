(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('SscephysicsatemplateController', SscephysicsatemplateController);

    // SscephysicsatemplateController.$inject = ['$scope', '$log', '$location', '$controller', '$rootScope', 'ConfigService', 'HeaderService', 'ApiService', 'TimerService', 'growl', '$timeout'];

    /* @ngInject */
    function SscephysicsatemplateController($scope, $log, $location, $controller, $rootScope, ConfigService, HeaderService, ApiService, TimerService, growl, $timeout, LoggingService) {

        $controller('BaseController', {$scope: $scope});
        $rootScope.baseRoute = '';
        $scope.exmid = 'Phy_A';
        $scope.logEvent = function() {
            LoggingService.postTrack('{' + $scope.exmid + ',' + $scope.userid + ',' + $scope.examyear + ',' + $scope.qqt.Qval + ',' + new Date().getTime() + '}');
        };

        $scope.intab = function() {
            console.log('Now in the SSCE Physics_A Template page!');
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
        $rootScope.physics_selected_year = 1988;


        $scope.navbtns = [
            {
                title: 'First',
                icon: 'fa fa-fast-backward fa-1'
            },
            {
                title: 'Previous',
                icon: 'fa fa-step-backward fa-1'
            },
            {
                title: 'Next',
                icon: 'fa fa-step-forward fa-1'
            },
            {
                title: 'Last',
                icon: 'fa fa-fast-forward fa-1'
            },
            {
                title: 'Start',
                icon: 'fa fa-hourglass-start fa-1'
            },
            {
                title: 'Pause',
                icon: 'fa fa-pause fa-1'
            },
            {
                title: 'Continue',
                icon: 'fa fa-arrow-right fa-1'
            },
            {
                title: 'Save',
                icon: 'fa fa-cloud fa-1'
            },
            {
                title: 'Finish',
                icon: 'fa fa-stop fa-1'
            }
        ];

        $scope.getStartTime = function() {
            $scope.oldtime = new Date().getTime();
            console.log('start time is: ' + $scope.oldtime);
        };

        $scope.getStartTime();

        $scope.btnsList = _.pluck(_.values($scope.navbtns), 'title');

        $scope.btnclick = function(val) {            
            //console.log('btn clicked is: ' + $scope.btnsList[val]);
            console.log('You clicked: ' + $scope.btnsList[val]);
            if($scope.btnsList[val]=='Next'){
                $scope.getNext();
            } else if($scope.btnsList[val]=='Previous'){
                $scope.getPrev();
            } else if($scope.btnsList[val]=='First'){
                $scope.getFirst();
            } else if($scope.btnsList[val]=='Last'){
                $scope.getLast();
            } else if($scope.btnsList[val]=='Pause'){
                $scope.lefttime = TimerService.getTime($scope.oldtime, $scope.totaltimemins)[1];
                console.log('$scope.lefttime is: ' + $scope.lefttime);
                console.log('Pause time is: ');
                $scope.oldtime = new Date().getTime();
            } else if($scope.btnsList[val]=='Continue'){
                $scope.timeleft = $scope.lefttime;
                console.log('$scope.timeleft is: ' + $scope.timeleft);
                $scope.oldtime = 0;
            }
            $scope.timegoneleft = TimerService.getTime($scope.oldtime, $scope.totaltimemins);
            $scope.timegone = $scope.timegoneleft[0];
            $scope.timeleft = $scope.timegoneleft[1];
            $scope.pctused = ($scope.timegoneleft[2] > 100 ? 100 : $scope.timegoneleft[2]);
        };

        $scope.cnum = '1';
        $scope.cqst = [
            {
                num: '[A]. ',
                qt: [
                    'Explain with the aid of a diagram what is meant by the moment of a force about a point,'
                ],
                ans: 'No diagram here.'
            },
            {
                num: '[B]. ',
                qt: [
                    'State the conditions of equilibrium for a number of coplana parallel forces. A metre rule is found to balance at the 48 cm mark. When a body of mass 60g is suspended at the 6cm mark the balance point is found to be at the 30 cm mark.',
                    'Calculate (i) the mass of the metre rule (ii) the distance of the balance point from the zero end, if the body were moved to the 13cm mark.'
                ],
                ans: 'N/A'
            },
            {
                num: '[C]. ',
                qt: [
                    'Show that the efficiency E, the force ratio M.A. and the velocity ratio V.R of a machine are related by the equation. (E = (M.A/V.R)*100%).',
                    'The efficiency of a machine is 80%. Determine the work done by a person using this machine to raise a load of 200kg through a vertical distance of 3.0 m (Take g = 10 ms"2).'
                ],
                ans: 'N/A'
            }
        ];

        $scope.qsts = [
            {
                qst: [
                    {
                        num: '[A]. ',
                        qt: [
                            'Explain with the aid of a diagram what is meant by the moment of a force about a point,'
                        ],
                        ans: 'No diagram here.'
                    },
                    {
                        num: '[B]. ',
                        qt: [
                            'State the conditions of equilibrium for a number of coplana parallel forces. A metre rule is found to balance at the 48 cm mark. When a body of mass 60g is suspended at the 6cm mark the balance point is found to be at the 30 cm mark.',
                            'Calculate (i) the mass of the metre rule (ii) the distance of the balance point from the zero end, if the body were moved to the 13cm mark.'
                        ],
                        ans: 'N/A'
                    },
                    {
                        num: '[C]. ',
                        qt: [
                            'Show that the efficiency E, the force ratio M.A. and the velocity ratio V.R of a machine are related by the equation. (E = (M.A/V.R)*100%).',
                            'The efficiency of a machine is 80%. Determine the work done by a person using this machine to raise a load of 200kg through a vertical distance of 3.0 m (Take g = 10 ms"2).'
                        ],
                        ans: 'N/A'
                    }
                ],
            },
            {
                qst: [
                    {
                        num: '[A2]. ',
                        qt: [
                            'Explain with the aid of a diagram what is meant by the moment of a force about a point,'
                        ],
                        ans: 'No diagram here.'
                    },
                    {
                        num: '[B2]. ',
                        qt: [
                            'State the conditions of equilibrium for a number of coplana parallel forces. A metre rule is found to balance at the 48 cm mark. When a body of mass 60g is suspended at the 6cm mark the balance point is found to be at the 30 cm mark.',
                            'Calculate (i) the mass of the metre rule (ii) the distance of the balance point from the zero end, if the body were moved to the 13cm mark.'
                        ],
                        ans: 'N/A'
                    },
                    {
                        num: '[C2]. ',
                        qt: [
                            'Show that the efficiency E, the force ratio M.A. and the velocity ratio V.R of a machine are related by the equation. (E = (M.A/V.R)*100%).',
                            'The efficiency of a machine is 80%. Determine the work done by a person using this machine to raise a load of 200kg through a vertical distance of 3.0 m (Take g = 10 ms"2).'
                        ],
                        ans: 'N/A'
                    }
                ],
            }
        ];

        $scope.qqt = {
            "Qval": 1,
            "Q": {
                "a": {
                    "q0": "(a) Explain with the aid of a diagram what is meant by the moment of a force about a point,"
                },
                "b": {
                    "q0": "(b) State the conditions of equilibrium for a number of coplana parallel forces. A metre rule is found to balance at the 48 cm mark. When a body of mass 60g is suspended at the 6cm mark the balance point is found to be at the 30 cm mark. Calculate",
                    "q1": "(i) the mass of the metre rule",
                    "q2": "(ii) the distance of the balance point from the zero end, if the body were moved to the 13cm mark,"
                },
                "c": {
                    "q0": "(c) Show that the efficiency E, the force ratio M.A. and the velocity ratio V.R of a machine are related by the equation.",
                    "q1": "E = (M.A x 100%)/V.R",
                    "q2": "The efficiency of a machine is 80%. Determine the work done by a person using this machine to raise a load of 200kg through a vertical distance of 3.0 m (Take g = 10 ms'2)."
                }
            }
        };

        $scope.getNum = function() {
            return $scope.qqt.Qval;
        };

        $scope.setNum = function(val) {
            $scope.qqt.Qval = val;
        };

        $scope.getNext = function() {
            $scope.clearOptions($scope.getNum());
            if((_.keys($scope.qtt).length > $scope.qqt.Qval)) {
                $scope.qqt.Qval = (parseInt($scope.qqt.Qval) + 1);
                $scope.qqt.Q = _.values($scope.qtt)[$scope.qqt.Qval - 1];
            }
            $scope.logEvent();
        };

        $scope.getPrev = function() {
            if(($scope.qqt.Qval > 1)) {
                $scope.qqt.Qval = (parseInt($scope.qqt.Qval) - 1);
                $scope.qqt.Q = _.values($scope.qtt)[$scope.qqt.Qval - 1];
            }
        };

        $scope.getFirst = function() {
            $scope.qqt.Qval = 1;
            $scope.qqt.Q = _.values($scope.qtt)[0];
        };

        $scope.getLast = function() {
            $scope.qqt.Qval = _.keys($scope.qtt).length;
            $scope.qqt.Q = _.values($scope.qtt)[_.keys($scope.qtt).length - 1];
        };

        $scope.getImage = function(val) {
            return _.contains(val.split('**'), 'img');
        };

        $scope.checkImage = function(val) {
            if(_.contains(val.split('**'), 'img')) {
                return '';
            } else {
                return val;
            }
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
                if($scope.qqt.Q.ans == 'A') {
                    $scope.colorBorder(val1, val2, true);
                } else {
                    $scope.colorBorder(val1, val2, false);
                }
            }
            if(val2==1) { 
                console.log('checkbox B clicked!');
                if($scope.qqt.Q.ans == 'B') {
                    $scope.colorBorder(val1, val2, true);
                } else {
                    $scope.colorBorder(val1, val2, false);
                }
            }
            if(val2==2) { 
                console.log('checkbox C clicked!');
                if($scope.qqt.Q.ans == 'C') {
                    $scope.colorBorder(val1, val2, true);
                } else {
                    $scope.colorBorder(val1, val2, false);
                }
            }
            if(val2==3) { 
                console.log('checkbox D clicked!');
                if($scope.qqt.Q.ans == 'D') {
                    $scope.colorBorder(val1, val2, true);
                } else {
                    $scope.colorBorder(val1, val2, false);
                }
            }
            if(val2==4) { 
                console.log('checkbox E clicked!');
                if($scope.qqt.Q.ans == 'E') {
                    $scope.colorBorder(val1, val2, true);
                } else {
                    $scope.colorBorder(val1, val2, false);
                }
            }
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

        $scope.showImage = function(val) {
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

        console.log('$rootScope.physics_selected_year is: ' + $rootScope.physics_selected_year);

        $scope.qtt = ApiService.getPhysicsSectionA($rootScope.physics_selected_year);        
    }
})();
