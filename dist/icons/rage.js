"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rage = function Rage(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4-5a4 4 0 1 0-8 0h1.333s.423-2.667 2.667-2.667c2.244 0 2.661 2.667 2.661 2.667H16zm-1.5-6A1.5 1.5 0 0 0 16 9.5V8c-.828 0-3 .672-3 1.5a1.5 1.5 0 0 0 1.5 1.5zm-5 0A1.5 1.5 0 0 0 11 9.5C11 8.672 8.828 8 8 8v1.5A1.5 1.5 0 0 0 9.5 11z"
    })
  );
};

exports.default = Rage;
module.exports = exports["default"];