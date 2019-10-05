(function() {
      'use strict';

      angular
        .module('ssceexamsuiApp')
        .controller('ContactController', ContactController);

      // ContactController.$inject = ['$scope', '$log', '$controller', '$rootScope', 'ConfigService', 'ApiService', 'growl', '$location', '$timeout', 'HeaderService'];

      /* @ngInject */
      function ContactController($scope, $log, $controller, $rootScope, ConfigService, ApiService, growl, $location, $timeout, HeaderService, LoggingService) {

            $controller('BaseController', {$scope: $scope});
            $rootScope.baseRoute = '';
            var baseRoute = '';
            $scope.logEvent = function() {
                  LoggingService.postTrack('{cntct,' + $scope.userid + ',' + new Date().getTime() + '}');
            };

            $scope.inContactUs = function() {
                  console.log('Now in the Contact Us page!');
                  $scope.logEvent();
            };

            $scope.inContactUs();

            $scope.sendForm = function() {
                  $log.info('Sending form details to server');
                  var msg = {
                        fname: $('#fname').val(),
                        lname: $('#lname').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val(),
                        cname: $('#cname').val(),
                        country: $('#country').val(),
                        jtitle: $('#jtitle').val(),
                        note: $('#note').val()
                  };
                  console.log('msg is: ');
                  console.log(msg);
                  $scope.sendContactInfo(msg);
            };

            $scope.clearForm = function() {
                  $('#fname').val('');
                  $('#lname').val('');
                  $('#email').val('');
                  $('#phone').val('');
                  $('#cname').val('');
                  $('#country>option:eq(0)').prop('selected', true);
                  $('#jtitle').val('');
                  $('#note').val('');            
            };

            $timeout(function(){
                 HeaderService.setTab(4);
            }, 100);

            $scope.countrylist = [
                  { ctry: "", name: "Select..." },   
                  { ctry: "Afghanistan", name: "Afghanistan" },           
                  { ctry: "Albania", name: "Albania" },           
                  { ctry: "Algeria", name: "Algeria" },           
                  { ctry: "Andorra", name: "Andorra" },           
                  { ctry: "Angola", name: "Angola" },
                  { ctry: "Antigua", name: "Antigua" },
                  { ctry: "Argentina", name: "Argentina" },
                  { ctry: "Armenia", name: "Armenia" },
                  { ctry: "Australia", name: "Australia" },
                  { ctry: "Austria", name: "Austria" },
                  { ctry: "Azerbaijan", name: "Azerbaijan" },
                  { ctry: "Bahamas", name: "Bahamas" },
                  { ctry: "Bahrain", name: "Bahrain" },
                  { ctry: "Bangladesh", name: "Bangladesh" },
                  { ctry: "Barbados", name: "Barbados" },
                  { ctry: "Belarus", name: "Belarus" },
                  { ctry: "Belgium", name: "Belgium" },
                  { ctry: "Belize", name: "Belize" },
                  { ctry: "Benin", name: "Benin" },
                  { ctry: "Bhutan", name: "Bhutan" },
                  { ctry: "Bolivia", name: "Bolivia" },
                  { ctry: "Bosnia Herzegovina", name: "Bosnia Herzegovina" },
                  { ctry: "Botswana", name: "Botswana" },
                  { ctry: "Brazil", name: "Brazil" },
                  { ctry: "Brunei", name: "Brunei" },
                  { ctry: "Bulgaria", name: "Bulgaria" },
                  { ctry: "Burkina", name: "Burkina" },
                  { ctry: "Burundi", name: "Burundi" },
                  { ctry: "Cambodia", name: "Cambodia" },
                  { ctry: "Cameroon", name: "Cameroon" },
                  { ctry: "Canada", name: "Canada" },
                  { ctry: "Cape Verde", name: "Cape Verde" },
                  { ctry: "Central African Rep", name: "Central African Rep" },
                  { ctry: "Chad", name: "Chad" },
                  { ctry: "Chile", name: "Chile" },
                  { ctry: "China", name: "China" },
                  { ctry: "Colombia", name: "Colombia" },
                  { ctry: "Comoros", name: "Comoros" },
                  { ctry: "Congo", name: "Congo" },
                  { ctry: "Congo (Democratic Rep)", name: "Congo (Democratic Rep)" },
                  { ctry: "Costa Rica", name: "Costa Rica" },
                  { ctry: "Croatia", name: "Croatia" },
                  { ctry: "Cuba", name: "Cuba" },
                  { ctry: "Cyprus", name: "Cyprus" },
                  { ctry: "Czech Republic", name: "Czech Republic" },
                  { ctry: "Denmark", name: "Denmark" },
                  { ctry: "Djibouti", name: "Djibouti" },
                  { ctry: "Dominica", name: "Dominica" },
                  { ctry: "Dominican Republic", name: "Dominican Republic" },
                  { ctry: "East Timor", name: "East Timor" },
                  { ctry: "Ecuador", name: "Ecuador" },
                  { ctry: "Egypt", name: "Egypt" },
                  { ctry: "El Salvador", name: "El Salvador" },
                  { ctry: "Equatorial Guinea", name: "Equatorial Guinea" },
                  { ctry: "Eritrea", name: "Eritrea" },
                  { ctry: "Estonia", name: "Estonia" },
                  { ctry: "Ethiopia", name: "Ethiopia" },
                  { ctry: "Fiji", name: "Fiji" },
                  { ctry: "Finland", name: "Finland" },
                  { ctry: "France", name: "France" },
                  { ctry: "Gabon", name: "Gabon" },
                  { ctry: "Gambia", name: "Gambia" },
                  { ctry: "Georgia", name: "Georgia" },
                  { ctry: "Germany", name: "Germany" },
                  { ctry: "Ghana", name: "Ghana" },
                  { ctry: "Greece", name: "Greece" },
                  { ctry: "Grenada", name: "Grenada" },
                  { ctry: "Guatemala", name: "Guatemala" },
                  { ctry: "Guinea", name: "Guinea" },
                  { ctry: "Guinea-Bissau", name: "Guinea-Bissau" },
                  { ctry: "Guyana", name: "Guyana" },
                  { ctry: "Haiti", name: "Haiti" },
                  { ctry: "Honduras", name: "Honduras" },
                  { ctry: "Hungary", name: "Hungary" },
                  { ctry: "Iceland", name: "Iceland" },
                  { ctry: "India", name: "India" },
                  { ctry: "Indonesia", name: "Indonesia" },
                  { ctry: "Iran", name: "Iran" },
                  { ctry: "Iraq", name: "Iraq" },
                  { ctry: "Ireland (Republic)", name: "Ireland (Republic)" },
                  { ctry: "Israel", name: "Israel" },
                  { ctry: "Italy", name: "Italy" },
                  { ctry: "Ivory Coast", name: "Ivory Coast" },
                  { ctry: "Jamaica", name: "Jamaica" },
                  { ctry: "Japan", name: "Japan" },
                  { ctry: "Jordan", name: "Jordan" },
                  { ctry: "Kazakhstan", name: "Kazakhstan" },
                  { ctry: "Kenya", name: "Kenya" },
                  { ctry: "Kiribati", name: "Kiribati" },
                  { ctry: "Korea North", name: "Korea North" },
                  { ctry: "Korea South", name: "Korea South" },
                  { ctry: "Kosovo", name: "Kosovo" },
                  { ctry: "Kuwait", name: "Kuwait" },
                  { ctry: "Kyrgyzstan", name: "Kyrgyzstan" },
                  { ctry: "Laos", name: "Laos" },
                  { ctry: "Latvia", name: "Latvia" },
                  { ctry: "Lebanon", name: "Lebanon" },
                  { ctry: "Lesotho", name: "Lesotho" },
                  { ctry: "Liberia", name: "Liberia" },
                  { ctry: "Libya", name: "Libya" },
                  { ctry: "Liechtenstein", name: "Liechtenstein" },
                  { ctry: "Lithuania", name: "Lithuania" },
                  { ctry: "Luxembourg", name: "Luxembourg" },
                  { ctry: "Macedonia", name: "Macedonia" },
                  { ctry: "Madagascar", name: "Madagascar" },
                  { ctry: "Malawi", name: "Malawi" },
                  { ctry: "Malaysia", name: "Malaysia" },
                  { ctry: "Maldives", name: "Maldives" },
                  { ctry: "Mali", name: "Mali" },
                  { ctry: "Malta", name: "Malta" },
                  { ctry: "Marshall Islands", name: "Marshall Islands" },
                  { ctry: "Mauritania", name: "Mauritania" },
                  { ctry: "Mauritius", name: "Mauritius" },
                  { ctry: "Mexico", name: "Mexico" },
                  { ctry: "Micronesia", name: "Micronesia" },
                  { ctry: "Moldova", name: "Moldova" },
                  { ctry: "Monaco", name: "Monaco" },
                  { ctry: "Mongolia", name: "Mongolia" },
                  { ctry: "Montenegro", name: "Montenegro" },
                  { ctry: "Morocco", name: "Morocco" },
                  { ctry: "Mozambique", name: "Mozambique" },
                  { ctry: "Myanmar (Burma)", name: "Myanmar (Burma)" },
                  { ctry: "Namibia", name: "Namibia" },
                  { ctry: "Nauru", name: "Nauru" },
                  { ctry: "Nepal", name: "Nepal" },
                  { ctry: "Netherlands", name: "Netherlands" },
                  { ctry: "New Zealand", name: "New Zealand" },
                  { ctry: "Nicaragua", name: "Nicaragua" },
                  { ctry: "Niger", name: "Niger" },
                  { ctry: "Nigeria", name: "Nigeria" },
                  { ctry: "Norway", name: "Norway" },
                  { ctry: "Oman", name: "Oman" },
                  { ctry: "Pakistan", name: "Pakistan" },
                  { ctry: "Palau", name: "Palau" },
                  { ctry: "Panama", name: "Panama" },
                  { ctry: "Papua New Guinea", name: "Papua New Guinea" },
                  { ctry: "Paraguay", name: "Paraguay" },
                  { ctry: "Peru", name: "Peru" },
                  { ctry: "Philippines", name: "Philippines" },
                  { ctry: "Poland", name: "Poland" },
                  { ctry: "Portugal", name: "Portugal" },
                  { ctry: "Qatar", name: "Qatar" },
                  { ctry: "Romania", name: "Romania" },
                  { ctry: "Russian Federation", name: "Russian Federation" },
                  { ctry: "Rwanda", name: "Rwanda" },
                  { ctry: "St Kitts &amp; Nevis", name: "St Kitts &amp; Nevis" },
                  { ctry: "St Lucia", name: "St Lucia" },
                  { ctry: "Saint Vincent &amp; the Grenadines", name: "Saint Vincent &amp; the Grenadines" },
                  { ctry: "Samoa", name: "Samoa" },
                  { ctry: "San Marino", name: "San Marino" },
                  { ctry: "Sao Tome &amp; Principe", name: "Sao Tome &amp; Principe" },
                  { ctry: "Saudi Arabia", name: "Saudi Arabia" },
                  { ctry: "Senegal", name: "Senegal" },
                  { ctry: "Serbia", name: "Serbia" },
                  { ctry: "Seychelles", name: "Seychelles" },
                  { ctry: "Sierra Leone", name: "Sierra Leone" },
                  { ctry: "Singapore", name: "Singapore" },
                  { ctry: "Slovakia", name: "Slovakia" },
                  { ctry: "Slovenia", name: "Slovenia" },
                  { ctry: "Solomon Islands", name: "Solomon Islands" },
                  { ctry: "Somalia", name: "Somalia" },
                  { ctry: "South Africa", name: "South Africa" },
                  { ctry: "South Sudan", name: "South Sudan" },
                  { ctry: "Spain", name: "Spain" },
                  { ctry: "Sri Lanka", name: "Sri Lanka" },
                  { ctry: "Sudan", name: "Sudan" },
                  { ctry: "Suriname", name: "Suriname" },
                  { ctry: "Swaziland", name: "Swaziland" },
                  { ctry: "Sweden", name: "Sweden" },
                  { ctry: "Switzerland", name: "Switzerland" },
                  { ctry: "Syria", name: "Syria" },
                  { ctry: "Taiwan", name: "Taiwan" },
                  { ctry: "Tajikistan", name: "Tajikistan" },
                  { ctry: "Tanzania", name: "Tanzania" },
                  { ctry: "Thailand", name: "Thailand" },
                  { ctry: "Togo", name: "Togo" },
                  { ctry: "Tonga", name: "Tonga" },
                  { ctry: "Trinidad &amp; Tobago", name: "Trinidad &amp; Tobago" },
                  { ctry: "Tunisia", name: "Tunisia" },
                  { ctry: "Turkey", name: "Turkey" },
                  { ctry: "Turkmenistan", name: "Turkmenistan" },
                  { ctry: "Tuvalu", name: "Tuvalu" },
                  { ctry: "Uganda", name: "Uganda" },
                  { ctry: "Ukraine", name: "Ukraine" },
                  { ctry: "United Arab Emirates", name: "United Arab Emirates" },
                  { ctry: "United Kingdom", name: "United Kingdom" },
                  { ctry: "United States", name: "United States" },
                  { ctry: "Uruguay", name: "Uruguay" },
                  { ctry: "Uzbekistan", name: "Uzbekistan" },
                  { ctry: "Vanuatu", name: "Vanuatu" },
                  { ctry: "Vatican City", name: "Vatican City" },
                  { ctry: "Venezuela", name: "Venezuela" },
                  { ctry: "Vietnam", name: "Vietnam" },
                  { ctry: "Yemen", name: "Yemen" },
                  { ctry: "Zambia", name: "Zambia" },
                  { ctry: "Zimbabwe", name: "Zimbabwe" }
            ];

            $scope.sendContactInfo = function(msg) {
                  ApiService.sendContactInfo(msg)
                        .then(function(response) {
                                console.log('Sending the contact us form details: ');
                                console.log(response);
                                console.log(response.data);
                                if(response.data) {
                                    console.log('call successful.');
                                    growl.info('Form submitted succesfully, we will contact you soon. Thanks.', { ttl: 3000 });
                                    $scope.clearForm();
                                }
                            }, function(error) {
                                console.log('error', error);
                                growl.error('Error: Form submission failed!', { ttl: 3000 });
                            }
                        );
            };
      };     
})();
