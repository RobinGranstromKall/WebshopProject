angular.module("product").
controller("productByCategoryController", ["$scope", "$routeParams", "productService", "categoryService", function($scope, $routeParams, productService, categoryService) {
    productService.getProducts().then(function (response) {
        var data = response.data;
        var products = [];
        angular.forEach(data, function (product) {
            if (product.categoryId == $routeParams.categoryID){
                products.push(product)
                console.log(product.categoryId)
            }
        });
        $scope.productsByCategory = products;
    })
}]);