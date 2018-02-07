angular.module('devmtnTravel').service('bz', function( $http ) {
    this.getTravelInfo = function() {
      return $http({
        method: 'GET',
        url: 'https://practiceapi.devmountain.com/api/travel/travel-info'
      });
    };
  
    this.getPackageInfo = function() {
      return $http({
        method: 'GET',
        url: 'https://practiceapi.devmountain.com/api/travel/package-info'
      });
    };
  });