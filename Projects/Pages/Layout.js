myApp.controller("Layoutctrl", ["$scope", 'EmployeeService', function ($scope, EmployeeService) {

    console.log("Finally reached");
    $scope.layout = "we're here on the layout";

}]);