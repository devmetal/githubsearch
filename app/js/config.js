'use strict';

let angular = require('angular');

angular.module('Hub')
.value('Github',{
  apiUrl: 'https://api.github.com',
  apiSearch: (keyword) => `/search/repositories?q=${keyword}`,
  apiIssues: (user, repo) => `/search/issues?q=repo:${user}/${repo}`
})
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
