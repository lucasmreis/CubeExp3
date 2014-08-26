module.exports = function (grunt) {
  grunt.initConfig({
    jshint: ['js/**/*.js'],
    
    clean: {
      css: 'css/*.css'
    },
    
    less: {
      compile: {
        files: {
          'css/site.css' : 'css/site.less'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  
  grunt.registerTask('default', ['jshint', 'clean:css', 'less:compile']);
};