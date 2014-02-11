module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      global: {
        options: {
          style: 'expanded'
        }
      , files: {
          'build.css': 'build.sass'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);
};
