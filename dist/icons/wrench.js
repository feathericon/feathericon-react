"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrench = function Wrench(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M14 11.584V20a2 2 0 1 1-4 0v-8.416a5.001 5.001 0 0 1 2.391-9.569L10 6l4 2 2.215-3.691A5.001 5.001 0 0 1 14 11.584z"
    })
  );
};

exports.default = Wrench;
module.exports = exports["default"];