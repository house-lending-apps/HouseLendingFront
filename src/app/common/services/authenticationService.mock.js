/*eslint-env jasmine */
/*global module:false, inject:false */
'use strict';

/* @ngInject */
var config = function ($provide) {
    /*eslint-disable angular/function-type*/
    $provide.decorator('AuthenticationService', ['$delegate', 'AuthenticationServiceMock',
        function ($delegate, ServiceMock) {
            ServiceMock.mock();
            return $delegate;
        }
    ]);
    /*eslint-enable angular/function-type*/
};

/* @ngInject */
var AuthenticationServiceMock = function ($httpBackend) {

    var mockData = {
        'user': 'test@test.com',
        'password': 'secret',
        'authMethod': 'password'
    };

    var statusCode = 200;

    return {
        mock: function () {
            $httpBackend.whenGET(/api\/authenticate$.*/)
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
    .factory('AuthenticationServiceMock', AuthenticationServiceMock);
