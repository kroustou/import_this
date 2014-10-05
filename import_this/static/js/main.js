/* global require */

// sample requirejs config
require.config({
	// we have to set the paths for each library to the "standard"
	// lib path and get rid of the ugly "bower_components" path wich
	// is not consistent for each library.
	paths: {
		// jquery always need a path config if it's not on the root directory
		'jquery': '../bower_components/jquery/jquery',
		'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap'
	},
	shim : {
		'bootstrap' : {
			'deps': ['jquery']
		}
	},
});

require(['jquery', 'bootstrap'], function ($) {
	'use strict';

	console.log('initialized...');
});

