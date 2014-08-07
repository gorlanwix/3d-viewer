'use strict';

angular.module('3dViewer')
  .controller('SettingsCtrl', function ($scope, $wix) {
  	$wix.UI.initialize();

  	$scope.modelUploaded = false;

  	$scope.lightingOptions= false;

  	$scope.modelColors = false;

    $scope.settings = {};

    $wix.UI.onChange('*', function (value, key) {
      $wix.Settings.triggerSettingsUpdatedEvent($scope.settings)
    })

  	$scope.enableLightingOptions = function() {
  		$scope.lightingOptions = true;
  	}

  	$scope.disableLightingOptions = function() {
  		$scope.lightingOptions = false;
  	}

  	$scope.enableModelColors = function() {
  		$scope.modelColors = true;
  	}

});
