(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('SscetemplateController', SscetemplateController);

    // SscetemplateController.$inject = ['$scope', '$log', '$location', '$controller', '$rootScope', 'ConfigService', 'HeaderService', 'ApiService', 'growl', '$timeout'];

    /* @ngInject */
    function SscetemplateController($scope, $log, $location, $controller, $rootScope, ConfigService, HeaderService, ApiService, growl, $timeout, LoggingService) {

        $controller('BaseController', {$scope: $scope});
        $rootScope.baseRoute = '';
        $rootScope.theAPI = '';
        var baseRoute = '';
        console.log('$rootScope.currentSubject is: ' + $rootScope.currentSubject);
        $scope.exmid = $rootScope.currentSubject;
        $scope.logEvent = function() {
            LoggingService.postTrack('{sub-select,' + $scope.exmid + ',' + $scope.userid + ',' + $scope.yrpick + ',' + new Date().getTime() + '}');
        };

        $scope.headings = {};
        $scope.yrpick = '1988';
        $scope.q1 = {};
        $scope.q2 = {};

        $scope.getHeaders = {
            physics: {
                subject: 'Physics',
                examtype: 'SSCE',
                sections: 'Theory, Practicals and Objectives',
                years: '1988 - 2015',
                yrpick: '1988',
                yrslist: ['1988','1989','1990', '1991']
            },
            english: {
                subject: 'English',
                examtype: 'SSCE',
                sections: 'Objective Test Questions',
                years: '1988 - 2015',
                yrpick: '1988',
                yrslist: ['1988','1989','1990']
            },
            chemistry: {
                subject: 'Chemistry',
                examtype: 'SSCE',
                sections: 'Objective Test Questions',
                years: '1988 - 2015',
                yrpick: '1988',
                yrslist: ['1988','1989','1990']
            },
            economics: {
                subject: 'Economics',
                examtype: 'SSCE',
                sections: 'Objective Test Questions',
                years: '1988 - 2015',
                yrpick: '1988',
                yrslist: ['1988','1989','1990']
            },
            geography: {
                subject: 'Geography',
                examtype: 'SSCE',
                sections: 'Objective Test Questions',
                years: '1988 - 2015',
                yrpick: '1988',
                yrslist: ['1988','1989','1990']
            },
            mathematics: {
                subject: 'Mathematics',
                examtype: 'SSCE',
                sections: 'Objective Test Questions',
                years: '1988 - 2015',
                yrpick: '1988',
                yrslist: ['1988','1989','1990']
            },
            agricsci: {
                subject: 'AgricSci',
                examtype: 'SSCE',
                sections: 'Objective Test Questions',
                years: '1988 - 2015',
                yrpick: '1988',
                yrslist: ['1988','1989','1990']
            },
            government: {
                subject: 'Government',
                examtype: 'SSCE',
                sections: 'Objective Test Questions',
                years: '1988 - 2015',
                yrpick: '1988',
                yrslist: ['1988','1989','1990']
            },
            commerce: {
                subject: 'Commerce',
                examtype: 'SSCE',
                sections: 'Objective Test Questions',
                years: '1989 - 2015',
                yrpick: '1989',
                yrslist: ['1989','1990','1991']
            },
            biology: {
                subject: 'Biology',
                examtype: 'SSCE',
                sections: 'Objective Test Questions',
                years: '1989 - 2015',
                yrpick: '1988',
                yrslist: ['1988','1989']
            },
            litineng: {
                subject: 'Literature in English',
                examtype: 'SSCE',
                sections: 'Objective Test Questions',
                years: '1989 - 2015',
                yrpick: '1988',
                yrslist: ['1998']
            }
        };

        if($rootScope.currentSubject == 'Physics') {
            $scope.headings = $scope.getHeaders.physics;
            $scope.yrpick = $scope.getHeaders.physics.yrpick;
            $rootScope.physics_selected_year = $scope.getHeaders.physics.yrpick;

            $scope.q1 = {
                title: 'Section A - Essay Questions',
                desc: 'This section contains 4 questions. Answer three questions only from this section.',
                allottime: '1 hr 30 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscephysicsatemplate',
                href2: 'sscephysicsatemplatepast'
            };

            $scope.q2 = {
                title: 'Section B - Objective Test Questions',
                desc: 'This section contains 60 multiple choice questions. Answer All questions in this section.',
                allottime: '2 hrs.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscephysicsbtemplate',
                href2: '/sscephysicsbtemplatepast'
            };
        } else if($rootScope.currentSubject == 'English') {
            $scope.headings = $scope.getHeaders.english;
            $scope.yrpick = $scope.getHeaders.english.yrpick;
            $rootScope.english_selected_year = $scope.getHeaders.english.yrpick;

            $scope.q1 = {
                title: 'Part 1 - Theory Questions',
                desc: 'This Part Contains Questions in a Story Section, a Comprehension Section, and a Summary Section. Answer all Questions Available.',
                allottime: '1 hr 30 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'ssceenglishatemplate',
                href2: 'ssceenglishatemplatepast'
            };

            $scope.q2 = {
                title: 'Part 2 - Objective Test Questions',
                desc: 'This Part Contains a Total of 100 Questions in Multiple Sections. Answer All Questions in Each Section.',
                allottime: '2 hrs 25 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'ssceenglishbtemplate',
                href2: '/ssceenglishbtemplatepast'
            };
        } else if($rootScope.currentSubject == 'Chemistry') {
            $scope.headings = $scope.getHeaders.chemistry;
            $scope.yrpick = $scope.getHeaders.chemistry.yrpick;
            $rootScope.chemistry_selected_year = $scope.getHeaders.chemistry.yrpick;

            $scope.q1 = {
                title: 'Part 1 - Theory Questions',
                desc: 'This Part Contains Questions in a Story Section, a Comprehension Section, and a Summary Section. Answer all Questions Available.',
                allottime: '1 hr 30 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscechemistryatemplate',
                href2: 'sscechemistryatemplatepast'
            };

            $scope.q2 = {
                title: 'Part 2 - Objective Test Questions',
                desc: 'This Part Contains a Total of 50 Questions in Multiple Sections. Answer All Questions in Each Section.',
                allottime: '2 hrs 25 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscechemistrybtemplate',
                href2: '/sscechemistrybtemplatepast'
            };
        } else if($rootScope.currentSubject == 'Literature in English') {
            $scope.headings = $scope.getHeaders.litineng;
            $scope.yrpick = $scope.getHeaders.litineng.yrpick;
            $rootScope.litineng_selected_year = $scope.getHeaders.litineng.yrpick;

            $scope.q1 = {
                title: 'Part 1 - Theory Questions',
                desc: 'This Part Contains Questions in a Story Section, a Comprehension Section, and a Summary Section. Answer all Questions Available.',
                allottime: '1 hr 30 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscelitinengatemplate',
                href2: 'sscelitinengatemplatepast'
            };

            $scope.q2 = {
                title: 'Part 2 - Objective Test Questions',
                desc: 'This Part Contains a Total of 100 Questions in Multiple Sections. Answer All Questions in Each Section.',
                allottime: '2 hrs 25 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscelitinengbtemplate',
                href2: '/sscelitinengbtemplatepast'
            };
        } else if($rootScope.currentSubject == 'Economics') {
            $scope.headings = $scope.getHeaders.economics;
            $scope.yrpick = $scope.getHeaders.economics.yrpick;
            $rootScope.economics_selected_year = $scope.getHeaders.economics.yrpick;

            $scope.q1 = {
                title: 'Part 1 - Theory Questions',
                desc: 'This Part Contains Questions in a Story Section, a Comprehension Section, and a Summary Section. Answer all Questions Available.',
                allottime: '1 hr 30 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'ssceeconomicsatemplate',
                href2: 'ssceeconomicsatemplatepast'
            };

            $scope.q2 = {
                title: 'Part 2 - Objective Test Questions',
                desc: 'This Part Contains a Total of 100 Questions in Multiple Sections. Answer All Questions in Each Section.',
                allottime: '2 hrs 25 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'ssceeconomicsbtemplate',
                href2: '/ssceeconomicsbtemplatepast'
            };            
        } else if($rootScope.currentSubject == 'Geography') {
            $scope.headings = $scope.getHeaders.geography;
            $scope.yrpick = $scope.getHeaders.geography.yrpick;
            $rootScope.geography_selected_year = $scope.getHeaders.geography.yrpick;

            $scope.q1 = {
                title: 'Part 1 - Theory Questions',
                desc: 'This Part Contains Questions in a Story Section, a Comprehension Section, and a Summary Section. Answer all Questions Available.',
                allottime: '1 hr 30 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscegeographyatemplate',
                href2: 'sscegeographyatemplatepast'
            };

            $scope.q2 = {
                title: 'Part 2 - Objective Test Questions',
                desc: 'This Part Contains a Total of 100 Questions in Multiple Sections. Answer All Questions in Each Section.',
                allottime: '2 hrs 25 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscegeographybtemplate',
                href2: '/sscegeographybtemplatepast'
            };            
        } else if($rootScope.currentSubject == 'Mathematics') {
            $scope.headings = $scope.getHeaders.mathematics;
            $scope.yrpick = $scope.getHeaders.mathematics.yrpick;
            $rootScope.mathematics_selected_year = $scope.getHeaders.mathematics.yrpick;

            $scope.q1 = {
                title: 'Part 1 - Theory Questions',
                desc: 'This Part Contains Questions in a Story Section, a Comprehension Section, and a Summary Section. Answer all Questions Available.',
                allottime: '1 hr 30 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscemathematicsatemplate',
                href2: 'sscemathematicsatemplatepast'
            };

            $scope.q2 = {
                title: 'Part 2 - Objective Test Questions',
                desc: 'This Part Contains a Total of 100 Questions in Multiple Sections. Answer All Questions in Each Section.',
                allottime: '2 hrs 25 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscemathematicsbtemplate',
                href2: '/sscemathematicsbtemplatepast'
            };            
        } else if($rootScope.currentSubject == 'AgricSci') {
            $scope.headings = $scope.getHeaders.agricsci;
            $scope.yrpick = $scope.getHeaders.agricsci.yrpick;
            $rootScope.agricsci_selected_year = $scope.getHeaders.agricsci.yrpick;

            $scope.q1 = {
                title: 'Part 1 - Theory Questions',
                desc: 'This Part Contains Questions in a Story Section, a Comprehension Section, and a Summary Section. Answer all Questions Available.',
                allottime: '1 hr 30 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'ssceagricsciatemplate',
                href2: 'ssceagricsciatemplatepast'
            };

            $scope.q2 = {
                title: 'Part 2 - Objective Test Questions',
                desc: 'This Part Contains a Total of 100 Questions in Multiple Sections. Answer All Questions in Each Section.',
                allottime: '2 hrs 25 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'ssceagricscibtemplate',
                href2: '/ssceagricscibtemplatepast'
            };            
        } else if($rootScope.currentSubject == 'Commerce') {
            $scope.headings = $scope.getHeaders.commerce;
            $scope.yrpick = $scope.getHeaders.commerce.yrpick;
            $rootScope.commerce_selected_year = $scope.getHeaders.commerce.yrpick;

            $scope.q1 = {
                title: 'Part 1 - Theory Questions',
                desc: 'This Part Contains Questions in a Story Section, a Comprehension Section, and a Summary Section. Answer all Questions Available.',
                allottime: '1 hr 30 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscecommerceatemplate',
                href2: 'sscecommerceatemplatepast'
            };

            $scope.q2 = {
                title: 'Part 2 - Objective Test Questions',
                desc: 'This Part Contains a Total of 100 Questions in Multiple Sections. Answer All Questions in Each Section.',
                allottime: '2 hrs 25 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscecommercebtemplate',
                href2: '/sscecommercebtemplatepast'
            };            
        } else if($rootScope.currentSubject == 'Biology') {
            $scope.headings = $scope.getHeaders.biology;
            $scope.yrpick = $scope.getHeaders.biology.yrpick;
            $rootScope.biology_selected_year = $scope.getHeaders.biology.yrpick;

            $scope.q1 = {
                title: 'Part 1 - Theory Questions',
                desc: 'This Part Contains Questions in a Story Section, a Comprehension Section, and a Summary Section. Answer all Questions Available.',
                allottime: '1 hr 30 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscebiologyatemplate',
                href2: 'sscebiologyatemplatepast'
            };

            $scope.q2 = {
                title: 'Part 2 - Objective Test Questions',
                desc: 'This Part Contains a Total of 100 Questions in Multiple Sections. Answer All Questions in Each Section.',
                allottime: '2 hrs 25 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscebiologybtemplate',
                href2: '/sscebiologybtemplatepast'
            };            
        } else if($rootScope.currentSubject == 'Government') {
            $scope.headings = $scope.getHeaders.government;
            $scope.yrpick = $scope.getHeaders.government.yrpick;
            $rootScope.government_selected_year = $scope.getHeaders.government.yrpick;

            $scope.q1 = {
                title: 'Part 1 - Theory Questions',
                desc: 'This Part Contains Questions in a Story Section, a Comprehension Section, and a Summary Section. Answer all Questions Available.',
                allottime: '1 hr 30 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscegovernmentatemplate',
                href2: 'sscegovernmentatemplatepast'
            };

            $scope.q2 = {
                title: 'Part 2 - Objective Test Questions',
                desc: 'This Part Contains a Total of 60 Objjective Test Questions. Answer All Questions in this Section.',
                allottime: '2 hrs 25 mins.',
                btn1lbl: 'Start Examination',
                btn2lbl: 'View Past Examinations',
                href1: 'sscegovernmentbtemplate',
                href2: '/sscegovernmentbtemplatepast'
            };            
        };

        $scope.intab = function() {
            console.log('Now in the SSCE Template page!');
        };

        $scope.intab();

        $timeout(function(){
           HeaderService.setTab(1);
        }, 100);  

        // $scope.yrslist = ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'];

        $scope.yrclick = function(yr) {
            console.log('Year clicked is: ' + yr);
            if($rootScope.currentSubject == 'Economics') {
                $rootScope.economics_selected_year = yr;
            } else if($rootScope.currentSubject == 'Physics') {
                $rootScope.physics_selected_year = yr;
            } else if($rootScope.currentSubject == 'English') {
                $rootScope.english_selected_year = yr;
            } else if($rootScope.currentSubject == 'Chemistry') {
                $rootScope.chemistry_selected_year = yr;
            } else if($rootScope.currentSubject == 'Geography') {
                $rootScope.geography_selected_year = yr;
            } else if($rootScope.currentSubject == 'Mathematics') {
                $rootScope.mathematics_selected_year = yr;
            } else if($rootScope.currentSubject == 'AgricSci') {
                $rootScope.agricsci_selected_year = yr;
            } else if($rootScope.currentSubject == 'Government') {
                $rootScope.government_selected_year = yr;
            } else if($rootScope.currentSubject == 'Commerce') {
                $rootScope.commerce_selected_year = yr;
            } else if($rootScope.currentSubject == 'Biology') {
                $rootScope.biology_selected_year = yr;
            } else if($rootScope.currentSubject == 'Literature in English') {
                $rootScope.litineng_selected_year = yr;
            }
            $scope.yrpick = yr;
        };

        $scope.gotoparta = function(url) {
            console.log('The section clicked has url: ' + url);
            $scope.logEvent();
            $location.path($rootScope.baseRoute + url);
        };

        $scope.gotopartb = function(url) {
            console.log('The section clicked has url: ' + url);
            $scope.logEvent();
            $location.path($rootScope.baseRoute + url);
        };
        

    }
})();
