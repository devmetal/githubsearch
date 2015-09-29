'use strict';

describe('HomeController', () => {

  let PageService, controller, scope;

  beforeEach(() => {
    angular.mock.module('Hub');
    angular.mock.inject((_PageService_, $controller, $rootScope) => {
      PageService = _PageService_;
      scope = $rootScope.$new();
      controller = $controller('HomeController', {
        $scope: scope
      });
    });
  });

  it('Set a working PageService to scope', () => {
    expect(scope.Page).to.exist;
    expect(scope.Page).to.be.an.instanceOf(PageService.constructor);
    scope.Page.setTitle('Karma');
    expect(scope.Page.getTitle()).to.equal('Karma');
  });
});
