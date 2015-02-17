module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
	  dist: {
		  options: {
			style: 'compressed'
		  },
		  files: {
			'plugin-style.css': 'plugin-style.scss'
		  }
		}
	}
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);

};
