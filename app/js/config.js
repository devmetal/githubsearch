'use strict';

let angular = require('angular');

angular.module('Hub')
.run( [ '$rootScope', function ($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
      $rootScope.$previousState = from;
  });
}])
.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/home/list');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'HomeController as home'
    })
    .state('home.list', {
      url: '/list',
      templateUrl: 'home.list.html',
      controller: 'ListController as list'
    })
    .state('home.issues', {
      url: '/issues/:full_name',
      templateUrl: 'home.issues.html',
      controller: 'IssuesController as iss'
    })
}]);
