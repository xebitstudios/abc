(function() {
	'use strict';

	angular
        .module('ssceexamsuiApp')
		.controller('BaseController', BaseController);

	// BaseController.$inject = ['$scope', '$timeout'];//, '$rootScope', 'ConfigService', 'window', $location];

	/* @ngInject */
	function BaseController($scope, $timeout, window, $location, $rootScope) {
		// , ConfigService) {
        $rootScope.theAPI = 'http://192.168.1.144:8066';

		//ConfigService.setUrl('dev'); // sets the appropriate URL depending on the environment, dev, qa, or prod
		// ConfigService.setUserId();

	    // console.log('user is: ' + $rootScope.userId);
        $scope.userid = '12345';
	    
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
            },
            {
                title: 'Test Center',
                icon: 'fa fa-gg fa-1'
            }
        ];

        $scope.setScores = function(val, subj) {
            console.log('subj is: ' + subj);
            // if(window.sessionStorage.econB) {
            //     console.log('window.sessionStorage.econB is: ' + window.sessionStorage.econB);
            //     var old = window.sessionStorage.econB;
            //     window.sessionStorage.econB = old + "," + val;

            //     if ((window.sessionStorage.econB.split('}{')).length > 4) {
            //         console.log("Sending this to the external Tracking Data Ingestor service = " + (window.sessionStorage.econB.split('}{')).length + ".");
            //         ingestLogs(window.sessionStorage.econB);
            //         window.sessionStorage.econB = "x";
            //     }
            // } else {
            //     window.sessionStorage.econB = val;
            // }
        };

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
            } else if($scope.btnsList[val]=='Test Center'){
                $location.path($scope.baseRoute + '/testcenter');
            } else if($scope.btnsList[val]=='Finish') {
                $scope.toggleModal(1);
            }
            $scope.timegoneleft = TimerService.getTime($scope.oldtime, $scope.totaltimemins);
            $scope.timegone = $scope.timegoneleft[0];
            $scope.timeleft = $scope.timegoneleft[1];
            $scope.pctused = ($scope.timegoneleft[2] > 100 ? 100 : $scope.timegoneleft[2]);
        };

	    $scope.aval = 'yes';
	    
	    $scope.getDate = function() {
	        var dte = Date();
	        return dte;
	    };

		$scope.footable = function() {
			$('.footable').footable();
		};

		$scope.footable();

		$timeout(function() {
			$('.footable').trigger('footable_redraw');
			if(window.sessionStorage.act) {
		    	$('#logouttab').removeClass('hide');
		    	$('#logintab').addClass('hide');
		    } else {
		    	$location.path("/");
		    	$('#logintab').removeClass('hide');
		    	$('#logouttab').addClass('hide');
		    }
		}, 50);
        
	}
})();
