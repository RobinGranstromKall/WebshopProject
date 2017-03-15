angular.module("app").
controller("appController", ["$scope", "appService",  function($scope, appService) {
}]);


// angular.module("app").
// controller("appController", ["$scope", "appService", "appServiceFactory", function($scope, appService, appServiceFactory) {
//     $scope.adderaNumbers = function () {
//         $scope.svar = appService.addNumbers($scope.tal1, $scope.tal2)
//     };
//     $scope.subNumbers = function () {
//         $scope.svar = appServiceFactory.subNumbers($scope.tal1, $scope.tal2)
//     };
// }]);
