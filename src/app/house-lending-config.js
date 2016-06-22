angular
    .module('house-lending.common.services')
    .config(function ($windowProvider) {
        var $window = $windowProvider.$get();
        $window.COUNTRY = 'UK';
    })
    .constant('RuntimeConfiguration', {
        logging: {
            debug: true
        },
        urls: [
            {
                "url": "/api/authenticate",
                "target": "/api/authenticate"
            }
        ]
    });