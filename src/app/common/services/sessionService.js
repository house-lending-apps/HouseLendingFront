'use strict';

var SessionService = function (LoggerService) {
    this.loggerService = LoggerService;

};

SessionService.prototype.getCurrentUser = function () {
    return {
        'user': {
            'id': 'user1',
            'name': 'User one'
        },
        'roles': ['admin'],
        'country': 'dk',
        'tokenDetails': {
            'token': 'TestMOCKEDTOKEN',
            'validTill': ''
        }

    };
};

SessionService.prototype.isAuthenticated = function () {
    this.loggerService.log('checking if isAuthenticated');
    return true;
};

SessionService.prototype.logout = function () {
    this.loggerService.log('Logout !!!');
};

angular.module('house-lending.common.services')
    .service('SessionService', SessionService);
