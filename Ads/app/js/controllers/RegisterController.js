'use strict';

app.controller('RegisterController', function ($scope, $location, townsService, notifyService) {
    $scope.userData = { townId: null };

    // TODO: load the towns in $scope (for the towns drop-down list)
    $scope.towns = townsService.getTowns();

    $scope.register = function (userData) {
        $scope.authService.register(userData,
            function success() {
                notifyService.showInfo("Registration successful")
                $location.path("/login");
            },
            function error(err) {
                notifyService.showError("User registration failed", err);
            }
        );
    };
}
);
