(function () {
  var cubeController = function ($scope) {
    $scope.videoFile = 'assets/square.mov';
    
    $scope.PlayOrPause = function () {
      PlayAllVideos();
    };
    
    var xAngle = 0, yAngle = 0;
    $scope.Transformations = function () {
      return 'transform: rotateX('+xAngle+'deg) rotateY('+yAngle+'deg);';
    };
    
    $scope.Left  = function () { yAngle -= 90; };
    $scope.Right = function () { yAngle += 90; };
    $scope.Up    = function () { xAngle += 90; };
    $scope.Down  = function () { xAngle -= 90; };
  
    var isReady = false;
    var videoCount = 0;
    $scope.IncreaseCount = function () {
      videoCount++;
      if (videoCount >= 5) isReady = true;
    }
    
    
  };
  
  cubeController.$inject = ['$scope'];
  
  angular.module('cubeApp')
    .controller('cubeController', cubeController);
}());

function PlayAllVideos() {
  var videos = document.getElementsByTagName('video');
  
  for (i = 0; i < videos.length; i++) {
    if (videos[i].paused) {
      //if (AreVideosLoaded()) {
        videos[i].play(); 
      //}  
    } else {
      videos[i].pause();  
    }
  }
}