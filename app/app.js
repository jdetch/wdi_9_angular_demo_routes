// IIFE for the customers app
(function customersAppIIFE(){

// Defining the App module that will contain
// all our controllers, views, services and factories

// Our app depends on the ngRoute library
  var app = angular.module('customersApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
        {
          controller: 'customersController',
          templateUrl: 'app/views/customers.html'
        })
      .when('/songs',{
        controller: 'songsController',
        templateUrl: 'app/views/songs.html'
      })
      .otherwise({redirectTo: '/'});
  });
})();
