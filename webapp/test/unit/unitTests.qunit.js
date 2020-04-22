/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"twitter/UI5Annotations/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});