angular.module("myApp").controller("updateController",function($scope,dataService,$routeParams,$location){
$scope.id=$routeParams.id;
$scope.book={};
$scope.success=false;
    $scope.Getdata=function(id)
    {
         dataService.Getbyid($scope.id).then(function(response)
        {
            $scope.book=response.data;    
        }); 
    }
$scope.Getdata();
    $scope.GetDataindisplay=function()
    {
        dataService.Get().then(function(response){
         $scope.data=response.data; });
    }
$scope.update=function()
{
    dataService.updatebook($scope.book).then(function(data){
    if(data.status==200)
    {
           $location.path('/GetData');
    }
});
}
});
