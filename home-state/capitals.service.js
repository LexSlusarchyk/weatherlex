(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('capitalsService', capitalsService);

    capitalsService.$inject = ['CapitalsList'];
    /* @ngInject */
    function capitalsService(CapitalsList) {


        var service = {
            data: new CapitalsList(),
            reset: reset,
            remove: remove,
            updateStorage: updateStorage
        };

        init();

        return service;

        function init() {
            service.data.getList();
        }

        function reset() {         // reset city list to default
            service.data.reset();
        }

        function remove(item) {
            service.data.remove(item);
        }

        function updateStorage(){
            service.data.updateStorage();
        }



    }
})();