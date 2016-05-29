'use strict';

var AdvertisementListService = function ($resource, $q, $timeout, AdvertisementListModel) {
    this.AdvertisementListModel = AdvertisementListModel;
    this.$resource = $resource;
    this.$q = $q;
    this.$timeout = $timeout;

    var mockData = [{
        'id': '1',
        'title': 'Test1',
        'dateCreated': '28-05-2016 11:21:00',
        'advertisementDetails': 'This flat is very good with balcony',
        'property': {
            'address': {
                'addressLine1': 'Address Line 1',
                'addressLine2': 'Address Line 2',
                'postcode': '411046',
                'townOrTaluka': 'Chikli',
                'city': 'Pune',
                'state': 'Maharashtra',
                'country': 'India'
            },
            'bedRooms': 2,
            'bathRooms': 2,
            'superBuiltUpArea': 123.00,
            'buildUpArea': 150.00,
            'carpetArea': 150.00,
            'balconies': 1,
            'parkingReserved': 'Reserved Parking for one car and one bike',
            'floorNo': '5',
            'facingDirection': 'Garden Facing',
            'availableFrom': '29-05-2016',
            'propertyAge': '3 Years Old',
            'availableFor': 'Family Only',
            'propertyPhotos': [
                {
                    'googleMapUrl': '',
                    'photoURL': '',
                    'title': '',
                    'caption': ''
                }
            ]
        }
    },{
        'id': '2',
        'title': 'Test2',
        'dateCreated': '28-05-2016 11:21:00',
        'advertisementDetails': 'This flat is very good with balcony',
        'property': {
            'address': {
                'addressLine1': 'Address Line 1',
                'addressLine2': 'Address Line 2',
                'postcode': '411046',
                'townOrTaluka': 'Chikli',
                'city': 'Pune',
                'state': 'Maharashtra',
                'country': 'India'
            },
            'bedRooms': 2,
            'bathRooms': 2,
            'superBuiltUpArea': 123.00,
            'buildUpArea': 150.00,
            'carpetArea': 150.00,
            'balconies': 1,
            'parkingReserved': 'Reserved Parking for one car and one bike',
            'floorNo': '5',
            'facingDirection': 'Garden Facing',
            'availableFrom': '29-05-2016',
            'propertyAge': '3 Years Old',
            'availableFor': 'Family Only',
            'propertyPhotos': [
                {
                    'googleMapUrl': '',
                    'photoURL': '',
                    'title': '',
                    'caption': ''
                }
            ]
        }
    },
        {
            'id': '3',
            'title': 'Test3',
            'dateCreated': '28-05-2016 11:21:00',
            'advertisementDetails': 'This flat is very good with balcony',
            'property': {
                'address': {
                    'addressLine1': 'Address Line 1',
                    'addressLine2': 'Address Line 2',
                    'postcode': '411046',
                    'townOrTaluka': 'Chikli',
                    'city': 'Pune',
                    'state': 'Maharashtra',
                    'country': 'India'
                },
                'bedRooms': 2,
                'bathRooms': 2,
                'superBuiltUpArea': 123.00,
                'buildUpArea': 150.00,
                'carpetArea': 150.00,
                'balconies': 1,
                'parkingReserved': 'Reserved Parking for one car and one bike',
                'floorNo': '5',
                'facingDirection': 'Garden Facing',
                'availableFrom': '29-05-2016',
                'propertyAge': '3 Years Old',
                'availableFor': 'Family Only',
                'propertyPhotos': [
                    {
                        'googleMapUrl': '',
                        'photoURL': '',
                        'title': '',
                        'caption': ''
                    }
                ]
            }
        }];

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

    this.getAdvertisementsMocked = function () {
        var self = this;
        var deferred = self.$q.defer();

        self.$timeout(function () {
            deferred.resolve(mockData);
        }, 1000);

        return deferred.promise;
    };


};

angular.module('house-lending.common.services')
    .service('AdvertisementListService', AdvertisementListService);

