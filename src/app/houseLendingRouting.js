'use strict';

angular.module('house-lending')
    .constant('MAIN-STATE', 'landingPage')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('/', {
                url: '/',
                redirectTo: 'houseLending',
                template: '<ui-view/>'
            })
            .state('houseLending', {
                url: '/houseLending',
                redirectTo: 'houseLending.dashboard',
                template: '<ui-view/>'
            })
            .state('houseLending.dashboard', {
                url: '/dashboard',
                template: '<house-lending-dashbopard></house-lending-dashbopard>'
                /*,
                 resolve: {
                 advertisementData: function (AdvertisementListService) {

                 //AdvertisementListService.getAdvertisements().then(function(advertisements){


                 }
                 }*/
            })
            .state('houseLending.landingPage', {
                url: '/landingPage',
                template: '<marketing-landing-page></marketing-landing-page>'
            });

        $urlRouterProvider.otherwise('/');
    })
    .run(function ($rootScope, $log, $state) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState /*,fromParams, options*/) {

                if (toState.redirectTo) {
                    event.preventDefault();
                    $state.go(toState.redirectTo, toParams, {location: 'replace'});
                }

                $log.log('toState : ' + JSON.stringify(toState));
                $log.log('fromState : ' + JSON.stringify(fromState));
            });
    });
