"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Artboard = function Artboard(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M6 16V8H4a1 1 0 1 1 0-2h2V4a1 1 0 1 1 2 0v2h8V4a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v8h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H8v2a1 1 0 0 1-2 0v-2H4a1 1 0 0 1 0-2h2zm2 0h8V8H8v8z"
    })
  );
};

exports.default = Artboard;
module.exports = exports["default"];