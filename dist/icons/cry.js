"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cry = function Cry(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M9.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5.5 4a3 3 0 0 0-6 0h1s.317-2 2-2 1.996 2 1.996 2H15zm-.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4-7a1 1 0 0 0 1-1c0-.368-.333-1.035-1-2-.667.965-1 1.632-1 2a1 1 0 0 0 1 1z"
    })
  );
};

exports.default = Cry;
module.exports = exports["default"];