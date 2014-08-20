describe('testing the videos', function() {
  
  var videos;
  beforeEach(function() {
    document.body.innerHTML = __html__['index.html'];
    videos = document.getElementsByTagName('video');
  });
  
  it('should load all videos', function () {
    expect(videos.length).toBe(5);
    
    _(videos).each(function (v) {
      expect(v).toBeDefined();
      expect(v.paused).toBeDefined();
    });
    
  });
  
  it('should play and pause all videos', function() {
    _(videos).each(function (v) {
      expect(v.paused).toBe(true);  
    });
    
    PlayAllVideos();
    
    _(videos).each(function (v) {
      expect(v.paused).toBe(false);
    });
     
    PlayAllVideos();
    
    _(videos).each(function (v) {
      expect(v.paused).toBe(true);  
    });
  });
});