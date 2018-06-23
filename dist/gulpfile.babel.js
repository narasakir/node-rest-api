'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpLoadPlugins = require('gulp-load-plugins');

var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Load the gulp plugins into the `plugins` variable
var plugins = (0, _gulpLoadPlugins2.default)();

var paths = {
  js: ['./**/*.js', '!dist/**', '!node_modules/**']
};

// Compile all Babel Javascript into ES5 and put it into the dist dir
_gulp2.default.task('babel', function () {
  return _gulp2.default.src(paths.js, { base: '.' }).pipe(plugins.babel()).pipe(_gulp2.default.dest('dist'));
});

// Start server with restart on file change events
_gulp2.default.task('nodemon', ['babel'], function () {
  return plugins.nodemon({
    script: _path2.default.join('dist', 'index.js'),
    ext: 'js',
    ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
    tasks: ['babel']
  });
});