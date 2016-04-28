'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Server = undefined;

var _command = require('./command');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Server = exports.Server = function (_Command) {
  _inherits(Server, _Command);

  function Server(dispatcher) {
    _classCallCheck(this, Server);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Server).call(this, 'server'));

    _this.commandDispatcher.subscribe(_this.init.bind(_this));
    return _this;
  }

  return Server;
}(_command.Command);