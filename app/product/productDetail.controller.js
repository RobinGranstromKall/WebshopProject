angular.module("product").
controller("productDetailController", ["$scope", "$filter", "$location", "$routeParams", "productService",
    function($scope, $filter, $location, $routeParams, productService) {
        productService.getProductsById($routeParams.Id).then(function (response) {
            $scope.product = response.data;
        });
        $scope.inStock = function () {
            return $scope.product.unitsInStock != 0;
        }
}]);