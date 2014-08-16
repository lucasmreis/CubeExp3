(function () {
  var cubeController = function ($scope) {
    $scope.videoFile = 'assets/square.mov'; 
  };
  
  cubeController.$inject = ['$scope'];
  
  angular.module('cubeApp')
  .controller('cubeController', cubeController);
}());