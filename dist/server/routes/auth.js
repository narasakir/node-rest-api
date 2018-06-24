'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('../controllers/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/token')
/** POST /api/auth/token Get JWT authentication token */
.post(_auth2.default.authenticate, _auth2.default.generateToken, _auth2.default.respondJWT);

exports.default = router;
module.exports = exports['default'];