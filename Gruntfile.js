'use strict';

const sass = require('node-sass');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    

    sass: {
      options: {
        implementation: sass,
        sourceMap: true ,
        outputStyle: 'compressed'
      },
      dist: { 
        files: {
            'css/shadow.min.css': 'scss/shadow.scss'
        }
      }
    },

    autoprefixer:{
      options: {
          browsers: ['last 10 versions']
        },
      dist:{
        files:{
          'css/shadow.min.css':'css/shadow.min.css'
        }
      }
    },
    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}