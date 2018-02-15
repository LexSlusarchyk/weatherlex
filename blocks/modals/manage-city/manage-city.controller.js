(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('ManageCityModalController', ManageCityModalController);


    ManageCityModalController.$inject = ['$uibModalStack', 'capitalsService'];

    function ManageCityModalController($uibModalStack, capitalsService) {
        var vm = this;

        vm.submit = submit;
        vm.city = {};


        function submit() {
            capitalsService.data.add(vm.city);
            $uibModalStack.dismissAll();
        }
    }

})();