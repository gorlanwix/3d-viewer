'use strict';

console.log('model controller loaded');

angular.module('3dViewer')
	.controller('ModelCtrl', function ($scope) {
    console.log('controller opened');

    $scope.modelRotationSpeed = modelRotationSpeed;

    $scope.smokeOn = 'Off';
    $scope.smokeRotationSpeed = smokeRotationSpeed;
    $scope.smokeRisingSpeed = smokeRisingSpeed;

    $scope.particlesOn = 'Off';
    $scope.particlesRotationSpeed = particlesRotationSpeed;

    $scope.backgroundColor = 0x000000;
    renderer.setClearColor( $scope.backgroundColor, 0);
    console.log($scope.backgroundColor);

    $scope.toggleModelRotation = function () {
      modelRotationOn = !modelRotationOn;
      if (modelRotationOn) {
        $scope.modelRotation = 'On';
      } else {
        $scope.modelRotation = 'Off';
      }
    }

    $scope.toggleParticles = function () {
      particlesOn = !particlesOn;
      if (particlesOn) {
        $scope.particlesOn = 'On';
        addSnowflakes();
      } else {
        $scope.particlesOn = 'Off';
        scene.remove(particleSystem);
      }
    }

    $scope.toggleSmoke = function () {
      smokeOn = !smokeOn;
      if (smokeOn) {
        $scope.smokeOn = 'On';
        addSmoke();
      } else {
        $scope.smokeOn = 'Off';
        scene.remove(smoke);
      }
    }

    $scope.increaseModelRotationSpeed = function () {
      modelRotationSpeed += 0.5;
      $scope.modelRotationSpeed = modelRotationSpeed;
    }

    $scope.decreaseModelRotationSpeed = function () {
      modelRotationSpeed -= 0.5;
      $scope.modelRotationSpeed = modelRotationSpeed;
    }

    $scope.toggleSmoke

    $scope.increaseSmokeRotationSpeed = function () {
      smokeRotationSpeed += 0.5;
      $scope.smokeRotationSpeed = smokeRotationSpeed;
    }

    $scope.decreaseSmokeRotationSpeed = function () {
      smokeRotationSpeed -= 0.5;
      $scope.smokeRotationSpeed = smokeRotationSpeed;
    }

    $scope.increaseSmokeRisingSpeed = function () {
      smokeRisingSpeed += 0.5;
      $scope.smokeRisingSpeed = smokeRisingSpeed;
    }

    $scope.decreaseSmokeRisingSpeed = function () {
      smokeRisingSpeed -= 0.5;
      $scope.smokeRisingSpeed = smokeRisingSpeed;
    }

    $scope.increaseParticlesRotationSpeed = function () {
      particlesRotationSpeed += 0.5;
      $scope.particlesRotationSpeed = particlesRotationSpeed;
    }

    $scope.decreaseParticlesRotationSpeed = function () {
      particlesRotationSpeed -= 0.5;
      $scope.particlesRotationSpeed = particlesRotationSpeed;
    }

  });