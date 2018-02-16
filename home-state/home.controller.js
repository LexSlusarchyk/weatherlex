(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', 'capitalsService', 'modalService'];

    function HomeController($rootScope, capitalsService, modalService) {
        var vm = this;

        vm.capitalsService = capitalsService;
        vm.capitals = vm.capitalsService.data;
        vm.openAddBaseCityModal = openAddBaseCityModal;
        vm.myFilter = myFilter;

        vm.filterOptions = [                        //option for myFilter
            {
                title: 'All',
                key: ''
            },
            {
                title: 'Neutral',
                key: 'neutral'
            },
            {
                title: 'Visited',
                key: 'visited'
            },
            {
                title: 'Planning to visit',
                key: 'going_to_visit'
            }
        ];

        activate();

        function activate() {
            $rootScope.$on('capital-updated', function() {
                vm.capitalsService.updateStorage();
            });
        }

        function openAddBaseCityModal() {           //open manage-city modal
            modalService.showAddCityModal();
        }

        function myFilter(actual) {                     // filter city in list togle css class
            if (!vm.activeFilter) { return true }

            return actual[vm.activeFilter];
        }




    }
})();


