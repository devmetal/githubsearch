'use strict';

let angular = require('angular');

angular.module('Hub.Controllers', [])
  .controller('HomeController', require('./Home.cnt'))
  .controller('ListController', require('./List.cnt'))
  .controller('IssuesController', require('./Issues.cnt'));
