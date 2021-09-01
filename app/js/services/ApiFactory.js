function ApiFactory () {
  var ApiFactory = {};

  ApiFactory.omdb = 'http://www.omdbapi.com/';
  ApiFactory.local = 'http://localhost:3020/';

  return ApiFactory;
}

angular.module('myApp')
  .factory('ApiFactory', ApiFactory);
