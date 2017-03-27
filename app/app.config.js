angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/products", {
            templateUrl: "app/product/product.template.html",
            controller: "productController"
        })
        .when("/product/:Id", {
            templateUrl: "app/product/productDetail.template.html",
            controller: "productDetailController"
        })
        .when("/cart", {
            templateUrl: "app/cart/cart.template.html",
            controller: "cartController"
        })
        .when("/cart-complete", {
            templateUrl: "app/cart/cartComplete.template.html",
            controller: "cartController"
        })
        .when("/products/:categoryID", {
            templateUrl: "app/product/product.template.html",
            controller: "productController"
        })
        .when("/login", {
            templateUrl: "app/user/login.template.html",
            controller: "loginController"
        })
        .when("/createUser", {
            templateUrl: "app/user/createUser.template.html",
            controller: "loginController"
        })
        .otherwise("/products");
    $locationProvider.html5Mode(true);
}]);