(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('Capital', capital);

    capital.$inject = ['$http', '$rootScope'];
    /* @ngInject */
    function capital($http, $rootScope) {

        function Capital(params) {
            this.title = '';
            this.neutral = true;
            this.visited = false;
            this.going_to_visit = false;
            this.weather = null;

            this.init(params);
        }

        Capital.prototype.init = function(params) {
            if (!params) { return false; }

            if (params.title) { this.title = params.title; }
            if (params.neutral) { this.neutral = params.neutral; }
            if (params.visited) { this.visited = params.visited; }
            if (params.going_to_visit) { this.going_to_visit = params.going_to_visit; }

            this.getWeather();

        };

        Capital.prototype.getWeather = function() {
            var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
            var apiKey = '&units=imperial&APPID=7085df341a386f5108600db1a628c50e';
            var _this = this;

            $http.get(apiUrl + this.title + apiKey).then(function(response){
                _this.weather = response.data;
            });
        };

        Capital.prototype.toggleVisited = function () {
            this.visited = !this.visited;

            if (this.visited) {
                this.going_to_visit = false;
                this.neutral = false;
            }

            $rootScope.$emit('capital-updated');
        };

        Capital.prototype.togglePlanningToVisit = function () {
            this.going_to_visit = !this.going_to_visit;

            if (this.going_to_visit) {
                this.visited = false;
            }

            $rootScope.$emit('capital-updated');
        };

        return Capital;
    }
})();