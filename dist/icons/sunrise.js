"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sunrise = function Sunrise(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M21 15H3a1 1 0 0 1 0-2h1a8 8 0 1 1 16 0h1a1 1 0 0 1 0 2zm-3 4H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zM6 13h12a6 6 0 1 0-12 0z" })
  );
};

exports.default = Sunrise;
module.exports = exports["default"];