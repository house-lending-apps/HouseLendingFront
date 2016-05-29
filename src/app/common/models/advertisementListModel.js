'use strict';


var AdvertisementListModel = function (Advertisement) {
    this.Advertisement = Advertisement;
    this.advertisements = [];

    return this;
};

AdvertisementListModel.prototype.getAdvertisements = function () {
    return this.advertisements;
};

AdvertisementListModel.prototype.setAdvertisements = function (advertisements) {
    this.advertisements = advertisements;
};

AdvertisementListModel.prototype.populateAdvertisementModel = function (advertisements) {
    var self = this;
    angular.forEach(advertisements, function (advertisementData) {
        self.advertisements.push(mapAdvertisementToModel((advertisementData)));
    });
};

var mapAdvertisementToModel = function (advertisementData) {
    var advertisement = new this.Advertisement();

    // Considering that the advertisementData and model will be exactly similiar
    advertisement = advertisementData;

    return advertisement;
};

angular.module('house-lending.models')
    .factory('AdvertisementListModel', AdvertisementListModel);



