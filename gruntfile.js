module.exports = function(grunt) {

  grunt.initConfig({
    bowercopy: {
      options: {
        // Bower components folder will be removed afterwards
        clean: false
      },
      // Javascript
      javascript: {
        options: {
          destPrefix: 'js'
        },
        files: {
          'lib/angular': ['angular/angular.min.js',
            'angular-route/angular-route.min.js',
            'angular-animate/angular-animate.min.js'
          ],
          'lib/jquery': 'jquery/dist/jquery.min.js',
          'lib/bootstrap': 'bootstrap/dist/js/bootstrap.min.js'
        }
      },
      css: {
        options: {
          destPrefix: 'css'
        },
        files: {
          'lib/bootstrap': [
            'bootstrap/dist/css/bootstrap.min.css',
            'bootstrap/dist/css/bootstrap-theme.css'
          ]
        }
      },
      fonts: {
        files: {
          'fonts': [
            'bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
            'bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
            'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
            'bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
            'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'
          ]
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: '',
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', []);
};
