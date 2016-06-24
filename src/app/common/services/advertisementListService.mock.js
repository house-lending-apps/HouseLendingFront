/*eslint-env jasmine */
/*global module:false, inject:false */
'use strict';

/* @ngInject */
var config = function ($provide) {
    /*eslint-disable angular/function-type*/
    $provide.decorator('AdvertisementListService', ['$delegate', 'AdvertisementListServiceMock',
        function ($delegate, ServiceMock) {
            ServiceMock.mock();
            return $delegate;
        }
    ]);
    /*eslint-enable angular/function-type*/
};

/* @ngInject */
var AdvertisementListServiceMock = function ($httpBackend) {

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
    }, {
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

    var statusCode = 200;

    return {
        mock: function () {
            $httpBackend.whenGET(/api\/advertisements$.*/)
                .respond(statusCode, mockData);
        },
        setMocks: function (newStatusCode, newMockData) {
            statusCode = newStatusCode;
            mockData = newMockData;
        }
    };
};

angular.module('house-lending.common.services')
    .config(config)
    .factory('AdvertisementListServiceMock', AdvertisementListServiceMock);
