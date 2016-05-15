'use strict';
const app = require('./app/express');
const http = require('http');
const port = +process.env.PORT || 3000;

app.set('port', port);
const server = http.createServer(app);

const events = require('./app/express/events');
server.on('error', events.onError);
server.on('listening', events.onListening);
server.listen(port);