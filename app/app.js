var DKWapp = angular.module('DKWapp', ['ngRoute']);
DKWapp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      // controller: 'navController',
      templateUrl: 'app/partials/malmo-oversikt.html'
    })
    .when('/pauli', {
      // controller: 'navController',
      templateUrl: 'app/partials/pauli.html'
    })
    .when('/ostra', {
      // controller: 'navController',
      templateUrl: 'app/partials/ostra/ostra_oversikt.html'
    })
    .when('/ostra_kapell', {
      // controller: 'navController',
      templateUrl: 'app/partials/ostra/ostra_kapell.html'
    })
    .when('/ostra_villa-hohog', {
      // controller: 'navController',
      templateUrl: 'app/partials/ostra/ostra_villa-hohog.html'
    })
    .when('/ostra_vedbacken', {
      // controller: 'navController',
      templateUrl: 'app/partials/ostra/ostra_vedbacken.html'
    })
    .when('/fosie', {
      // controller: 'navController',
      templateUrl: 'app/partials/fosie/fosie_oversikt.html'
    })
    .when('/fosie_personalhus', {
      // controller: 'navController',
      templateUrl: 'app/partials/fosie/fosie_personalhus.html'
    })
    .when('/fosie_kapell', {
      // controller: 'navController',
      templateUrl: 'app/partials/fosie/fosie_kapell.html'
    })
    .when('/limhamn', {
      // controller: 'navController',
      templateUrl: 'app/partials/limhamn.html'
    })
    .when('/villa-hohog', {
      // controller: 'navController',
      templateUrl: 'app/partials/villa-hohog.html'
    })
    .when('/help', {
      // controller: 'navController',
      templateUrl: 'app/partials/help.html'
    })
    .otherwise({ redirectTo: '/' });
}]);

// var controllers = {};
// controllers.SimpleController = function($scope) {
//   $scope.customers = [
//     { name: 'Dave Jones', city: 'Phoenix'},
//     { name: 'Jamie Riley', city: 'Atlanta' },
//     { name: 'Heedy Wahlin', city: 'Chandler' },
//     { name: 'Thomas Winter', city: 'Seattle' }
//   ];
//
//   // $scope.addCustomer = function() {
//   //   $scope.customers.push(
//   //     {
//   //         name: $scope.newCustomer.name,
//   //         city: $scope.newCustomer.city
//   //     });
//   // };
// };
//
// DKWapp.controller(controllers);
