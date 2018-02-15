(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('modalService', modalService);

    modalService.$inject = ['$uibModal'];

    function modalService($uibModal) {
        var service = {
            showAddCityModal: showAddCityModal
        };

        return service;

        function showAddCityModal() {
            $uibModal.open({
                animation: true,
                templateUrl: 'blocks/modals/manage-city/manage-city.modal.html',
                controller: 'ManageCityModalController',
                controllerAs: 'vm',
                size: 'md'
            });
        }

    }



})();
