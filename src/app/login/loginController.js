'use strict';

var LoginController = function ($state, $mdDialog, AuthenticationService, LoggerService) {
    var vm = this;
    vm.AuthenticationService = AuthenticationService;
    vm.LoggerService = LoggerService;
    vm.$state = $state;
    vm.$mdDialog = $mdDialog;
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
        self.$mdDialog.cancel();
        self.$state.go('houseLending');
    }, function (err) {
        //Error callback
        self.clearFields();
        console.log(err);
        self.errorMessage = 'User or password incorrect, please try again';
    });
};

LoginController.prototype.clearFields = function () {
    var self = this;
    self.user = '';
    self.password = '';
};

angular.module('house-lending.login')
    .controller('LoginController', LoginController)
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('yellow')
            .accentPalette('blue');

        // Define a theme for the Login dialogs;
        // @see <md-dialog md-theme="login">...</md-dialog>
        $mdThemingProvider.theme('login')
            .primaryPalette('brown')
            .accentPalette('yellow');

    })
    .run(function ($mdDialog, $document) {
        // Show the Login Dialog
        $mdDialog.show({
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: 'login/login.tpl.html',
            parent: angular.element($document.body),
            clickOutsideToClose: false,
            disableParentScroll: false,
            escapeToClose: false,
            focusOnOpen: true,
            fullscreen: true

        });
    });

