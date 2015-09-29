'use strict';

require("babelify/polyfill");

let angular = require('angular');

require('angular-ui-router');
require('angular-animate');
require('angular-material');
require('angular-messages');

require('./controllers');
require('./services');
require('./templates');

let Hub = angular.module('Hub', [
  'Hub.Controllers',
  'Hub.Services',
  'templates',
  'ui.router',
  'ngMaterial',
  'ngAnimate',
  'ngMessages'
]);

require('./config');

window.Hub = Hub;
