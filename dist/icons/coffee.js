"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Coffee = function Coffee(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M4 17h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zM17 7h1a2 2 0 1 1 0 4h-1c-.033 0-.067 0-.1-.002A5.002 5.002 0 0 1 12 15h-2a5 5 0 0 1-5-5V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zM7 7v3a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V7H7z"
    })
  );
};

exports.default = Coffee;
module.exports = exports["default"];