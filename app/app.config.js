angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/product/product.template.html",
            controller: "productController"
        })
        .otherwise("/");
    $locationProvider.html5Mode(true);
}]);