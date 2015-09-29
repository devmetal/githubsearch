'use strict';

let angular = require('angular');

angular.module('Hub.Services', [])
  .service('PageService', require('./Page.srv'))
  .service('GithubService', require('./Github.srv'));
