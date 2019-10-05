module.exports = function(config){
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude), it is the relative root path
    basePath : '../',

    // list of files / patterns to load in the browser
    files : [
      'test/lib/jquery.js',
      'test/lib/angular.js',
      // 'app/lib/angular/angular-*.js',
      // 'app/js/**/*.js',
      // 'app/js/app.js',
      // 'app/js/controllers/*.js',
      // 'app/js/directives/*js',
      // 'app/js/services/*.js',
      // 'app/js/filters/*.js',
      // 'test/lib/ng-modal.js',
      // 'test/lib/sinon-1.15.0.js',
      // 'test/lib/angular-footable.js',
      // 'test/lib/slide.and.push.js',
      // 'test/lib/jquery.js',
      // '../test/lib/jasmine.js',
      // '../test/lib/jasmine.css',
      // 'test/lib/angular.js',
      'test/lib/angular-mocks.js',
      'test/unit/**/*.js'
    ],

    // list of files to exclude
    exclude: [
      'app/lib/angular/*.min.js'
    ],

    // preprocess matching files before serving them to the browser. 
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // specify which of the files we want to appear in the code coverage report
    preprocessors: {
      'js/**/*.js': ['coverage']
      // ['js/services/*.js']: ['coverage'],
      // ['js/controllers/*.js']: ['coverage']
    },

    // test results reporter to use, possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable or disable colors in the output (reporters and logs)
    colors: true,

    // level of logging, 
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable or disable watching files and executing tests whenever any file changes
    autoWatch : true,

    // frameworks to use for testing, https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],//, 'mocha'], 'chai'],

    // start these browsers, available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers : ['PhantomJS'],//, 'Chrome'],

    plugins : [
      'karma-junit-reporter',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/' // where to store the report
    },

    // CI mode, it true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level, how many browser should be started simultaneously
    concurrency: Infinity

  });
};


// Make sure you install the following beforerunning the tests
// npm install phantomjs --save-dev
// npm install karma-phantomjs-launcher --save-dev
// npm install -g karma-cli
// karma start test/karma-conf.js --single-run OR karma start test/karma-conf.js --auto-watch
