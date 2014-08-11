(function () {
  'use strict';
  
  var xAngle = 0, yAngle = 0;
  
  document.addEventListener('keydown', function(e) {
    switch(e.keyCode) {

      case 37: // left
        yAngle -= 90;
        break;

      case 38: // up
        xAngle += 90;
        break;

      case 39: // right
        yAngle += 90;
        break;

      case 40: // down
        xAngle -= 90;
        break;
        
      case 32: // spacebar
        PlayAllVideos();
        break;
    };

    var cube = document.getElementById('cube');

    cube.style.transform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";

  }, false);
})();

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
  };
};

function AreVideosLoaded() {
  var videos = document.getElementsByTagName('video');
  
  for (i = 0; i < videos.length; i++) {
    console.log(videos[i].readyState)
    if (videos[i].readyState !== 4) {
      return false;
    }
  }
  return true;
};

