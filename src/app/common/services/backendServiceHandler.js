'use strict';

/* @ngInject */
var BackendServiceHandler = function ($q, $log, $injector, Configuration) {
    var backendHandler = {
        request: function (config) {
            var map = [];
            
            map = Configuration.urls;

            var url = config.url;

            if (!_.startsWith(url, '/')) {
                url = '/' + url;
            }

            for (var x in map) {
                if (_.startsWith(url, map[x].url)) {
                    var target = url.replace(map[x].url, map[x].target);
                    $log.info('Mapping ' + url + ' to ' + target);
                    config.url = target;
                    break;
                }
            }
            return config;
        },
        responseError: function (responseError) {
            if (responseError.status === 401 || responseError.status === 403) {
                var session = $injector.get('SessionService');
                if (session.isAuthenticated()) {
                    $log.warn('Session invalid/expired ');
                    session.logout();
                }
            } else {
                $log.error('Response error ', responseError);
            }
            return $q.reject(responseError);
        }
    };
    return backendHandler;

};

angular.module('house-lending.common.services')
    .service('backendServiceHandler', BackendServiceHandler)
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('backendServiceHandler');
    }]);
