'use strict';

var AdvertisementListService = function ($resource, $q, AdvertisementListModel) {
    this.AdvertisementListModel = AdvertisementListModel;
    this.$resource = $resource;
    this.$q = $q;


    // backend call to fetch records
    this.getAdvertisements = function () {
        var self = this;
        var deferred = self.$q.defer();


        self.$resource('/api/advertisements').query().$promise.then(
            function (json) {
                self.AdvertisementListModel.populateAdvertisementModel(json);
                deferred.resolve(self.AdvertisementListModel);
            },
            function (error) {
                deferred.reject(error);
            }
        );
        return deferred.promise;
    };
};

angular.module('house-lending.common.services')
    .service('AdvertisementListService', AdvertisementListService);

