(function () {
    'use strict';

    class SearchController {
        constructor($location, $window) {
            this.$window = $window;
            this.$location = $location;
        }

        //Redirect to Movie Results page
        onSearchClick(title) {
            this.$window.location = this.$window.location.origin + '#/search?s=' + title;
        }
    }

    SearchController.$inject = [
        '$location',
        '$window'
    ];

    angular.module('myApp').controller('SearchController', SearchController);
})();


