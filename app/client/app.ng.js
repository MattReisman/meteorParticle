if (Meteor.isClient) {
  angular.module('devices', ['angular-meteor']);
  angular.module("devices").controller("DevicesListCtrl",
    function($scope, $meteor) {

      $scope.devices = $meteor.collection(Devices);

      $scope.remove = function(device) {
        // $scope.devices.splice( $scope.devices.indexOf(device), 1 );
        $scope.devices.remove(device);
      };

      $scope.removeAll = function(){
        $scope.devices.remove();
      };
    });
}

