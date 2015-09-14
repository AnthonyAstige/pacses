'use strict';
/* global Package */

Package.describe({
  summary: 'Allow http://meteor.local',
  version: '0.0.1',
  name:'anthonyastige:pacses',
  git:'git@github.com:AnthonyAstige/packses.git'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');

	api.use([
		'standard-app-packages'
	]);

	api.addFiles([
		'export.js',
		'pacses.js'
	]);

	api.export('Pacses');
});
