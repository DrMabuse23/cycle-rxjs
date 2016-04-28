'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Command = undefined;

var _Observable = require('rxjs/Observable');

require('rxjs/add/operator/filter');

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Command = exports.Command = function Command(name) {
  var _this = this;

  _classCallCheck(this, Command);

  if (!name) {
    throw Error('Command need a name');
  }
  this.rl = _readline2.default.createInterface(process.stdin, process.stdout);
  this.name = name;
  var self = this;

  this.commandDispatcher = _Observable.Observable.create(function (observer) {
    observer.next(process.argv);
  }).filter(function (data) {
    //console.log(data[2] === this.name, data[2], this.name);
    return data[2] === _this.name;
  });
};