angular.module("login").factory("loginService",["$http", function ($http) {
    var isLoggedIn = false;
    return {
        login: function (email, password) {
            //phony service check
            if (email == "gk@gk.se" && password == "1234"){
                isLoggedIn = true
            } else {
                isLoggedIn = false;
            }
        },
        isLoggedIn: function () {
            return isLoggedIn;
        }
    };
}]);