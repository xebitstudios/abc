(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('TestcenterController', TestcenterController);

    // TestcenterController.$inject = ['$scope', '$log', '$location', '$controller', '$rootScope', 'ConfigService', 'ApiService', 'HeaderService', 'growl', '$timeout'];

    /* @ngInject */
    function TestcenterController($scope, $log, $location, $controller, $rootScope, ConfigService, ApiService, HeaderService, growl, $timeout, LoggingService) {

        $controller('BaseController', {$scope: $scope});
        $rootScope.baseRoute = '';
        var baseRoute = '';
        
        $scope.logEvent = function() {
            LoggingService.postTrack('{tc,' + $scope.userid + ',' + $rootScope.currentSubject + ',' + new Date().getTime() + '}');
        };

        $scope.inTestcenter = function() {
            console.log('Now in the Testcenter page!');
        };

        $scope.setRealtimeScore = function() {
          console.log('$scope.setRealtimeScore() called!');
          $('#rtscore').prop('checked', !$('#rtscore').prop('checked'));
          $rootScope.rtscore = $('#rtscore').prop('checked');
        };

        $scope.inTestcenter();

        $timeout(function(){
           HeaderService.setTab(1);
           if($rootScope.rtscore==true) { 
            $('#rtscore').prop('checked', true);
           } else {
            $('#rtscore').prop('checked', false);
           }
        }, 100);

        $scope.gotoExam = function(subj, url) {
            $rootScope.currentSubject = subj;
            console.log('Sscetemplate link for ' + subj + ' clicked!');
            console.log('baseRoute + url is: ' + baseRoute + url);
            $scope.logEvent();
            $location.path(baseRoute + url);
        };

        $scope.examsubjects = [
          {
            name: 'Physics',
            image: 'physics.png',
            href: 'sscetemplate',
            examlist: ['SSCE','GCE','NECO'],
            availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            bgcolor: '#F4F6F6'
          },
          {
            name: 'Chemistry',
            image: 'chemistry.png',
            href: 'sscetemplate',
            examlist: ['SSCE','GCE','NECO'],
            availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            bgcolor: '#F4F6F6'
          },
          {
            name: 'Mathematics',
            image: 'genmaths.png',
            href: 'sscetemplate',
            examlist: ['SSCE','GCE','NECO'],
            availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            bgcolor: '#F4F6F6'
          },
          {
            name: 'Economics',
            image: 'economics.png',
            href: 'sscetemplate',
            examlist: ['SSCE','GCE','NECO'],
            availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            bgcolor: '#F4F6F6'
          },
          {
            name: 'Biology',
            image: 'biology.png',
            href: 'sscetemplate',
            examlist: ['SSCE','GCE','NECO'],
            availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            bgcolor: '#F4F6F6'
          },
          {
            name: 'English',
            image: 'english.png',
            href: 'sscetemplate',
            examlist: ['SSCE','GCE','NECO'],
            availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            bgcolor: '#F4F6F6'
          },
          {
            name: 'Geography',
            image: 'geography.png',
            href: 'sscetemplate',
            examlist: ['SSCE','GCE','NECO'],
            availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            bgcolor: '#F4F6F6'
          },
          {
            name: 'Literature in English',
            image: 'literature.png',
            href: 'sscetemplate',
            examlist: ['SSCE','GCE','NECO'],
            availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            bgcolor: '#F4F6F6'
          },
          {
            name: 'Commerce',
            image: 'commerce.png',
            href: 'sscetemplate',
            examlist: ['SSCE','GCE','NECO'],
            availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            bgcolor: '#F4F6F6'
          },
          {
            name: 'AgricSci',
            image: 'agriculture.png',
            href: 'sscetemplate',
            examlist: ['SSCE','GCE','NECO'],
            availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            bgcolor: '#F4F6F6'
          },
          {
            name: 'Government',
            image: 'government.png',
            href: 'sscetemplate',
            examlist: ['SSCE','GCE','NECO'],
            availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            bgcolor: '#F4F6F6'
          }
          // {
          //   name: 'Mathematics',
          //   image: 'genmaths.png',
          //   href: 'jamb_genmaths',
          //   examlist: ['JAMB'],
          //   availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
          //   bgcolor: '#A9CCE3'
          // },
          // {
          //   name: 'Physics',
          //   image: 'physics.png',
          //   href: 'jamb_physics',
          //   examlist: ['JAMB'],
          //   availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
          //   bgcolor: '#A9CCE3'
          // },
          // {
          //   name: 'Chemistry',
          //   image: 'chemistry.png',
          //   href: 'jamb_chemistry',
          //   examlist: ['JAMB'],
          //   availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
          //   bgcolor: '#A9CCE3'
          // },
          // {
          //   name: 'Biology',
          //   image: 'biology.png',
          //   href: 'jamb_biology',
          //   examlist: ['JAMB'],
          //   availyears: ['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
          //   bgcolor: '#A9CCE3'
          // }
        ];

    }
})();