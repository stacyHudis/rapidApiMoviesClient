(function() {
  'use strict';
  class MovieController {
    constructor(SearchService, $route, $scope, $q) {
    debugger;
     let movieCtrl = this;
      this.movie = SearchService.movie;
      this.loading = SearchService.loading;
      this.$scope = $scope;
      this.$q = $q;
      this.searchService = SearchService;
      movieCtrl.title = "ok";
      this.id = $route.current.params;
      this.init();

      debugger;
      this.afterCall = "AFTER CALL";
    }

    async init(){
      await this.getMovieById(this.id);
    }

    showBusy(promises) {
      this.isBusy = {
          promise:  this.$q.all(promises),
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
        '$scope',
        '$q'
    ];

    angular.module('myApp').controller('MovieController', MovieController);

})();




