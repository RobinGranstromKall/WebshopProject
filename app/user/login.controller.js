angular.module("login").controller("loginController", ["$scope", "$location", "loginService",
    function ($scope, $location, loginService) {
        $scope.text = "";
        $scope.login = function () {
            loginService.login($scope.email, $scope.password);
            if(!loginService.isLoggedIn()){
                $scope.text = "Incorrect Password or Email"
            } else {
                $location.path("/")
            }
        };
    }]);