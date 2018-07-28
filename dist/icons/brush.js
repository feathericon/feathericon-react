"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Brush = function Brush(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M5.261 16.011A2 2 0 0 0 7.99 18.74 2.5 2.5 0 0 1 5.5 21H3v-2.5a2.5 2.5 0 0 1 2.261-2.489zM19 3c1.1 0 2 1.006 2 2L8 18l-2-2L19 3z"
    })
  );
};

exports.default = Brush;
module.exports = exports["default"];