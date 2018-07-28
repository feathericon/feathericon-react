"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BarChart = function BarChart(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M5 19h15a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v7zm5-4a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0v9zm2 0V8a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0zm4-11a1 1 0 0 1 2 0v11a1 1 0 0 1-2 0V4z"
    })
  );
};

exports.default = BarChart;
module.exports = exports["default"];