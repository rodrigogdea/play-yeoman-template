'use strict';

/**
 * @ngdoc overview
 * @name paolaCreacionesApp
 * @description
 * # paolaCreacionesApp
 *
 * Main module of the application.
 */
angular
  .module('paolaCreacionesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/api/hello',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
