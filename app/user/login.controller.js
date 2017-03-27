angular.module("login").controller("loginController", ["$scope", "$location", "loginService",
    function ($scope, $location, loginService) {
        $scope.text = "";
        $scope.login = function () {
            var user = {
            email: $scope.user.email,
            password: $scope.user.password
            };
            loginService.login(user).then(function () {
                if(!loginService.isLoggedIn()){
                    $scope.loginText = "Incorrect Password or Email"
                } else {
                    history.back();
                }
            })
        };
        $scope.isLoggedIn = function () {
            return loginService.isLoggedIn()
        };
        $scope.createUser = function () {
            var newUser = {
                firstName: $scope.user.firstname,
                lastName: $scope.user.lastname,
                email: $scope.user.email,
                phone: $scope.user.phone,
                password: $scope.user.password,
                address: $scope.user.address,
                postalCode: $scope.user.postalcode,
                city: $scope.user.city
            };
            loginService.createNewUser(newUser).then(function successCallback (response) {
               $location.path("/login");
               $scope.userSuccess = "User Created. Log in Below"
            }, function errorCallback (response) {
                $scope.createText = "Something went wrong, try again"
            });
        };
        $scope.fullName = function () {
            return loginService.getUser().fullName;
        };
    }]);