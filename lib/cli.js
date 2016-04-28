'use strict';

var _server = require('./server');

var _relution = require('./relution');

var staticCommands = {
  server: new _server.Server()
};

var relution = new _relution.Relution(staticCommands);