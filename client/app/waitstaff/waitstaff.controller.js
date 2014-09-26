'use strict';

angular.module('resturantPosApp')
  .controller('WaitstaffCtrl', function ($scope, orders) {
    
    $scope.contacts = orders.list();
    
    $scope.saveContact = function () {
        orders.save($scope.newcontact);
        $scope.newcontact = {};
    }
    
    $scope.delete = function (id) {
 
        orders.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }
 
 
    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(orders.get(id));
    }
  });
