'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../controllers/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/')
/** GET /api/users - Get list of users */
.get(_users2.default.list)

/** POST /api/users - Create new user */
.post(_users2.default.create);

router.route('/:userId')
/** GET /api/users/:userId - Get user */
.get(_users2.default.get)

/** PUT /api/users/:userId - Update user */
.put(_users2.default.update)

/** DELETE /api/users/:userId - Delete user */
.delete(_users2.default.remove);

/** Load user when API with userId route parameter is hit */
router.param('userId', _users2.default.load);

exports.default = router;
module.exports = exports['default'];