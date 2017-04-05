'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
    'ngMaterial',
    'rzModule'
    
]);
/*config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  /!*$routeProvider.otherwise({redirectTo: '/view1'});*!/
}]);*/

app.config(function ($routeProvider) {
  $routeProvider
      .when('/views/1', {
        controller: 'MyController',
        templateUrl: 'view1/view1.html'
      })
      .when('/views/2', {
          controller: 'MyController',
          templateUrl: 'view2/view2.html'
      })
      .when('/views/file-upload', {
          controller: 'MyController',
          templateUrl: 'file-upload/file-upload.html'
      })
      .otherwise({
        redirectTo: '/'
      });
});
