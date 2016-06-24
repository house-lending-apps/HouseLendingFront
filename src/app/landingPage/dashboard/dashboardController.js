'use strict';

var DashboardController = function (AdvertisementListService /*,advertisementData*/) {
    var vm = this;
    // Data is already loaded before this component is loaded
    //vm.advertisements = advertisementData;
    vm.advertisements = [];
    vm.AdvertisementListService = AdvertisementListService;

    //TODO: Init function, can be replaced with the resolve later
    vm.init();
};

DashboardController.prototype.init = function () {
    var self = this;
    self.AdvertisementListService.getAdvertisements()
        .then(function (advertisementsObject) {
            //success scenario
            console.log(JSON.stringify(advertisementsObject.advertisements));
            self.advertisements = advertisementsObject.advertisements;
        }, function (error) {
            //failure scenario
            console.log(error);
        });
};

DashboardController.prototype.getAdvertisementKeys = function (object) {
    return Object.keys(object);
};

angular.module('house-lending.dashboard')
    .controller('DashboardController', DashboardController);
