'use strict';

describe('Directive: imgholder', function () {

  // load the directive's module and view
  beforeEach(module('resturantPosApp'));
  beforeEach(module('app/imgholder/imgholder.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<imgholder></imgholder>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the imgholder directive');
  }));
});