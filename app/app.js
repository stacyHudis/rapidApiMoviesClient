'use strict';

function RouterConfig ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
      .when('/', {
        templateUrl: 'views/search-view.html',
        controller: 'SearchController',
        controllerAs: 'vm'
      })
      .when('/search', {
          templateUrl: 'views/results-view.html',
          controller: 'MoviesListController',
          controllerAs: 'moviesCtlr',
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieController',
        controllerAs: 'movieCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
}
//
angular.module('myApp', ['ngRoute'])
    .config(RouterConfig);
