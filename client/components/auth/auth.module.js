'use strict';

angular.module('angularApp.auth', [
  'angularApp.constants',
  'angularApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
