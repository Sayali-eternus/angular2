angular.module("myApp").controller('dataController',function($scope,dataService){
$scope.data=[];
    $scope.GetData=function()
    {
        dataService.Get().then(function(response){
        $scope.data=response.data; });
    }
$scope.GetData();

$scope.DelData=function(delid)
   {
     $scope.GetData();
     dataService.Delete(delid).then(function(response){
     $scope.GetData();
     });    
   };
});

 