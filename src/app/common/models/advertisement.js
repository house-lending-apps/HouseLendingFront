'use strict';


var Advertisement = function () {
    this.id = '';
    this.title = '';
    this.dateCreated = '';
    this.advertisementDetails = '';
    this.property = new Property();

    return this;
};


var Property = function () {
    this.address = new Address();
    this.bedRooms = 0;
    this.bathRooms = 0;
    this.superBuiltUpArea = 0.0;
    this.buildUpArea = 0.0;
    this.carpetArea = 0.0;
    this.balconies = 0;
    this.parkingReserved = '';
    this.floorNo = '';
    this.facingDirection = '';
    this.availableFrom = '';
    this.propertyAge = '';
    this.availableFor = '';
    this.propertyPhotos = [new PropertyPhoto()];
};

var Address = function () {
    this.addressLine1 = '';
    this.addressLine2 = '';
    this.postcode = '';
    this.townOrTaluka = '';
    this.city = '';
    this.state = '';
    this.country = '';
};

var PropertyPhoto = function () {
    this.googleMapUrl = '';
    this.photoURL = '';
    this.title = '';
    this.caption = '';
};


angular.module('house-lending.models')
    .factory('Advertisement', Advertisement);
