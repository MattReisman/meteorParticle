Devices = new Mongo.Collection("devices");

if (Meteor.isClient) {

  angular.module('devices', ['angular-meteor', 'ui.router']);

  angular.module("devices").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

      $locationProvider.html5Mode(true);

      $stateProvider
      .state('devices', {
        url: '/devices',
        templateUrl: 'devices-list.ng.html',
        controller: 'DevicesListCtrl'
      })
      .state('deviceDetails', {
        url: '/devices/:deviceId',
        templateUrl: 'devices-details.ng.html',
        controller: 'DeviceDetailsCtrl'
      });

      $urlRouterProvider.otherwise("/devices");
    }]);

  angular.module("devices").controller("DevicesListCtrl", ['$scope', '$meteor',
    function($scope, $meteor) {

      $scope.devices = $meteor.collection(Devices);

      $scope.remove = function(device) {
        // $scope.devices.splice( $scope.devices.indexOf(device), 1 );
        $scope.devices.remove(device);
      };

      $scope.removeAll = function(){
        $scope.devices.remove();
      };
    }]);

  angular.module("devices").controller("DeviceDetailsCtrl", ['$scope', '$stateParams',
    function($scope, $stateParams){

      $scope.deviceId = $stateParams.deviceId;

    }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(Devices.find().count() === 0) {
      var devices = [
      {'name': 'sparky',
      'make' : 'Particle',
      'model' :'Particle',
      'description' : 'An IoT prototyping device',
      'unitID' : '123456789',
      'accessToken' : '123456789' },
      {'name': 'particles',
      'make' : 'Particle',
      'model' : 'Photon',
      'description' : 'An IoT prototyping device',
      'unitID' : '123456789',
      'accessToken' : '123456789' },
      {'name': 'Yungun',
      'make' : 'Arduino',
      'model' : 'Yun',
      'description' : 'An IoT prototyping device WiFi',
      'unitID' : '123456789',
      'accessToken' : '123456789' },
      {'name': 'Hound',
      'make' : 'BeagleBone',
      'model' : 'Black',
      'description' : 'An IoT prototyping device',
      'unitID' : '123456789',
      'accessToken' : '123456789' },
      {'name': 'Cake',
      'make' : 'Rasberry Pi',
      'model' : '2',
      'description' : 'A prototyping device' ,
      'unitID' : '123456789',
      'accessToken' : '123456789' },
      ];
      for (var i = 0; i <= devices.length; i++) {
        Devices.insert(devices[i]);
      };
    }
  });
}
