angular.module("category").controller("categoryController", ["$scope", "$location", "categoryService",
    function ($scope, $location, categoryService) {
        categoryService.getCategories().then(function (response) {
            $scope.category =  response.data;
        });
        $scope.filterByCategory = function (id) {
            $location.path("products/" + id)

        }
    }]);