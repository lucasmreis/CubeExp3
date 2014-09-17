(function () {
  angular.module('cubeApp')
    .directive('onCanPlayThrough', function() {
      return {
          restrict: 'A',
          scope: {
            actionToTake: '&onCanPlayThrough'
          },
          link: function(scope, elem, attrs) {
            elem.on('canplaythrough', scope.actionToTake);
          }
      };
    });
  
})();