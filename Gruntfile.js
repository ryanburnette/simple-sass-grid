module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      build: {
        options: {
          style: 'expanded'
        }
      , files: {
          'build.css': 'build.sass'
        }
      }
    , dev: {
        options: {
          style: 'expanded'
        }
      , files: {
          'test/grid.css': 'test/grid.sass'
        }
      }
    }

  , watch: {
      dev: {
        files: ['test/grid.sass']
      , tasks: ['sass:dev']
      }
    }

  , connect: {
      dev: {
        options: {
          port: 9001
        , base: 'test'
        }      
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['sass:build']);
  grunt.registerTask('dev', ['connect','watch:dev']);
};
