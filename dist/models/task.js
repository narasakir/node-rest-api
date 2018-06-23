'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskSchema = new _mongoose2.default.Schema({
  user: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  done: {
    type: Boolean,
    default: false
  }
});

exports.default = _mongoose2.default.model('Task', TaskSchema);
module.exports = exports['default'];