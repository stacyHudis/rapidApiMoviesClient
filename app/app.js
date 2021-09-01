'use strict';

// // Declare app level module which depends on views, and core components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);


function RouterConfig ($routeProvider, $locationProvider) {
  debugger;
  debugger;
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

// var myApp = angular.module('myApp', ['ui.router']);
//
// myApp.config(function($stateProvider, $urlRouterProvider) {
//     debugger;
//     $stateProvider.state("main", {
//         url: "/",
//         template: './views/search-view.html',
//         controller: 'SearchController',
//         controllerAs: 'vm'
//     });
//
//     $stateProvider.state("search", {
//         url: "/search",
//         templateUrl: './views/results-view.html',
//         controller: 'SearchController',
//         controllerAs: 'vm',
//     });
//     //
//     // $stateProvider.state("movieDetails", {
//     //     url: "/populares/:movieId",
//     //     templateUrl: "./peliculas/populares/movieDetails/movieDetails.html",
//     //     controller: "movieDetailsController"
//     // });
//     //
//     // $stateProvider.state("newfilm", {
//     //     url: "/new",
//     //     templateUrl: "./new/new.html",
//     //     controller: "newController"
//     // });
//     //
//     // $stateProvider.state("topRated", {
//     //     url: "/topRated",
//     //     templateUrl: "./peliculas/topRated/topRated.html",
//     //     controller: "topRatedController"
//     // }),
//         $stateProvider.state("otherwise", { url: "/" });
//     //
//     $urlRouterProvider.otherwise("/");
// });

//
angular.module('myApp', ['ngRoute'])
    .config(RouterConfig);
