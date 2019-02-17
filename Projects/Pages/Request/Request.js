myApp.controller("Requestctrl", ["$scope", 'EmployeeService', function ($scope, EmployeeService) {
    $scope.value1 = true;
    $scope.Id = 1;
    $scope.Empid = 7060;
    console.log("Finally reached");
    $scope.layout = "we're here on the request";
    $scope.GetAccesses = function () {
        var id = 7060;
        var apiRoute = '/api/Employeedata/GetAllAccess';
        var access = EmployeeService.getAll(apiRoute);
            access.then(function (response) {
            $scope.accesses = response.data;
            console.log("output" + $scope.accesses[0].Id)
        }, function (error) {
            console.log("Error: " + JSON.stringify(error));
        });
    }
    $scope.GetAccesses(); 
    $scope.GetRequests = function () {
        var id = 7060;
        var apiRoute = '/api/Employeedata/GetRequest';
        var access = EmployeeService.getbyID(apiRoute,$scope.Empid);
        access.then(function (response) {
            $scope.requests = response.data;
            console.log("output" +JSON.stringify(response.data))
        }, function (error) {
            console.log("Error: " + JSON.stringify(error));
        });
    }
    $scope.GetRequests(); 

    $scope.submit = function () {
        var apiRoute = '/api/Employeedata/PostRequest';

        var param = {
            Empid: $scope.Empid,
            Reason: $scope.reason,
            Accessid:$scope.Id

        };

        var access = EmployeeService.post(apiRoute,param);
        access.then(function (response) {
            $scope.accesses = response.data;
            console.log("output of request" + JSON.stringify(response.data))
        }, function (error) {
            console.log("Error: " + JSON.stringify(error));
        });
    }

}]);


