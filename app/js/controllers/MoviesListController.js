(function() {
    'use strict';
    class MoviesListController {
        constructor(SearchService, PageService, $route, $scope, $q, $location, $window) {
            this.$window = $window;
            this.$location = $location;
            this.pageService = PageService;
            this.$q = $q;
            debugger;
            this.title = $location.search();
            this.searchService = SearchService;
            this.pager = {};
            this.init();

        }

        async init(){
            await this.getMovieByTitle( 1);
        }

        onMovieClick (movie){
            let id = _.get(movie, 'imdbID');
            this.$window.location = this.$window.location.origin + '#/movie/' + id;
        }

        showBusy(promises) {
            this.isBusy = {
                promise:  this.$q.all(promises),
                backdrop: true
            };
        }

        initController() {
            // initialize to page 1
            debugger;
            this.setPage(1);
        }

        setPage(page) {
            if (page < 1 || page > this.pager.totalPages) {
                return;
            }

            // get pager object from service
            this.pager = this.pageService.GetPager(this.totalResults, page);

            // get current page of items
            this.items = this.movies;
        }

        async getMovieByTitle(page) {
            let promise = this.searchService.getMovieByTitle(this.title, page);
            this.showBusy([promise]);
            let res = await promise;
            this.movies = res.Search;
            this.totalResults = res.totalResults
            this.setPage(page);
            // this.$window.location = this.$window.location.origin + '#/search?s=' + title;
        }
    }

    MoviesListController.$inject = [
        'SearchService',
        'PageService',
        '$route',
        '$scope',
        '$q',
        '$location',
        '$window'
    ];

    angular.module('myApp').controller('MoviesListController', MoviesListController);

})();

