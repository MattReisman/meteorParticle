angular.module("devices").run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === "AUTH_REQUIRED") {
      $state.go('devices');
    }
  });
}]);

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
      controller: 'DeviceDetailsCtrl',
      resolve: {
        "currentUser": ["$meteor", function($meteor){
      return $meteor.requireUser();
    }]
      }
    });

    $urlRouterProvider.otherwise("/devices");
  }]);
