

angular.module("devices").controller("DeviceDetailsCtrl", ['$scope', '$stateParams', '$meteor',
  function($scope, $stateParams, $meteor){

    $scope.device = $meteor.object(Devices, $stateParams.deviceId, false);

    $scope.save = function() {
      $scope.device.save().then(function(numberOfDocs){
        console.log('save success doc affected ', numberOfDocs);
      }, function(error){
        console.log('save error', error);
      });
    };

    $scope.reset = function() {
      $scope.device.reset();
    };

  }]);
