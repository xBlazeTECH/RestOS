'use strict';

describe('Controller: WaitstaffCtrl', function () {

  // load the controller's module
  beforeEach(module('resturantPosApp'));

  var WaitstaffCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WaitstaffCtrl = $controller('WaitstaffCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
