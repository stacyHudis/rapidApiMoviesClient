(function () {
    'use strict';

    class MoviesListController {
        constructor(SearchService, PageService, $route, $q, $location, $window) {
            this.$window       = $window;
            this.$location     = $location;
            this.pageService   = PageService;
            this.searchService = SearchService;
            this.$q            = $q;
            //Get search movie title value from url
            this.title         = $location.search();
            //Initialize pager obj used for pagination
            this.pager = {};

            this.init();
        }

        //Get movie by Title
        async init() {
            await this.getMovieByTitle(1);
        }

        //Redirect to Movie details page
        onMovieClick(movie) {
            let id = _.get(movie, 'imdbID');

            //Redirect to Movie Details page
            this.$window.location = this.$window.location.origin + '#/movie/' + id;
        }

        showBusy(promises) {
            this.isBusy = {
                promise: this.$q.all(promises),
                backdrop: true
            };
        }

        setPage(page) {
            if (page < 1 || page > this.pager.totalPages) {
                return;
            }

            // set pager object from service
            this.pager = this.pageService.GetPager(this.totalResults, page);

        }

        async getMovieByTitle(page) {
            let promise = this.searchService.getMovieByTitle(this.title, page);
            this.showBusy([promise]);
            let res = await promise;

            //check if valid response present
            let responseObj = _.get(res, 'Response');
            if (responseObj === "True") {
                this.movies       = res.Search;
                this.totalResults = res.totalResults;
                this.noResponse   = false;

                this.setPage(page);
            } else {
                this.noResponse = true;
            }
        }
    }

    MoviesListController.$inject = [
        'SearchService',
        'PageService',
        '$route',
        '$q',
        '$location',
        '$window'
    ];

    angular.module('myApp').controller('MoviesListController', MoviesListController);
})();

