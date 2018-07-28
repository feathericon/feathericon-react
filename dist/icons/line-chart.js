"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LineChart = function LineChart(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M5.823 14.177a2 2 0 1 1-1-1l2.354-2.354a2 2 0 1 1 3.646 0l2.354 2.354a1.993 1.993 0 0 1 1.646 0l3.354-3.354a2 2 0 1 1 1 1l-3.354 3.354a2 2 0 1 1-3.646 0l-2.354-2.354a1.993 1.993 0 0 1-1.646 0l-2.354 2.354z"
    })
  );
};

exports.default = LineChart;
module.exports = exports["default"];