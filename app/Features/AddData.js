angular.module("myApp").controller('AddController',function($scope,dataService,$location){
var data;
$scope.books={};  
$scope.addDetails=function()
    {       
        dataService.Post($scope.books).then(function(response){  
        $location.path('/GetData');
        });
    };
});