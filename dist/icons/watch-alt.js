"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WatchAlt = function WatchAlt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M15 6h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2zM8 8v8h8V8H8z"
    })
  );
};

exports.default = WatchAlt;
module.exports = exports["default"];