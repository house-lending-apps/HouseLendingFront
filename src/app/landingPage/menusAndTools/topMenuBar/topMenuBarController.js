'use strict';

var TopMenuBarController = function ($mdSidenav, SessionService) {
    var vm = this;
    vm.$mdSidenav = $mdSidenav;
    vm.currentUser = SessionService.getCurrentUser();
};

TopMenuBarController.prototype.loggedInUserName = function () {
    var self = this;
    return self.currentUser.user.name;
};

TopMenuBarController.prototype.toggleMenu = function () {
    var self = this;
    console.log('The Menu will toggle');
    self.$mdSidenav('filter-left-nav').toggle();
};




angular.module('house-lending.menusAndTools.topMenuBar')
    .controller('TopMenuBarController', TopMenuBarController);
