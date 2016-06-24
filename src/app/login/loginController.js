'use strict';

var LoginController = function (AuthenticationService, LoggerService, $state) {
    var vm = this;
    vm.AuthenticationService = AuthenticationService;
    vm.LoggerService = LoggerService;
    vm.$state = $state;
    vm.user = '';
    vm.password = '';
    vm.errorMessage = undefined;
};

// Login using userid & password
LoginController.prototype.loginUser = function () {
    var self = this;

    self.AuthenticationService.validateUser(self.user, self.password, 'password').then(function () {
        //success callback
        self.LoggerService.log('user ' + self.user + ' is authenticated, redirecting to Landing Page');
        self.$state.go('houseLending');
    }, function (err) {
        //Error callback
        self.clearFields();
        self.errorMessage = 'User or password incorrect, please try again';
    });
};

LoginController.prototype.clearFields = function () {
    var self = this;
    self.user = '';
    self.password = '';
};

angular.module('house-lending.login')
    .controller('LoginController', LoginController);
