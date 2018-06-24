'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../controllers/users');

var _users2 = _interopRequireDefault(_users);

var _tasks = require('./tasks');

var _tasks2 = _interopRequireDefault(_tasks);

var _users3 = require('./users');

var _users4 = _interopRequireDefault(_users3);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/users', _users4.default);
router.use('/tasks', _tasks2.default);
router.use('/auth', _auth2.default);

exports.default = router;
module.exports = exports['default'];