angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/products", {
            templateUrl: "app/product/product.template.html",
            controller: "productController"
        })
        .when("/products/:categoryID", {
            templateUrl: "app/product/product.template.html",
            controller: "productController"
        })
        .otherwise("/products");
    $locationProvider.html5Mode(true);
}]);