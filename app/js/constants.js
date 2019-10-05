(function() {
    'use strict';

    angular
        .module('constantsModule')
        .constant('_', _)
        .constant('constant', {
            APP_NAME: 'SSCE Exams UI',
            API_HOST: 'http://localhost:8065'
        });

})();
