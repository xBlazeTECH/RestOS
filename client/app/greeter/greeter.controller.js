'use strict';

angular.module('resturantPosApp')
  .controller('GreeterCtrl', function ($scope, $http, socket) {
    $scope.tableList = [];
    
    $scope.myStyle = function (table) {
      var value = {'position': 'absolute', 'height': table.unit_height * 80 + 'px', 'width': table.unit_width * 80 + 'px', 'top':table.y, 'left': table.y};
      return value;
    };
    $scope.h = '';
    $scope.w = '';
    
    $scope.getPixels = function(units) {
      return units * 80 + 'px';
    };
    
    $http.get('/api/tables').success(function(tableList) {
      $scope.tableList = tableList;
      socket.syncUpdates('tables', $scope.tableList);
    });
    
    $scope.mouseDown = function(table) {
      
    }
    /*
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
    */
  });
