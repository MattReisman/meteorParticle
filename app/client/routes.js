angular.module("devices").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
    .state('devices', {
      url: '/devices',
      templateUrl: 'client/devices/views/devices-list.ng.html',
      controller: 'DevicesListCtrl'
    })
    .state('deviceDetails', {
      url: '/devices/:deviceId',
      templateUrl: 'client/devices/views/devices-details.ng.html',
      controller: 'DeviceDetailsCtrl'
    });

    $urlRouterProvider.otherwise("/devices");
  }]);
