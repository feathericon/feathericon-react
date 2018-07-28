"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Underline = function Underline(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M17 21H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm1-17v7a6 6 0 1 1-12 0V4a1 1 0 1 1 2 0v7c0 2.21 1.79 4 4 4s4-1.79 4-4V4a1 1 0 0 1 2 0z"
    })
  );
};

exports.default = Underline;
module.exports = exports["default"];