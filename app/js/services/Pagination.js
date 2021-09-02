const PAGE_SIZE = 10;

function PageService() {
    // service definition
    let PageService = {};

    PageService.GetPager = (totalItems, currentPage, pageSize)=> {

        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || PAGE_SIZE;

        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage, endPage;
        if (totalPages <= PAGE_SIZE) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = PAGE_SIZE;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // create an array of pages to ng-repeat in the pager control
        let pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            pages: pages
        };
    };

    return PageService;
}

angular.module('myApp')
    .factory('PageService', PageService);