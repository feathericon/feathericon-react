"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Play = function Play(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M6 5.912c0-.155.037-.307.107-.443.23-.44.75-.599 1.163-.354l10.29 6.088c.14.083.255.206.332.355.23.44.08.995-.332 1.239L7.27 18.885a.814.814 0 0 1-.415.115C6.383 19 6 18.592 6 18.089V5.912z" })
  );
};

exports.default = Play;
module.exports = exports["default"];