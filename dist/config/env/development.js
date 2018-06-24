'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    env: 'development',
    db: 'mongodb://localhost/node-es6-api-dev',
    port: 3000,
    jwtSecret: 'my-api-secret',
    jwtDuration: '2 hours'
};
module.exports = exports['default'];