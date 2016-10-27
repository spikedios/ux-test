module.exports = function(grunt){

	// Main settings
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			combine: {
				files: {
					'css/main.min.css': ['css/style.css', 'chico/chico-master/dist/ui/chico.css']
				}
			}
		},


		uglify: {
			dist: {
				files: {
					'js/script.min.js': ['chico/chico-master/dist/ui/chico.js', 'js/script.js', 'https://ui.mlstatic.com/chico/tiny/0.2.3/tiny.min.js']
				}
			}
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
		        	'index.min.html': ['index.html']
		    	}
		    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['cssmin', 'uglify', 'htmlmin']);

};



// grunt.log.write('CSS Minificado con éxito')