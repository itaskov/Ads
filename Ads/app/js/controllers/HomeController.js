﻿'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('HomeController', function ($scope, adsService, notifyService, pageSize) {

    $scope.adsParams = {
        'startPage': 1,
        'pageSize': pageSize
    };

    $scope.reloadAds = function () {
        adsService.getAds(
            null,
            function success(data) {
                $scope.ads = data;
            },
            function error(err) {
                notifyService.showError("Cannot load ads", err);
            }
        );
    };

    $scope.reloadAds();

    }
);
