module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		base: 'import_this/static',

		clean: [
			'<%= base %>/css/screen.css',
			'<%= base %>/js/script.js'
		],

		jshint: {
			options: {
				bitwise: true,
				curly: true,
				eqeqeq: true,
				latedef: true,
				newcap: true,
				noarg: true,
				quotmark: 'single',
				undef: true,
				unused: true,
				strict: true,
				browser: true,
				globals: {
					module: true,
					require: true,
					define: true
				}
			},
			dev: {
				options: {
					devel: true,
					debug: true
				},
				files: {
					src: [
						'Gruntfile.js',
						'<%= base %>/js/main.js',
						'<%= base %>/js/app/*.js'
					]
				}
			},
			prod: [
				'Gruntfile.js',
				'<%= base %>/js/main.js',
				'<%= base %>/js/app/*.js'
			]
		},

		less: {
			dev: {
				files: {
					'<%= base %>/css/screen.css': '<%= base %>/css/screen.less'
				}
			},
			prod: {
				options: {
					yuicompress: true
				},
				files: {
					'<%= base %>/css/screen.css': '<%= base %>/css/screen.less'
				}
			}
		},
		copy: {
			dev: {
				src: ['<%= base %>/bower_components/requirejs/require.js'],
				dest: '<%= base %>/js/script.js'
			}
		},

		requirejs: {
			prod: {
				options: {
					mainConfigFile: '<%= base %>/js/main.js',
					baseUrl: '<%= base %>/js',
					name: '../bower_components/requirejs/require',
					include: ['main'],

					out: '<%= base %>/js/script.js',
					paths: {
						facebook: 'empty:',
						twitter: 'empty:'
					}
				}
			}
		},

		watch: {
			js: {
				files: [
					'<%= base %>/js/main.js',
					'<%= base %>/js/app/*.js'
				],
				tasks: ['jshint:dev', 'copy:dev']
			},
			css: {
				files: [
					'<%= base %>/css/**/*.less'
				],
				tasks: ['less:dev']
			},
			spry: {
				files: [
					'<%= base %>/images/sprite@2x/*.png'
				],
				tasks: ['spry:prod']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev', [
		'jshint:dev',
		'copy:dev',
		'spry:prod',
		'less:dev'
	]);
	grunt.registerTask('prod', [
		'jshint:prod',
		'requirejs:prod',
		'spry:prod',
		'less:prod'
	]);
};
