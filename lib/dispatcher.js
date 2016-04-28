'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dispatcher = undefined;

var _Observable = require('rxjs/Observable');

require('rxjs/add/operator/map');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Dispatcher
 */

var Dispatcher = exports.Dispatcher = function Dispatcher() {
  _classCallCheck(this, Dispatcher);

  this.observer = _Observable.Observable.create(function (observer) {
    process.argv.splice(0, 2);
    observer.next(process.argv);
  });
};