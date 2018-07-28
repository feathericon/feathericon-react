"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Megaphone = function Megaphone(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M4 8l.04 2.117L19.5 6.065A1.997 1.997 0 0 1 22 8v8a1.995 1.995 0 0 1-2.5 1.934L4 13.882V16a1 1 0 0 1-2 0V8a1 1 0 1 1 2 0zm2 3.664v.68L20 16V8L6 11.664z" })
  );
};

exports.default = Megaphone;
module.exports = exports["default"];