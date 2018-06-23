'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _env = require('../../config/env');

var _env2 = _interopRequireDefault(_env);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function authenticate(req, res, next) {
    _user2.default.findOne({
        username: req.body.username
    }).exec().then(function (user) {
        if (!user) return next();
        user.comparePassword(req.body.password, function (e, isMatch) {
            if (e) return next(e);
            if (isMatch) {
                req.user = user;
                next();
            } else {
                return next();
            }
        });
    }, function (e) {
        return next(e);
    });
}

function generateToken(req, res, next) {
    if (!req.user) return next();

    var jwtPayload = {
        id: req.user._id
    };
    var jwtData = {
        expiresIn: _env2.default.jwtDuration
    };
    var secret = _env2.default.jwtSecret;
    req.token = _jsonwebtoken2.default.sign(jwtPayload, secret, jwtData);

    next();
}

function respondJWT(req, res) {
    if (!req.user) {
        res.status(401).json({
            error: 'Unauthorized'
        });
    } else {
        res.status(200).json({
            jwt: req.token
        });
    }
}

exports.default = { authenticate: authenticate, generateToken: generateToken, respondJWT: respondJWT };
module.exports = exports['default'];