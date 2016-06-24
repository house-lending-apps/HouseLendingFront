'use strict';

var SessionService = function () {

};

SessionService.prototype.isAuthenticated = function() {
    console.log('checking if isAuthenticated');
    return true;
};

SessionService.prototype.logout = function() {
    console.log('Logout !!!');
};

angular.module('house-lending.common.services')
    .service('SessionService', SessionService);
