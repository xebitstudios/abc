module.exports = function(app, port, rootPath, apiRoutes) {
	console.log('just entered analyticsApi');
	var _ = require('underscore');
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var config = require('../config');  // get our config file

	// Update analytics data on Analytics page based on user selections
	// chart 1
	apiRoutes.post('/analytics/chart1', function(req, res) {
		console.log('Getting data for updating Chart1, req is: ');
		console.log(req.body);
		res.json({
			data: {
				chart1Data: {
	                dataval: 'English',
	                data: [6, 8, 3, 11, 7, 12, 12, 9, 8, 16, 13, 14]
		        }	
			}
		});
	});

	// chart 2
	apiRoutes.post('/analytics/chart2', function(req, res) {
		console.log('Getting data for updating Chart2, req is: ');
		console.log(req.body);
		res.json({
			data: {
				chart2Data: {
		            typee: 'areaspline',
		            titlee: 'English 2012, Objective Tests',
		            subtitle: 'Average response time in seconds',
		            data1xlabel: 'Average User',
		            data1: [15, 12, 18, 14, 35, 42, 39, 23, 9, 28, 20, 21, 23],
		            data2xlabel: 'You',
		            data1ylabel: 'Response Time (s)',
		            data2: [13, 19, 11, 20, 18, 48, 28, 21, 10, 20, 31, 28, 22]
		        }		
			}
		});
	});

	// chart 3
	apiRoutes.post('/analytics/chart3', function(req, res) {
		console.log('Getting data for updating Chart3, req is: ');
		console.log(req.body);
		res.json({
			data: {
				chart3Data: {
			        typee: 'areaspline',
			        titlee: 'Monthly Exam Completions',
			        subtitle: 'You vs. Average User',
			        data1xlabel: 'Average User',
			        data1: [55, 60, 78, 102, 169, 238, 260, 243, 218, 160, 154, 104],
			        data2xlabel: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			        data1ylabel: 'Completions (#)',
			        data2: [32, 29, 72, 92, 122, 139, 178, 183, 128, 120, 59, 41]
			    }	
			}
		});
	});

	// chart 4
	apiRoutes.post('/analytics/chart4', function(req, res) {
		console.log('Getting data for updating Chart4, req is: ');
		console.log(req.body);
		res.json({
			data: {
				chart4Data: {
		            datapts: [
		                {
		                    dataval: 'Mathematics',
		                    dataa: [357, 703, 680, 892, 1205, 3546, 4690]
		                },
		                {
		                    dataval: 'Physics',
		                    dataa: [94, 89, 102, 120, 184, 690, 1278]
		                },
		                {
		                    dataval: 'Biology',
		                    dataa: [140, 230, 202, 388, 503, 683, 599]
		                }
		            ]
		        }
			}
		});
	});

	// chart 5
	apiRoutes.post('/analytics/chart5', function(req, res) {
		console.log('Getting data for updating Chart5, req is: ');
		console.log(req.body);
		res.json({
			data: {
				chart5Data: [
		        	{
                        name: 'Completed',
                        y: 16
                    }, 
                    {
                        name: 'Not Completed',
                        y: 3,
                        sliced: true,
                        selected: true
                    }
		        ]
			}
		});
	});

	// chart 6
	apiRoutes.post('/analytics/chart6', function(req, res) {
		console.log('Getting data for updating Chart6, req is: ');
		console.log(req.body);
		res.json({
			data: {
				chart6Data: {
		            typee: 'bar',
		            titlee: 'Subject Comparison with Average User',
		            subtitle: 'Physics, 1988 - 2015',
		            data1xlabel: 'Average User',
		            data1: [2.4, 2.2, 2.7, 2.1, 2.3, 3.2, 3.7, 3.1, 3.0, 4.4, 4.0, 4.6, 3.9, 2.8, 3.2, 2.6, 2.8, 2.2, 2.6, 1.1, 2.0],
		            color1: '#58d68d',
		            data2xlabel: 'You',
		            data1ylabel: 'Response Time (s)',
		            data2: [-2.4, -2.0, -2.0, -2.3, -2.9, -3.3, -3.7, -3.2, -2.8, -4.0, -4.1, -3.9, -3.3, -3.4, -3.0, -2.9, -2.2, -2.6, -1.9, -0.5, -1.0],
		            color2: '#edbb99'
		        }
			}
		});
	});

	// apiRoutes.get('/analytics/{userid}/rea', function(req, res) {
	// 	res.json({
	// 		data: {}
	// 	});
	// });
};