// Wrap the Controller declaration in an IFFE
// This will avoid creating another varible, CustomersController
// In the global namespace.
(function customersControllerIIFE(data){

  // Controller
  var CustomersController = function($scope){
    $scope.sortBy = "name";
    $scope.reverse = false;

    $scope.doSort = function(propName){
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };

    $scope.customers= data;
  };

 // Prevent the minifier from breaking dependency injection.
 CustomersController.$inject = ['$scope'];

 // The Controller is part of the module.
 angular.module('customersApp').controller('customersController', CustomersController);

})(customerData);
