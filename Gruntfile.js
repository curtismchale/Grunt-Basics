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
	},
	copy: {
		main:{
			src: ['**/**'],
			dest: 'build/grunt-basics/'
		}
	},
	watch: {
		sass: {
			files: ['*.scss'],
			tasks: ['sass']
		}
	}
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['sass']);

};
