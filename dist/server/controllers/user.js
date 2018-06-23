'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function load(req, res, next, id) {
  _user2.default.findById(id).exec().then(function (user) {
    req.dbUser = user;
    return next();
  }, function (e) {
    return next(e);
  });
}

function get(req, res) {
  return res.json(req.dbUser);
}

function create(req, res, next) {
  _user2.default.create({
    username: req.body.username,
    password: req.body.password
  }).then(function (savedUser) {
    return res.json(savedUser);
  }, function (e) {
    return next(e);
  });
}

function update(req, res, next) {
  var user = req.dbUser;
  Object.assign(user, req.body);

  user.save().then(function (savedUser) {
    return res.sendStatus(204);
  }, function (e) {
    return next(e);
  });
}

function list(req, res, next) {
  var _req$query = req.query,
      _req$query$limit = _req$query.limit,
      limit = _req$query$limit === undefined ? 50 : _req$query$limit,
      _req$query$skip = _req$query.skip,
      skip = _req$query$skip === undefined ? 0 : _req$query$skip;

  _user2.default.find().skip(skip).limit(limit).exec().then(function (users) {
    return res.json(users);
  }, function (e) {
    return next(e);
  });
}

function remove(req, res, next) {
  var user = req.dbUser;
  user.remove().then(function () {
    return res.sendStatus(204);
  }, function (e) {
    return next(e);
  });
}

exports.default = { load: load, get: get, create: create, update: update, list: list, remove: remove };
module.exports = exports['default'];