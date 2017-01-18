var app = angular.module("myApp", ['ngRoute']);
//app.controller('MainCtrl',function($scope){})


app.config(['$routeProvider',function($routeProvider, $routeParams) {
    $routeProvider
    .when("/GetData", {
        templateUrl : "Features/GetData.html",
        controller : "dataController"
    })
    .when("/AddData", {
        templateUrl : "Features/AddData.html",
        controller : "AddController"
    })
    .when("/UpdateData/:id", {
        templateUrl : "Features/UpdateData.html",
        controller : "updateController"
    })
   
}]);
