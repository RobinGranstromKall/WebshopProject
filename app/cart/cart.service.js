angular.module("cart").factory("cartService", ["$http", function ($http) {
    return {
        sendOrder: function (cart, customer) {
            var cartList = [];
            angular.forEach(cart, function (cartItem) {
                cartList.push({
                    productId: cartItem.id,
                    quantity: cartItem.amount
                })
            });

            var order = {
                customerId: customer.customerId,
                products: cartList
            };
            return $http.post("http://nackbutik.azurewebsites.net/api/order", order);
        }

    }
}]);