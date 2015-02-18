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
	clean: ['build/grunt-basics/build/**', 'build/grunt-basics/node_modules', 'build/grunt-basics/Gruntfile.js', 'build/grunt-basics/package.json', 'build/grunt-basics/plugin-style.scss' ],
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
