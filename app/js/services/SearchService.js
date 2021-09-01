function SearchService ($http, $route, ApiFactory) {
  var SearchService = {};

  SearchService.loading = false;

  SearchService.getMovieByTitle = async (title, page) => {
  debugger;
    let res = await $http.get(`http://localhost:3000/api/movies/?s=${title.s}&page=${page}`);

    return res.data.notes;
  };

  SearchService.getMovieByID = async (id) => {
    debugger;
    let res = await $http.get(`http://localhost:3000/api/movies/`+ id);

    return res.data.notes;
  };

  return SearchService;
}

angular.module('myApp')
.factory('SearchService', SearchService);
