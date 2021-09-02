(function () {
    'use strict';

    class MovieController {
        constructor(SearchService, $route, $q) {
            this.movie         = SearchService.movie;
            this.loading       = SearchService.loading;
            this.$q            = $q;
            this.searchService = SearchService;

            //Get Route Param from url
            this.id            = $route.current.params;

            this.init();
        }

        //Get Movie by Id
        async init() {
            await this.getMovieById(this.id);
        }

        showBusy(promises) {
            this.isBusy = {
                promise: this.$q.all(promises),
                backdrop: true
            };
        }

        async getMovieById(id) {
            let promise = this.searchService.getMovieByID(id.id);
            this.showBusy([promise]);
            this.movie = await promise;
        }
    }

    MovieController.$inject = [
        'SearchService',
        '$route',
        '$q'
    ];

    angular.module('myApp').controller('MovieController', MovieController);

})();




