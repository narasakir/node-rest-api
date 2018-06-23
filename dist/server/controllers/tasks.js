'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _task = require('../models/task');

var _task2 = _interopRequireDefault(_task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function load(req, res, next, id) {
  _task2.default.findById(id).exec().then(function (task) {
    req.dbTask = task;
    return next();
  }, function (e) {
    return next(e);
  });
}

function get(req, res) {
  return res.json(req.dbTask);
}

function create(req, res, next) {
  _task2.default.create({
    user: req.body.user,
    description: req.body.description
  }).then(function (savedTask) {
    return res.json(savedTask);
  }, function (e) {
    return next(e);
  });
}

function update(req, res, next) {
  var task = req.dbTask;
  Object.assign(task, req.body);

  task.save().then(function () {
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

  _task2.default.find().skip(skip).limit(limit).exec().then(function (tasks) {
    return res.json(tasks);
  }, function (e) {
    return next(e);
  });
}

function remove(req, res, next) {
  var task = req.dbTask;
  task.remove().then(function () {
    return res.sendStatus(204);
  }, function (e) {
    return next(e);
  });
}

exports.default = { load: load, get: get, create: create, update: update, list: list, remove: remove };
module.exports = exports['default'];