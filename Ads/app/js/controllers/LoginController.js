'use strict';

app.controller('LoginController', function ($scope, $rootScope, $location, notifyService) {

    $scope.login = function (userData) {
        $scope.authService.login(userData,
                function success() {
                    notifyService.showInfo("Login successful");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Invalid login", err);
                }
            );
        };
    }
);
