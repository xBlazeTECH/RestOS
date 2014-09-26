'use strict';

describe('Controller: GreeterCtrl', function () {

  // load the controller's module
  beforeEach(module('resturantPosApp'));

  var GreeterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GreeterCtrl = $controller('GreeterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
