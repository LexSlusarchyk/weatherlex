(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('CapitalsList', capitalsList);

    capitalsList.$inject = ['Capital', '$localStorage', '$q', '$http'];
    /* @ngInject */
    function capitalsList(Capital, $localStorage, $q, $http) {

        function CapitalsList(params) {
            this.data = [];

            this.init(params);
        }

        CapitalsList.prototype.init = function() {

        };


        CapitalsList.prototype.getList = function() {
            var defered = $q.defer();
            var _this = this;

            if ($localStorage.capitals) {
                this.addList($localStorage.capitals);
            } else {
                $http.get('content/capitals.json').then(function(response){
                    _this.addList(response.data.capitals);
                    $localStorage.capitals = _this.data;
                    defered.resolve(_this.data);
                });
            }

            return defered.promise;
        };

        CapitalsList.prototype.add = function(options) {
            var capitalToAdd = new Capital(options);
            this.data.push(capitalToAdd);
            this.updateStorage();

        };

        CapitalsList.prototype.addSilently = function(options) {
            if (!_.isObject(options)) {
                options = {
                    title: options
                }
            }

            var capitalToAdd = new Capital(options);
            this.data.push(capitalToAdd);
        };

        CapitalsList.prototype.addList = function(capitalsList) {
            _.each(capitalsList, function(elem) {
                this.addSilently(elem);
            }, this);
        };

        CapitalsList.prototype.remove = function(item) {
            var index = this.data.indexOf(item);
            this.data.splice(index, 1);
            this.updateStorage();
        };

        CapitalsList.prototype.reset = function() {
            var _this = this;
            this.data.length = 0;

            $http.get('content/capitals.json').then(function(response){
                _this.addList(response.data.capitals);
                $localStorage.capitals = _this.data;
            });
        };

        CapitalsList.prototype.updateStorage = function() {
            $localStorage.capitals = this.data;
        };

        return CapitalsList;
    }
})();