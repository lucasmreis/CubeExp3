module.exports = function (grunt) {
  grunt.initConfig({
    jshint: ['js/**/*.js']
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask('default', ['jshint']);
};