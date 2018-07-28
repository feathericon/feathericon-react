"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepBackward = function StepBackward(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M11 15V5H4a1 1 0 1 1 0-2h16a1 1 0 0 1 0 2h-7v10h2.24c.15 0 .297.042.421.12.35.219.444.663.211.991l-3.24 4.57a.74.74 0 0 1-.21.199.79.79 0 0 1-1.054-.198l-3.24-4.57A.685.685 0 0 1 8 15.714c0-.395.34-.715.76-.715H11zm9-6a1 1 0 0 1 0 2h-5V9h5zM8 9h1v2H4a1 1 0 0 1 0-2h4z" })
  );
};

exports.default = StepBackward;
module.exports = exports["default"];