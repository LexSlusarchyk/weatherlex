(function(){
    'use strict';

    angular
        .module('myApp')
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('home', {
                    url:'/',
                    templateUrl: 'home-state/home.view.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                })
        }])
})();