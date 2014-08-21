describe('testing cubeController', function () {
  beforeEach(module('cubeApp'));
  
  var scope, ctrl;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('cubeController', { $scope: scope });
  }));
  
  it('left and right cube movements', function () {
    expect(scope.Transformations()).toBe(
      'transform: rotateX(0deg) rotateY(0deg);');
    
    scope.Left();
    scope.$digest();
 
    expect(scope.Transformations()).toBe(
      'transform: rotateX(0deg) rotateY(-90deg);');
    
    scope.Left();
    scope.$digest();
 
    expect(scope.Transformations()).toBe(
      'transform: rotateX(0deg) rotateY(-180deg);');
    
    scope.Right();
    scope.$digest();
    
    expect(scope.Transformations()).toBe(
      'transform: rotateX(0deg) rotateY(-90deg);');
    
    scope.Right();
    scope.$digest();
 
    expect(scope.Transformations()).toBe(
      'transform: rotateX(0deg) rotateY(0deg);');
  });
});