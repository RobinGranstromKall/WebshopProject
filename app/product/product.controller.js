angular.module("product").
controller("productController", ["$scope", "productService", "categoryService", function($scope, productService, categoryService) {
    categoryService.getCategories().then(function (response) {
        var categories = response.data;
        productService.getProducts().then(function (response) {
            var products = response.data;
            angular.forEach(products, function (product) {
                angular.forEach(categories, function (category) {
                    if (product.categoryid == category.id) {
                        product.categoryName = category.name;
                    }
                })
            });
            $scope.products = products;
        });
    });
}]);