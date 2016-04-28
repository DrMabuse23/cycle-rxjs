'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Command = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Observable = require('rxjs/Observable');

require('rxjs/add/operator/filter');

require('rxjs/add/operator/catch');

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Command = exports.Command = function () {
  function Command(name) {
    var _this = this;

    _classCallCheck(this, Command);

    if (!name) {
      throw Error('Command need a name');
    }
    this.rl = _readline2.default.createInterface(process.stdin, process.stdout);
    this.name = name;
    var self = this;

    this.commandDispatcher = _Observable.Observable.create(function (observer) {
      if (process.argv.lenght <= 2) {
        observer.complete();
      }
      var args = _this._copy(process.argv);
      args.splice(0, 2);
      observer.next(args);
      observer.complete();
    }).catch(function (e) {
      throw new Error(e);
    }).filter(function (data) {
      //console.log(data[2] === this.name, data[2], this.name);
      return data[0] === _this.name;
    });
  }

  _createClass(Command, [{
    key: 'init',
    value: function init(args) {
      console.log(this.name, args);
    }
  }, {
    key: '_copy',
    value: function _copy(org) {
      return JSON.parse(JSON.stringify(org));
    }
  }]);

  return Command;
}();