'use strict';

const express = require('express');
const expressRouter = express.Router();
const fs = require('fs');
const path = require('path');
const cfgUtil = require('./server/commons/factories/configuration');
const serverCfg = cfgUtil.get('server');
const ROUTES_PATH = path.join(__dirname, './server/routes');
const EXCLUDE_ROUTER_MODULE = serverCfg.router.EXCLUDE_MODULE || [];

(fs.readdirSync(ROUTES_PATH) || []).forEach(function (file) {
	let fileNameParser = path.parse(file);
	if(fileNameParser.ext === '.js') {
		if(EXCLUDE_ROUTER_MODULE.indexOf(fileNameParser.name) === -1) {
			require(path.join(ROUTES_PATH, file))(expressRouter);
		}
	}
});

module.exports = expressRouter;