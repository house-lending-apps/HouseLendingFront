'use strict';


var AdvertisementBaseModel = function () {



    var Property = function () {
        return {
            address: new Address(),
            bedRooms: 0,
            bathRooms: 0,
            superBuiltUpArea: 0.0,
            buildUpArea: 0.0,
            carpetArea: 0.0,
            balconies: 0,
            parkingReserved: '',
            floorNo: '',
            facingDirection: '',
            availableFrom: '',
            propertyAge: '',
            availableFor: '',
            propertyPhotos: [new PropertyPhoto()]
        };

    };

    var Address = function () {
        return {
            addressLine1: '',
            addressLine2: '',
            postcode: '',
            townOrTaluka: '',
            city: '',
            state: '',
            country: ''
        };
    };

    var PropertyPhoto = function () {
        return {
            googleMapUrl: '',
            photoURL: '',
            title: '',
            caption: ''
        };

    };

    return {
        id: '',
        title: '',
        dateCreated: '',
        advertisementDetails: '',
        property: new Property()
    };

};




angular.module('house-lending.models')
    .factory('AdvertisementBaseModel', AdvertisementBaseModel);
