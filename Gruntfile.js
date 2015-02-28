module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dev: {
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
        files: ['**/*.sass']
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

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('dev', ['connect','watch']);
};
