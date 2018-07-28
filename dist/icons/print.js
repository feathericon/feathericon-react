"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Print = function Print(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M7 11V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7h1a2 2 0 0 1 2 2v3c0 1.1-.9 2-2 2h-1v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2H6c-1.1 0-2-.9-2-2v-3a2 2 0 0 1 2-2h1zm2-7v7h6V4H9zm5 9v2h2v-2h-2zm-5 5v2h6v-2H9z"
    })
  );
};

exports.default = Print;
module.exports = exports["default"];