describe('testing the videos', function() {
  
  beforeEach(function() {
    document.body.innerHTML = __html__['index.html'];
  });
  
  it('should play and pause all videos', function() {
    expect(document.getElementsByTagName('video')[0].paused).toBeDefined();
    
    expect(document.getElementsByTagName('video')[0].paused).toBe(true);
    
    PlayAllVideos();
    
    expect(document.getElementsByTagName('video')[0].paused).toBe(false);
    
    PlayAllVideos();
    
    expect(document.getElementsByTagName('video')[0].paused).toBe(true);
  })
})