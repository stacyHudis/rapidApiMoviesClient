function SearchService ($http) {
  let SearchService = {};

  //Get Movie by Title
  SearchService.getMovieByTitle = async (title, page) => {
    let res = await $http.get(`http://localhost:3000/api/movies/?s=${title.s}&page=${page}`);

    return res.data.notes;
  };

  //Get Movie by Id
  SearchService.getMovieByID = async (id) => {
    let res = await $http.get(`http://localhost:3000/api/movies/`+ id);

    return res.data.notes;
  };

  return SearchService;
}

angular.module('myApp')
.factory('SearchService', SearchService);
