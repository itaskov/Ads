'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('HomeController', function ($scope, adsService, notifyService, pageSize) {

    $scope.adsParams = {
        'startPage': 1,
        'pageSize': pageSize
    };

    $scope.loading = false;
    $scope.reloadAds = function () {
        adsService.getAds(
            $scope.adsParams,
            function success(data) {
                $scope.ads = data;
                $scope.loading = true;
            },
            function error(err) {
                notifyService.showError("Cannot load ads", err);
            }
        );
    };

    $scope.reloadAds();

    // This event is sent by RightSideBarController when the current category is changed
    $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
        $scope.adsParams.categoryId = selectedCategoryId;
        $scope.adsParams.startPage = 1;
        $scope.reloadAds();
    });

    $scope.$on("townSelectionChanged", function (event, selectedTownId) {
        $scope.adsParams.townId = selectedTownId;
        $scope.adsParams.startPage = 1;
        $scope.reloadAds();
    });


    }
);
