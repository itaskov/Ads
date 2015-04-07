'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://localhost:1337');
app.constant('pageSize', 2);

app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
            // Authorization check: anonymous site visitors cannot access user routes
            $location.path("/");
        }
    });
});

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'app/templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'app/templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'app/templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'app/templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });


    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});