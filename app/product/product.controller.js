angular.module("product").controller("productController", ["$scope", "$filter", "$location", "productService",
    function ($scope, $filter, $location, productService) {
        productService.getProducts().then(function (response) {
            var products = response.data;
            angular.forEach(products, function (product) {
                product.inStock = product.unitsInStock != 0;
            });
            $scope.products = products;
        });
        $scope.showDetail = function (id) {
            $location.path("/product/" + id);
        };
        $scope.inStock = function (stockAmount) {
            if (stockAmount != 0){
                return true;
            } else {
                return false;
            }
        };
        $scope.filterCategory = function (category) {
            $location.url("/");
            $scope.categoryFilter = category.id;
        };
    }]);