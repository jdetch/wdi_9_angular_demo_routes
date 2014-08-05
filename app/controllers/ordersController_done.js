(function ordersControllerIIFE(data){

  var OrdersController = function($scope, $routeParams){
    var customerId = $routeParams.customerId;
    $scope.orders = null;

    // private function, not available outside of IIFE
    function init(){
      // Search for the customer by id
      for(var i=0, len=$scope.customers.length; i < len; i++){
        if($scope.customers[i].id == parseInt(customerId)){
          $scope.orders = $scope.customers[i].orders;
          break;
        }
      }
    }

    $scope.customers= data;

    init();
  };

  // Prevent the minifier from breaking dependency injection.
  OrdersController.$inject = ['$scope', '$routeParams'];

  // The Controller is part of the module.
  angular.module('customersApp').controller('ordersController', OrdersController);

})(customerData);
