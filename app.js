'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [
      'ui.router',
      'ui.router.state.events',
      'ui.bootstrap',
      'ngStorage'
])
    .config(['$urlRouterProvider', '$locationProvider', '$sceDelegateProvider',
        function($urlRouterProvider, $locationProvider, $sceDelegateProvider) {
            $locationProvider.hashPrefix('!');

            $sceDelegateProvider.resourceUrlWhitelist([   //White list for wether api
                // Allow same origin resource loads.
                'self',
                // Allow loading from our assets domain.  Notice the difference between * and **.
                'http://api.openweathermap.org/**']);


 // $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
