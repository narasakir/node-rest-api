'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // POST /api/tasks
  createTask: {
    body: {
      user: _joi2.default.string().regex(/^[0-9a-fA-F]{24}$/).required(),
      description: _joi2.default.string().required(),
      done: _joi2.default.boolean()
    }
  },

  // GET-PUT-DELETE /api/tasks/:taskId
  getTask: {
    params: {
      taskId: _joi2.default.string().regex(/^[0-9a-fA-F]{24}$/).required()
    }
  },

  // PUT /api/tasks/:taskId
  updateTask: {
    body: {
      user: _joi2.default.string().regex(/^[0-9a-fA-F]{24}$/),
      description: _joi2.default.string(),
      done: _joi2.default.boolean()
    }
  }
};
module.exports = exports['default'];