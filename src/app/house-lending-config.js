angular
    .module('house-lending.common.services')
    .config(function ($windowProvider) {
        var $window = $windowProvider.$get();
        $window.COUNTRY = 'UK';
    })
    .constant('RuntimeConfiguration', {
        dev : {
            logging: {
                debug: true
            },
            urls: [
                {
                    'url': '/api/authenticate',
                    'target': 'http://localhost:3000/api/authenticate'
                }
            ]
        },

        test : {
            logging: {
                debug: true
            },
            urls: [
                {
                    'url': '/api/authenticate',
                    'target': '/api/authenticate'
                }
            ]
        }
    });
