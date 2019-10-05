module.exports = function(app, port, rootPath, apiRoutes) {
	console.log('just entered queryApi');
	var _ = require('underscore');
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var config = require('../config');  // get our config file
	
	// Load initial analytics data on Analytics page
	apiRoutes.get('/getanalyticsdata/12345', function(req, res) {
		res.json({
			data: {
				recentexams: {
		            name: "Johnson Smith",
		            subjscores: [
		                {
		                    subj: 'Mathematics',
		                    year: '1988',
		                    pct: '100',
		                    examday: '1/27/2017',
		                    examtime: '10.52',
		                    daysection: 'a.m',
		                    colr: 'info'
		                },
		                {
		                    subj: 'Mathematics',
		                    year: '1993',
		                    pct: '69',
		                    examday: '6/12/2016',
		                    examtime: '3.29',
		                    daysection: 'p.m',
		                    colr: 'warning'
		                },
		                {
		                    subj: 'Physics',
		                    year: '1994',
		                    pct: '54',
		                    examday: '3/29/2016',
		                    examtime: '9.23',
		                    daysection: 'p.m',
		                    colr: 'danger'
		                },
		                {
		                    subj: 'English',
		                    year: '1989',
		                    pct: '89',
		                    examday: '5/23/2016',
		                    examtime: '8.33',
		                    daysection: 'p.m',
		                    colr: 'success'
		                },
		                {
		                    subj: 'Biology',
		                    year: '1993',
		                    pct: '100',
		                    examday: '4/10/2016',
		                    examtime: '11.29',
		                    daysection: 'a.m',
		                    colr: 'success'
		                },
		                {
		                    subj: 'Economics',
		                    year: '1993',
		                    pct: '79',
		                    examday: '9/23/2016',
		                    examtime: '8.30',
		                    daysection: 'p.m',
		                    colr: 'info'
		                },
		                {
		                    subj: 'Chemistry',
		                    year: '1998',
		                    pct: '65',
		                    examday: '3/19/2016',
		                    examtime: '9.42',
		                    daysection: 'a.m',
		                    colr: 'warning'
		                }
		            ]
		        },
		        toprow: [
		            {
		                rowtitle: 'Subjects Subscription',
		                vall: '8',
		                ind: 'analy1'
		            },
		            {
		                rowtitle: 'Attempts in Last Week',
		                vall: '32',
		                ind: 'analy2'
		            },
		            {
		                rowtitle: 'Avg. Daily Sesssion (hrs)',
		                vall: '6.8',
		                ind: 'analy3'
		            },
		            {
		                rowtitle: 'User Improvement Ranking',
		                vall: '82.6',
		                ind: 'analy4'
		            }
		        ],
		        examscores: {
		            results: [
		                {
		                    name: 'Maths',
		                    attempts: '25',
		                    avgscore: '78%',
		                    noticeval: 'notice-success',
		                    iconval: 'fa-area-chart'
		                },
		                {
		                    name: 'Physics',
		                    attempts: '48',
		                    avgscore: '92%',
		                    noticeval: 'notice-warning',
		                    iconval: 'fa-spinner'
		                },
		                {
		                    name: 'Chemistry',
		                    attempts: '17',
		                    avgscore: '72%',
		                    noticeval: 'notice-info',
		                    iconval: 'fa-times'
		                },
		                {
		                    name: 'Economics',
		                    attempts: '12',
		                    avgscore: '86%',
		                    noticeval: 'notice-danger',
		                    iconval: 'fa-check'
		                }
		            ],
		            summary: {}
		        },
		        chart1Data: {
		            dataval: 'English',
		            data: [9, 4, 5, 8, 11, 15, 17, 16, 14, 10, 6, 4]
		        },
		        chart2Data: {
		            typee: 'areaspline',
		            titlee: 'Economics 2008, Objective Tests',
		            subtitle: 'Average response time in seconds',
		            data1xlabel: 'Average User',
		            data1: [12, 10, 14, 20, 30, 45, 36, 19, 15, 20, 24, 27, 29],
		            color1: '#58d68d',
		            data2xlabel: 'You',
		            data1ylabel: 'Response Time (s)',
		            data2: [8, 14, 17, 24, 28, 53, 31, 23, 18, 26, 29, 22, 19],
		            color2: '#edbb99'
		        },
		        chart3Data: {
		            typee: 'areaspline',
		            titlee: 'Monthly Exam Completions',
		            subtitle: 'You vs. Average User',
		            data1xlabel: 'Average User',
		            data1: [70, 69, 95, 145, 184, 215, 252, 265, 233, 183, 139, 96],
		            color1: '#fad7a0',
		            data2xlabel: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		            data1ylabel: 'Completions (#)',
		            data2: [39, 42, 57, 85, 119, 152, 170, 166, 142, 103, 66, 48],
		            color2: '#42b3e5'
		        },
		        chart4Data: {
		            datapts: [
		                {
		                    dataval: 'Biology',
		                    dataa: [163, 203, 276, 208, 147, 129, 128]
		                },
		                {
		                    dataval: 'Chemistry',
		                    dataa: [18, 31, 54, 106, 29, 18, 201]
		                },
		                {
		                    dataval: 'Economics',
		                    dataa: [23, 52, 22, 16, 53, 38, 56]
		                }
		            ]
		        },
		        chart5Data: [
		        	{
                        name: 'Completed',
                        y: 12
                    }, {
                        name: 'Not Completed',
                        y: 8,
                        sliced: true,
                        selected: true
                    }
		        ],
		        chart6Data: {
		            typee: 'bar',
		            titlee: 'Subject Comparison with Average User',
		            subtitle: 'Mathematics, 1988 - 2015',
		            data1xlabel: 'Average User',
		            data1: [2.1, 2.0, 2.2, 2.4, 2.6, 3.0, 3.1, 2.9, 3.1, 4.1, 4.3, 3.6, 3.4, 2.6, 2.9, 2.9, 1.8, 1.2, 0.6, 0.1, 0.0],
		            color1: '#58d68d',
		            data2xlabel: 'You',
		            data1ylabel: 'Response Time (s)',
		            data2: [-2.2, -2.2, -2.3, -2.5, -2.7, -3.1, -3.2, -3.0, -3.2, -4.3, -4.4, -3.6, -3.1, -2.4, -2.5, -2.3, -1.2, -0.6, -0.2, -0.0, -0.0],
		            color2: '#edbb99'
		        }
			}
		});
	});
};