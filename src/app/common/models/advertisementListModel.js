'use strict';


var AdvertisementListModel = function () {

    var factory = {};

    factory.advertisements = [];

    factory.populateAdvertisementModel = function (advertisements) {
        var self = this;
        angular.forEach(advertisements, function (advertisementData) {
            self.advertisements.push(mapAdvertisementToModel((advertisementData)));
        });
    };

    factory.getAdvertisements = function () {
        return this.advertisements;
    };

    factory.setAdvertisements = function (advertisements) {
        var self = this;
        self.advertisements = advertisements;
    };

    var mapAdvertisementToModel = function (advertisementData) {
        var advertisement = advertisementData;
        return advertisement;
    };

    return factory;

};

angular.module('house-lending.models')
    .factory('AdvertisementListModel', AdvertisementListModel);



