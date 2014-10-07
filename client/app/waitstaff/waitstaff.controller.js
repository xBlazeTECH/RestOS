'use strict';

angular.module('resturantPosApp')
  .controller('WaitstaffCtrl', function ($scope, $http, socket) {
    $scope.menu = {};
    $scope.isHidden = true;
    $scope.orderChosen = false;
    $scope.radioModel = '';
    
    $scope.getInverse = function(thing) {
      if (thing == true) {
        return false;
      } else {
        return true;
      }
    };
    
    /*
    $scope.sideActivity = function(param) {
    //var argarray = Array.prototype.slice.call(arguments,0) }
    if (typeof param === "boolean") { //Check to see if I am sending a boolean parameter rather than a side parameter.
      if (typeof
    } else {
      if (typeof param.default === "boolean") {
        if (side.default) {
          return true;
        } else {
          return false;
        }
      }
    }
    */

    $http.get('/api/meals').success(function(meals) {
      $scope.menu = meals;
      socket.syncUpdates('menu', $scope.menu);
    });
    
    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
