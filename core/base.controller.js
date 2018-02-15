(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('BaseController', BaseController);

    BaseController.$inject = ['$state', '$rootScope'];
    /* @ngInject */
    function BaseController($state, users, $rootScope) {
        var vm = this;


        vm.states = [];



    }
})();

