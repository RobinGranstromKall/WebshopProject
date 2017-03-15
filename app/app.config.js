angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/products", {
            templateUrl: "app/product/product.template.html",
            controller: "productController"
        })
        .when("/products/:categoryID", {
            templateUrl: "app/product/productByCategory.template.html",
            controller: "productByCategoryController"
        })
        .otherwise("/products");
    $locationProvider.html5Mode(true);
}]);