'use strict';

const fs = require('fs');
const path = require('path');
const SERVER_CONFIG = require('../../../conf/server');

const CONFIG_DIR = SERVER_CONFIG.public.CONF_DIR;
const NODE_ENV = SERVER_CONFIG.public.NODE_ENV;

class Config {
	constructor() {
		const defaults = this._defaults = {};
		(fs.readdirSync(CONFIG_DIR) || []).forEach(function (file) {
			let fileNameParser = path.parse(file);
			if(fileNameParser.ext === '.js') {
				let obj = require(path.normalize(CONFIG_DIR + '/' + file));
				defaults[fileNameParser.name] = Object.assign({}, obj.public, obj[NODE_ENV]);
			}
		});
	}

	get(name) {
		var _default = Object.assign({}, this._defaults);
		return name ? _default[name] : _default;
	}
}

var instance = new Config();
module.exports = instance;