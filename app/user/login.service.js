angular.module("login").factory("loginService",["$http", function ($http) {
    var isLoggedIn = false;
    var loggedInUser = [];

    return {
        login: function (user) {

            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login",user).then(function successCallback(response) {
                if(response.status == 200){
                    loggedInUser = response.data;
                    loggedInUser.fullName = loggedInUser.firstName + " " + loggedInUser.lastName;
                    isLoggedIn = true;
                }
            }, function errorCallback(response) {

            });

        },
        isLoggedIn: function () {
            return isLoggedIn;
        },
        logout: function () {
            isLoggedIn = false;
            loggedInUser = null;
        },
        createNewUser: function (user) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer", user);
        },
        getUser: function () {
            return loggedInUser;
        }
    };
}]);