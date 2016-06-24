'use strict';

//config needs its own module for unit testing to work with injected RunctimeConfiguration
angular.module('house-lending.common.services')
    .service('Configuration', Configuration);

/* @ngInject */
function Configuration($injector, $log) {
    var defaultConfig = {
        standalone: false,
        session: {
            idle: 300,
            timeout: 60
        },
        urls: []
    };
    var runtimeConfiguration;
    try {
        runtimeConfiguration = $injector.get('RuntimeConfiguration');
    } catch (e) {
        $log.warn('No RuntimeConfiguration');
    }

    var config = angular.extend({}, defaultConfig, runtimeConfiguration);
    if (config.logging.debug) {
        $log.info('RuntimeConfiguration loaded', config);
    }
    return config;
}
