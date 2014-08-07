(function songsControllerIIFE(){

  var songsController = function($scope){

    $scope.songs = [
    {title: 'Let it be', artist: 'Beatles', duration: 180, price: 1.99},
    {title: 'Hello', artist: 'Tina Turner', duration: 120, price: 2.99},
    {title: 'Another song', artist: 'Johnny Cash', duration: 140, price: 3.99},
    {title: 'Let it be', artist: 'Journey', duration: 190, price: 4.99}
    ];

    $scope.sortBy = "title";
    $scope.reverse = false;

    $scope.doSort = function(propName){
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  }; // end of the SongsController definition

  // prevent minification problems
  songsController.$inject = ['$scope'];

  // Register this
  angular.module('customersApp').controller('songsController', songsController);

})();
