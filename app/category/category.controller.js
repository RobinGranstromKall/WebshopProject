angular.module("category").controller("categoryController", ["$scope", "$location", "categoryService",
    function ($scope, $location, categoryService) {
        categoryService.getCategories().then(function (response) {
            var categories = response.data;
            angular.forEach(categories, function (category) {
                categories.push(category)
            });
            console.log(categories)
        });

    }]);