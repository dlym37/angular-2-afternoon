angular.module('devmtnTravel').controller('locationsCtrl', function($scope, bz){
    bz.getTravelInfo().then(function(response){
        $scope.locations = response.data;
    })
})