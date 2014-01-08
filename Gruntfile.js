/* global module:false */
module.exports = function(grunt) {
	var port = process.env ? process.env.PORT : ( grunt.option('port') || 8000 );
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: port,
					base: '.',
					livereload: true
				}
			}
		},

		watch: {
			presentation: {
				files: [ 'index.html' ],
				options: {
					livereload: process.env ? process.env.PORT : true
				}
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Default task
	grunt.registerTask( 'default', [ 'serve' ]);

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};
