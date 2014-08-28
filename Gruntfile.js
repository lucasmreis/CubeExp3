module.exports = function (grunt) {
  grunt.initConfig({
    jshint: [
      'js/**/*.js'
    ],
    
    clean: {
      css: 'css/*.css',
      js: 'js/vendor.js'
    },
    
    less: {
      compile: {
        files: {
          'css/site.css' : 'css/site.less'
        }
      }
    },
    
    concat: {
      vendor: {
        options: {
          separator: ';'
        },
        src: [
          'bower_components/angular/angular.min.js',
          'bower_components/angular-swipe/dist/angular-swipe.min.js',
          'bower_components/lodash/dist/lodash.min.js'
        ],
        dest: 'js/vendor.js'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.registerTask('default', ['clean:js', 'jshint', 'clean:css', 'less:compile', 'concat:vendor']);
};