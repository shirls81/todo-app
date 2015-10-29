angular
  .module('TodoApp', [
    'ngRoute',
    'LoginController',
  ])

  .config([
    '$routeProvider',
      function($routeProvider) { 'use strict';
      console.log('hey here I am');
      $routeProvider
      .when('/login', {
      templateUrl: '/partials/login-controller.html',
      controller: 'LoginController',
    })
    .otherwise('/login');
  },
]);
