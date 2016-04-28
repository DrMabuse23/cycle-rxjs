'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Relution = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _command = require('./command');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Relution = exports.Relution = function (_Command) {
  _inherits(Relution, _Command);

  function Relution(staticCommands) {
    _classCallCheck(this, Relution);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Relution).call(this, 'relution'));

    _this.staticCommands = staticCommands;
    _this.commandDispatcher.subscribe(_this.init.bind(_this));
    _this.args = [];
    _this.reserved = ['help', 'quit'];
    return _this;
  }

  _createClass(Relution, [{
    key: 'init',
    value: function init(args) {
      var _this2 = this;

      _get(Object.getPrototypeOf(Relution.prototype), 'init', this).call(this, args);
      Object.keys(this.staticCommands).forEach(function (command) {
        if (_this2.staticCommands[command].name === args[1]) {
          if (!_this2.staticCommands[command].init) {
            throw new Error('a commmand need a init Method');
          }
          var subargs = _this2._copy(args);
          subargs.splice(0, 1);
          _this2.staticCommands[command].init(subargs);
        }
      });
    }
  }]);

  return Relution;
}(_command.Command);