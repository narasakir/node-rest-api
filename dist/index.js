'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('./config/express');

var _express2 = _interopRequireDefault(_express);

var _env = require('./config/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_env2.default.db);
_mongoose2.default.connection.on('error', function () {
  throw new Error('unable to connect to database: ' + _env2.default.db);
});
_mongoose2.default.connection.on('connected', function () {
  console.log('Connected to database: ' + _env2.default.db);
});

if (_env2.default.env === 'development') {
  _mongoose2.default.set('debug', true);
}

_express2.default.listen(_env2.default.port, function () {
  console.log('API Server started and listening on port ' + _env2.default.port + ' (' + _env2.default.env + ')');
});

exports.default = _express2.default;
module.exports = exports['default'];