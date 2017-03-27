var cart = [];
var cartComplete = [];
var totalAmount = 0;
var totalValue = 0;
var cartAmount = 0;

angular.module("cart").controller("cartController", ["$scope", "$timeout", "$location", "cartService", "loginService",
    function ($scope, $timeout, $location, cartService, loginService) {


        $scope.addToCart = function (product) {
            var inCart = false;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].id == product.id) {
                    cart[i].amount += 1;
                    cart[i].unitsInStock -= 1;
                    totalAmount += 1;
                    cart[i].totalPrice = cart[i].amount * cart[i].price;
                    inCart = true;
                }
            }
            if (!inCart) {
                product.amount = 1;
                product.oUnitsInStock = product.unitsInStock;
                product.unitsInStock -= 1;
                product.totalPrice = product.price;
                totalAmount += 1;
                cart.push(product);
            }


        };
        $scope.sendOrder = function () {
            if (loginService.isLoggedIn() == true) {
                cartService.sendOrder(cart, loginService.getUser()).then(function successCallback(response) {
                    $scope.buyText = "Purchase Successful";
                    $timeout(function () {
                        cartComplete = cart;
                        cart = [];
                        cartAmount = totalAmount;
                        totalAmount = 0;
                        $location.url("/cart-complete")
                    }, 2000);

                }, function errorCallback(response) {
                    $scope.buyText = "Something went Wrong"
                })
            } else {
                $location.url("/login")
            }

        };
        $scope.cartExist = function () {
            return cart.length != 0;
        };
        $scope.removeProduct = function (product) {
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].id == product.id) {
                    totalAmount -= product.amount;
                    cart.splice(i, 1)
                }
            }
        };
        $scope.setProductAmount = function (product, amount) {
            if (amount != undefined) {
                for (var i = 0; i < cart.length; i++) {
                    if (cart[i].id == product.id) {
                        totalAmount -= product.amount;
                        totalAmount += amount;
                        cart[i].unitsInStock += product.amount;
                        cart[i].unitsInStock -= amount;
                        cart[i].amount = amount;
                        cart[i].totalPrice = cart[i].amount * cart[i].price;
                        return;
                    }
                }
            }
        };
        $scope.totalAmount = function () {
            return totalAmount;
        };
        $scope.cartAmount = function () {
            return cartAmount;
        };
        $scope.productInStock = function (product) {
            if (cart.length != 0) {
                angular.forEach(cart, function (cartItem) {
                    if (cartItem.id == product.id && cartItem.unitsInStock > 0) {
                        return true;
                    }
                })
            }
        };

        $scope.totalValue = function () {
            if (cart.length == 0) {
                return totalValue;
            } else {
                totalValue = 0;
                angular.forEach(cart, function (product) {
                    totalValue += product.totalPrice;
                });
                return totalValue;
            }
        };
        $scope.cart = cart;
        $scope.cartComplete = cartComplete;
    }]);