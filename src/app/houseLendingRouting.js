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
            })
            //Marketing Landing Page
            .state('landingPage', {
                url: '/landingPage',
                template: '<marketing-landing-page></marketing-landing-page>'
            })
            // Login Flow
            .state('login', {
                url: '/login',
                template: '<login-page></login-page>'
            });
        $urlRouterProvider.otherwise('/login');
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
