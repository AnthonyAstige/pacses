'use strict';
/* global Pacses, Session */

/// Helpers
var makeName = function(packageName, varName) {
	return 'Pacses::' + packageName + '::' + varName;
};

/// API
// Generate a setter method
Pacses.genSet = function(packageName) {
	return function(name, val) {
		return Session.set(makeName(packageName, name), val);
	};
};

// Generate a getter method
Pacses.genGet = function(packageName) {
	return function(name) {
		return Session.get(makeName(packageName, name));
	};
};
