'use strict';

const cfgUtil = require('./../server/commons/factories/configuration');
const logUtil = require('./../server/commons/factories/logFactory');

const serverCfg = cfgUtil.get('server');
const debug = require('debug')(serverCfg.APP_NAME);
const appLog = logUtil.getLogger('app');
const port = +process.env.PORT || serverCfg.PORT;

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	const bind = typeof port === 'string'
			? 'Pipe ' + port
			: 'Port ' + port;

	switch (error.code) {
		case 'EACCES':
			appLog.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			appLog.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

function onListening() {
	const addr = this.address();
	const bind = typeof addr === 'string'
			? 'pipe ' + addr
			: 'port ' + addr.port;
	appLog.info('Listening on ' + bind);
	debug('Listening on ' + bind);
}

exports.onError = onError;
exports.onListening = onListening;