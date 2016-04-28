'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Relution = undefined;

var _command = require('./command');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Relution = exports.Relution = function (_Command) {
  _inherits(Relution, _Command);

  function Relution(dispatcher) {
    _classCallCheck(this, Relution);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Relution).call(this, 'relution'));

    _this.commandDispatcher.subscribe(function (data) {
      console.log(_this.name, data);
    });
    return _this;
  }

  return Relution;
}(_command.Command);