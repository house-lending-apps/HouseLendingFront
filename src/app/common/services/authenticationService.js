'use strict';

var AuthenticationService = function ($resource, $q, $timeout) {
    this.$resource = $resource;
    this.$q = $q;
    this.$timeout = $timeout;

    var mockUsers =
        [{
            'user': 'test@test.com',
            'password': 'secret',
            'authMethod': 'password'
        },
            {
                'user': 'mahesh@test.com',
                'password': 'secret',
                'authMethod': 'password'
            }
        ];

    this.validateUser = function (user, password, authMethod) {
        var self = this;
        var deferred = self.$q.defer();
        var requestParameters = {
            'user': user,
            'password':password,
            'authMethod':authMethod};

        self.$resource('/api/authenticate', requestParameters).query().$promise.then(
            function (json) {
                deferred.resolve(json);
            },
            function (error) {
                deferred.reject(error);
            }
        );

        return deferred.promise;
    };

    this.validateUserMocked = function (user, password, authMethod) {
        var self = this;
        var deferred = self.$q.defer();
        var requestParameters = {
            'user': user,
            'password':password,
            'authMethod':authMethod
        };

        self.$timeout(function () {

            var object = _.find(mockUsers, requestParameters);

            if (object !== undefined) {
                deferred.resolve(object);
            } else {
                deferred.reject('User is not authenticated');
            }
        }, 500);

        return deferred.promise;
    };


};

angular.module('house-lending.common.services')
    .service('AuthenticationService', AuthenticationService);

