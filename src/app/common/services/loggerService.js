'use strict';
var LoggerServiceConstants = {
    LOGGER_LEVEL : {
        'DEBUG': 'debug',
        'ERROR': 'error',
        'LOG': 'log'
    }
};

var LoggerService = function ($log) {
    var currentDateAndTime = function () {
        return 'Not Setup Yet ... ';
    };

    var debug = function (message) {
        $log.debug(currentDateAndTime().concat(message));
    };

    var log = function (message) {
        $log.log(currentDateAndTime().concat(message));
    };

    var error = function (message) {
        $log.log(currentDateAndTime().concat(message));
    };

    this.log = function (message, logLevel) {
        if (logLevel === LoggerServiceConstants.LOGGER_LEVEL.LOG) {
            log(message);
        } else if (logLevel === LoggerServiceConstants.LOGGER_LEVEL.DEBUG) {
            debug(message);
        } else if (logLevel === LoggerServiceConstants.LOGGER_LEVEL.ERROR) {
            error(message);
        }
    };
};


angular.module('house-lending.common.services')
    .service('LoggerService', LoggerService)
    .constant('LoggerServiceConstants', LoggerServiceConstants);
