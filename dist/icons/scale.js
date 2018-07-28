"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Scale = function Scale(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M10.874 17.998A4.002 4.002 0 0 1 3 17a4.002 4.002 0 0 1 3.002-3.874A5.001 5.001 0 0 1 9.03 8.404a6 6 0 1 1 6.567 6.567 5.001 5.001 0 0 1-4.723 3.027zm.252-9.996a5 5 0 0 1 4.872 4.872A4.002 4.002 0 0 0 15 5a4.002 4.002 0 0 0-3.874 3.002zm-.253 7.995a3 3 0 1 0-2.87-2.87 4.007 4.007 0 0 1 2.87 2.87zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
    })
  );
};

exports.default = Scale;
module.exports = exports["default"];