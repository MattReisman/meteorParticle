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
          templateUrl: 'device-details.ng.html',
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

