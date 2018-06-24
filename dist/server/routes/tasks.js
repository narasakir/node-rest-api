'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _tasks = require('../controllers/tasks');

var _tasks2 = _interopRequireDefault(_tasks);

var _tasks3 = require('./validation/tasks');

var _tasks4 = _interopRequireDefault(_tasks3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/')
/** GET /api/tasks - Get list of tasks */
.get(_tasks2.default.list)

/** POST /api/tasks - Create new task */
.post((0, _expressValidation2.default)(_tasks4.default.createTask), _tasks2.default.create);

router.route('/:taskId')
/** GET /api/tasks/:taskId - Get task */
.get(_tasks2.default.get)

/** PUT /api/tasks/:taskId - Update task */
.put((0, _expressValidation2.default)(_tasks4.default.updateTask), _tasks2.default.update)

/** DELETE /api/tasks/:taskId - Delete task */
.delete(_tasks2.default.remove);

/** Load task when API with taskId route parameter is hit */
router.param('taskId', (0, _expressValidation2.default)(_tasks4.default.getTask));
router.param('taskId', _tasks2.default.load);

exports.default = router;
module.exports = exports['default'];