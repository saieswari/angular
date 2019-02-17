var myApp;
(function () {
    'use strict'; 
    myApp = angular.module('myApp', ['ui.router']);
})(); 
myApp.config([
    '$stateProvider',
    '$urlRouterProvider','$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('profile', {
                url: '/profile',
                templateUrl: 'Projects/Pages/Profile/Profile.html',
                controller: 'Profilectrl'
            })
            .state('request', {
                url: '/request',
                templateUrl: 'Projects/Pages/Request/Request.html',
                controller: 'Requestctrl'
            })
            .state('password', {
                url: '/password',
                templateUrl: 'Projects/Pages/Password/Changep.html',
                controller: 'Passwordctrl'
            });
      
        $urlRouterProvider.otherwise('profile');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }])