'use strict';

describe('Controller: KitchenCtrl', function () {

  // load the controller's module
  beforeEach(module('resturantPosApp'));

  var KitchenCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KitchenCtrl = $controller('KitchenCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
