(function() {
    'use strict';

    angular
        .module('ssceexamsuiApp')
        .controller('AnalyticsController', AnalyticsController);

    // AnalyticsController.$inject = ['$scope', '$log', '$location', '$controller', '$rootScope', 'ConfigService', 'ApiService', 'HeaderService', 'growl', '$timeout'];

    /* @ngInject */
    function AnalyticsController($scope, $log, $location, $controller, $rootScope, ConfigService, ApiService, HeaderService, growl, $timeout, LoggingService) {

        $controller('BaseController', {$scope: $scope});
        $rootScope.baseRoute = '';
        $scope.activeTab = 'usersInProgress';
        $scope.pgwidth = true;
        $scope.currentpage = 1;
        $scope.chartchange = '';
        $scope.logEvent = function() {
            LoggingService.postTrack('{analy,' + $scope.userid + ',' + $scope.chartchange + ',' + new Date().getTime() + '}');
        };
        
        $scope.hide = [
            { hideval: '' },
            { hideval: '' },
            { hideval: '' },
            { hideval: '' },
            { hideval: '' },
            { hideval: '' },
            { hideval: '' },
            { hideval: '' },
            { hideval: '' },
            { hideval: '' }
        ];

        $scope.fclick = function() {
            if($scope.currentpage !== 1) {
                $scope.currentpage = 1;
                $scope.moveon($scope.currentpage);
            }
        };

        $scope.lclick = function() {
            if($scope.currentpage !== 9) {
                $scope.currentpage = 9;
                $scope.moveon($scope.currentpage);
            }
        };

        $scope.nclick = function() {
            if($scope.currentpage !== 9) {
                $scope.currentpage++;
                $scope.moveon($scope.currentpage);
            }
        };

        $scope.pclick = function() {
            if($scope.currentpage !== 1) {
                $scope.currentpage--;
                $scope.moveon($scope.currentpage);
            }
        };

        $scope.recentexams = {};
        $scope.toprow = [];
        $scope.examscores = {};

        $scope.inAnalytics = function() {
            console.log('Now in the Analytics page!');
        };

        $scope.inAnalytics();

        $scope.closeme = function (val) {
            console.log("val is: " + val);
            $('#hideme' + val + '').hide("slow");
            $('#' + val + '').hide("slow");
        };

        $scope.moveon = function(val) {
            if($scope.pgwidth) {
                for(var e=0;e<9;e++) {
                    $scope.hide[e].hideval = 'hide';
                }
                if(val==1) { $scope.hide[0].hideval = ''; }
                if(val==2) { $scope.hide[1].hideval = ''; }
                if(val==3) { $scope.hide[2].hideval = ''; }
                if(val==4) { $scope.hide[3].hideval = ''; }
                if(val==5) { $scope.hide[4].hideval = ''; }
                if(val==6) { $scope.hide[5].hideval = ''; }
                if(val==7) { $scope.hide[6].hideval = ''; }
                if(val==8) { $scope.hide[7].hideval = ''; }
                if(val==9) { $scope.hide[8].hideval = ''; }
            }
        };

        $scope.subjmonth = [
            { code: "", name: "Month" },
            { code: "Jan", name: "Jan" },
            { code: "Feb", name: "Feb" },
            { code: "Mar", name: "Mar" },           
            { code: "Apr", name: "Apr" },
            { code: "May", name: "May" },
            { code: "Jun", name: "Jun" },
            { code: "Jul", name: "Jul" },
            { code: "Aug", name: "Aug" },
            { code: "Sep", name: "Sep" },
            { code: "Oct", name: "Oct" },
            { code: "Nov", name: "Nov" },
            { code: "Dec", name: "Dec" }
        ];

        $scope.subjnumber = [
            { code: "", name: "Top #" },
            { code: "t3", name: "Top 3" },
            { code: "t5", name: "Last 3" }
        ];

        $scope.subjlist = [
            { code: "", name: "Subject" },
            { code: "Phy", name: "Physics" },
            { code: "Chem", name: "Chemistry" },
            { code: "Maths", name: "Mathematics" },           
            { code: "Econ", name: "Economics" },
            { code: "Bio", name: "Biology" },
            { code: "Eng", name: "English" },
            { code: "Geo", name: "Geography" },
            { code: "Lit", name: "Lit. in English" },
            { code: "Com", name: "Commerce" },
            { code: "AgSci", name: "Agric Sci" },
            { code: "Gov", name: "Government" }
        ];

        $scope.subjyear = [
            { code: "", name: "Year" },
            { code: "1988", name: "1988" },
            { code: "1989", name: "1989" },
            { code: "1990", name: "1990" },           
            { code: "1991", name: "1991" },
            { code: "1992", name: "1992" },
            { code: "1993", name: "1993" },
            { code: "1994", name: "1994" },
            { code: "1995", name: "1995" },
            { code: "1996", name: "1996" },
            { code: "1997", name: "1997" },
            { code: "1998", name: "1998" },
            { code: "1999", name: "1999" },
            { code: "2000", name: "2000" },           
            { code: "2001", name: "2001" },
            { code: "2002", name: "2002" },
            { code: "2003", name: "2003" },
            { code: "2004", name: "2004" },
            { code: "2005", name: "2005" },
            { code: "2006", name: "2006" },
            { code: "2007", name: "2007" },
            { code: "2008", name: "2008" },
            { code: "2009", name: "2009" },
            { code: "2010", name: "2010" },           
            { code: "2011", name: "2011" },
            { code: "2012", name: "2012" },
            { code: "2013", name: "2013" },
            { code: "2014", name: "2014" },
            { code: "2015", name: "2015" }
        ];

        $scope.chart1Data = {};
        $scope.chart2Data = {};
        $scope.chart3Data = {};
        $scope.chart4Data = {};
        $scope.chart5Data = {};
        $scope.chart6Data = {};

        $scope.setChart1 = function() {
            $('#chart1').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Monthly Exam Completions'
                },
                xAxis: {
                    categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Exam Completions'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.1,
                        borderWidth: 0.2
                    }
                },
                series: [{
                    name: $scope.chart1Data.dataval,
                    data: $scope.chart1Data.data
                }]
            });
        };

        $scope.setChart2 = function() {
            $('#chart2').highcharts({
                chart: {
                    type: $scope.chart2Data.typee
                },
                title: {
                    text: $scope.chart2Data.titlee
                },
                subtitle: {
                    text: '<b>' + $scope.chart2Data.subtitle + '</b>'
                },
                xAxis: {
                    allowDecimals: false,
                    labels: {
                        formatter: function () {
                            return this.value; // clean, unformatted number for year
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: $scope.chart2Data.data1ylabel
                    },
                    labels: {
                        formatter: function () {
                            return this.value ;
                        }
                    }
                },
                tooltip: {
                    pointFormat: '{series.name} spent <b>{point.y:,.0f}</b> seconds<br/>more than the average tester'
                },
                plotOptions: {
                    area: {
                        pointStart: 1988,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: $scope.chart2Data.data1xlabel,
                    data: $scope.chart2Data.data1,
                    color: '#839192'
                }, {
                    name: $scope.chart2Data.data2xlabel,
                    data: $scope.chart2Data.data2,
                    color: '#A9DFBF'
                }]
            });
        };

        $scope.setChart3 = function() {
            $('#chart3').highcharts({
                chart: {
                    type: $scope.chart3Data.typee
                },
                title: {
                    text: $scope.chart3Data.titlee
                },
                subtitle: {
                    text: $scope.chart3Data.subtitle
                },
                xAxis: {
                    categories: $scope.chart3Data.data2xlabel
                },
                yAxis: {
                    title: {
                        text: $scope.chart3Data.data1ylabel
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: false
                    }
                },
                series: [{
                    name: 'You',
                    data: $scope.chart3Data.data1,
                    color: '#85929E'
                }, {
                    name: 'Average User',
                    data: $scope.chart3Data.data2,
                    color: '#F8C471'
                }]
            });
        };           

        $scope.setChart4 = function() {
            $('#chart4').highcharts({
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'Subjects Attempted Most In Last 1 Week'
                },
                xAxis: {
                    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    tickmarkPlacement: 'on',
                    title: {
                        enabled: false
                    }
                },
                yAxis: {
                    title: {
                        text: 'Overall %'
                    }
                },
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} attempts)<br/>',
                    split: true
                },
                plotOptions: {
                    area: {
                        stacking: 'percent',
                        lineColor: '#ffffff',
                        lineWidth: 1,
                        marker: {
                            lineWidth: 1,
                            lineColor: '#ffffff'
                        }
                    }
                },
                series: [
                    {
                        name: $scope.chart4Data.datapts[0].dataval,
                        data: $scope.chart4Data.datapts[0].dataa,
                        color: '#FAD7A0'
                    },
                    {
                        name: $scope.chart4Data.datapts[1].dataval,
                        data: $scope.chart4Data.datapts[1].dataa,
                        color: '#7FB3D5'
                    },
                    {
                        name: $scope.chart4Data.datapts[2].dataval,
                        data: $scope.chart4Data.datapts[2].dataa,
                        color: '#707B7C'
                    }
                ]
            }); 
        };

        $scope.setChart5 = function() {
            $('#chart5').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Exam Attempts for Subject in Last 1 Month'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: [{
                    name: 'Total %',
                    colorByPoint: true,
                    data: [
                        {
                            name: $scope.chart5Data[0].name,
                            y: $scope.chart5Data[0].y
                        }, 
                        {
                            name: $scope.chart5Data[1].name,
                            y: $scope.chart5Data[1].y,
                            sliced: true,
                            selected: true
                        }
                    ]
                }]
            });
        };

        var categories = [' < 1996', '1996', '1997', '1998',
            '1999', '2000', '2001', '2002', '2003',
            '2004', '2005', '2006', '2007', '2008',
            '2009', '2010', '2011', '2012', '2013',
            '2014', '2015'];

        $scope.setChart6 = function() {
            $('#chart6').highcharts({
                chart: {
                    type: $scope.chart6Data.typee
                },
                title: {
                    text: $scope.chart6Data.titlee
                },
                subtitle: {
                    text: $scope.chart6Data.subtitle
                },
                xAxis: [
                    {
                        categories: categories,
                        reversed: false,
                        labels: {
                            step: 1
                        }
                    }, { // mirror axis on right side
                        opposite: true,
                        reversed: false,
                        categories: categories,
                        linkedTo: 0,
                        labels: {
                            step: 1
                        }
                    }
                ],
                yAxis: {
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function () {
                            return Math.abs(this.value) + '%';
                        }
                    }
                },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + ', year ' + this.point.category + '</b><br/>' +
                            'Score: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                    }
                },
                series: [{
                    name: $scope.chart6Data.data2xlabel,
                    data: $scope.chart6Data.data2,
                    color: '#273746'
                }, {
                    name: $scope.chart6Data.data1xlabel,
                    data: $scope.chart6Data.data1,
                    color: '#E74C3C'
                }]
            });
        };        

        $scope.getAnalyticsdata = function(userid) {
            ApiService.getAnalyticsdata(userid)
                .then(function successCallback(response) {
                    $log.debug('Getting the latest analytics data for user: 25526');
                    if(response.data != null) {
                        $log.debug('Analytics retrieval: ' + response.data.reason);
                        $scope.recentexams = response.data.recentexams;
                        $scope.toprow = response.data.toprow;
                        $scope.examscores = response.data.examscores;
                        $scope.chart1Data = response.data.chart1Data;
                        $scope.chart2Data = response.data.chart2Data;
                        $scope.chart3Data = response.data.chart3Data;
                        $scope.chart4Data = response.data.chart4Data;
                        $scope.chart5Data = response.data.chart5Data;
                        $scope.chart6Data = response.data.chart6Data;
                        $scope.setChart1();
                        $scope.setChart2();
                        $scope.setChart3();
                        $scope.setChart4();
                        $scope.setChart5();
                        $scope.setChart6();
                        $scope.chartchange = 'allcharts';
                        $scope.logEvent();
                    }
                }, function errorCallback(response) {
                    if (response.status != 200 && response.data === null) {
                        $log.error('Error occured, Analytics retrieval failed, data not saved!');
                        growl.error('Error occured, Analytics retrieval failed, data not saved!', { ttl: 3000 });
                    }
                });
        };

        $scope.getAnalyticsdata('12345');

        $scope.chart1Update = function() {
            var mth = $('#subjmth1').val();
            var yr = $('#subjyr2').val();
            var userid = $scope.userid;
            $log.debug('userid: ' + userid + ', mth: ' + mth + ', yr: ' + yr);
            $scope.chartchange = 'chart1';
            ApiService.chart1Update(mth, yr, userid)
                .then(function successCallback(response) {
                    $log.debug('Getting the latest chart 1 analytics data for user: 25526');
                    if(response.data != null) {
                        $log.debug('Analytics retrieval, done');
                        $scope.chart1Data = response.data.chart1Data;
                        $scope.setChart1();
                        growl.success('<b>Chart Updated Successfully</b>', { ttl: 3000 });
                        $scope.logEvent();
                    }
                }, function errorCallback(response) {
                    if (response.status != 200 && response.data === null) {
                        $log.error('Error occured, Chart1 Update failed');
                        growl.error('Error occured, Chart1 Update failed!', { ttl: 3000 });
                    }
                });
        };

        $scope.chart2Update = function() {
            var subj = $('#subjlst1').val();
            var yr = $('#subjyr1').val();
            var userid = $scope.userid;
            $log.debug('userid: ' + userid + ', subj: ' + subj + ', yr: ' + yr);
            $scope.chartchange = 'chart2';
            ApiService.chart2Update(subj, yr, userid)
                .then(function successCallback(response) {
                    $log.debug('Getting the latest chart 2 analytics data for user: 25526');
                    if(response.data != null) {
                        $log.debug('Analytics retrieval, done');
                        $scope.chart2Data = response.data.chart2Data;
                        $scope.setChart2();
                        growl.success('<b>Chart Updated Successfully</b>', { ttl: 3000 });
                        $scope.logEvent();
                    }
                }, function errorCallback(response) {
                    if (response.status != 200 && response.data === null) {
                        $log.error('Error occured, Chart2 Update failed');
                        growl.error('Error occured, Chart2 Update failed!', { ttl: 3000 });
                    }
                });
        };

        $scope.chart3Update = function() {
            var yr = $('#subjyr3').val();
            var userid = $scope.userid;
            $log.debug('userid: ' + userid + ', yr: ' + yr);
            $scope.chartchange = 'chart3';
            ApiService.chart3Update(yr, userid)
                .then(function successCallback(response) {
                    $log.debug('Getting the latest chart 3 analytics data for user: 25526');
                    if(response.data != null) {
                        $log.debug('Analytics retrieval, done ');
                        $scope.chart3Data = response.data.chart3Data;
                        $scope.setChart3();
                        growl.success('<b>Chart Updated Successfully</b>', { ttl: 3000 });
                        $scope.logEvent();
                    }
                }, function errorCallback(response) {
                    if (response.status != 200 && response.data === null) {
                        $log.error('Error occured, Chart3 Update failed');
                        growl.error('Error occured, Chart3 Update failed!', { ttl: 3000 });
                    }
                });
        };

        $scope.chart4Update = function() {
            var num = $('#subjnum').val();
            var userid = $scope.userid;
            $log.debug('userid: ' + userid + ', num: ' + num);
            $scope.chartchange = 'chart4';
            ApiService.chart4Update(num, userid)
                .then(function successCallback(response) {
                    $log.debug('Getting the latest chart 4 analytics data for user: 25526');
                    if(response.data != null) {
                        $log.debug('Analytics retrieval, done ');
                        $scope.chart4Data = response.data.chart4Data;
                        $scope.setChart4();
                        growl.success('<b>Chart Updated Successfully</b>', { ttl: 3000 });
                        $scope.logEvent();
                    }
                }, function errorCallback(response) {
                    if (response.status != 200 && response.data === null) {
                        $log.error('Error occured, Chart4 Update failed');
                        growl.error('Error occured, Chart4 Update failed!', { ttl: 3000 });
                    }
                });
        };

        $scope.chart5Update = function() {
            var subj = $('#subjlst2').val();
            var userid = $scope.userid;
            $log.debug('userid: ' + userid + ', subj: ' + subj);
            $scope.chartchange = 'chart5';
            ApiService.chart5Update(subj, userid)
                .then(function successCallback(response) {
                    $log.debug('Getting the latest chart 5 analytics data for user: 25526');
                    if(response.data != null) {
                        $log.debug('Analytics retrieval, done ');
                        $scope.chart5Data = response.data.chart5Data;
                        $scope.setChart5();
                        growl.success('<b>Chart Updated Successfully</b>', { ttl: 3000 });
                        $scope.logEvent();
                    }
                }, function errorCallback(response) {
                    if (response.status != 200 && response.data === null) {
                        $log.error('Error occured, Chart5 Update failed');
                        growl.error('Error occured, Chart5 Update failed!', { ttl: 3000 });
                    }
                });
        };

        $scope.chart6Update = function() {
            var subj = $('#subjlst3').val();
            var userid = $scope.userid;
            $log.debug('userid: ' + userid + ', subj: ' + subj);
            $scope.chartchange = 'chart6';
            ApiService.chart6Update(subj, userid)
                .then(function successCallback(response) {
                    $log.debug('Getting the latest chart 6 analytics data for user: 25526');
                    if(response.data != null) {
                        $log.debug('Analytics retrieval, done ');
                        $scope.chart6Data = response.data.chart6Data;
                        $scope.setChart6();
                        growl.success('<b>Chart Updated Successfully</b>', { ttl: 3000 });
                        $scope.logEvent();
                    }
                }, function errorCallback(response) {
                    if (response.status != 200 && response.data === null) {
                        $log.error('Error occured, Chart6 Update failed');
                        growl.error('Error occured, Chart6 Update failed!', { ttl: 3000 });
                    }
                });
        };

        $timeout(function(){
            HeaderService.setTab(2);
            $('div svg text:contains("Highcharts.com")').addClass('hide');

            if ($('body').width() < 600) {
              $scope.pgwidth = true;
              $scope.moveon(1);
            } else {
              $scope.pgwidth = false;
            }
            console.log('$scope.pgwidth is: ' + $scope.pgwidth);
        }, 100);

    }
})();