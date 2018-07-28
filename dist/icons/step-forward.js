"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepForward = function StepForward(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M13 9v10h7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h7V9H8.76C8.34 9 8 8.68 8 8.285a.68.68 0 0 1 .128-.396l3.24-4.57a.79.79 0 0 1 1.054-.199.74.74 0 0 1 .21.198l3.24 4.57a.689.689 0 0 1-.21.992.795.795 0 0 1-.422.12H13zm7 4a1 1 0 0 1 0 2h-5v-2h5zM8 13h1v2H4a1 1 0 0 1 0-2h4z" })
  );
};

exports.default = StepForward;
module.exports = exports["default"];