/*eslint-env jasmine */
/*global module:false, inject:false */
'use strict';

angular.module('house-lending.mocks', ['house-lending','ngMockE2E']).config(function () {
    angular.MOCKDATA = {auth: true};
}).run(function ($httpBackend) {
    $httpBackend.whenGET(/^.*.tpl.html/).passThrough();
});

