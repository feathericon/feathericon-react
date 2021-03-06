"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M11.874 11h.252c.444-1.725 2.01-3 3.874-3h2a4 4 0 1 1 0 8h-2a4.002 4.002 0 0 1-3.874-3h-.252A4.002 4.002 0 0 1 8 16H6a4 4 0 1 1 0-8h2a4.002 4.002 0 0 1 3.874 3zm-2.124.031A2 2 0 0 0 8 10H6a2 2 0 1 0 0 4h2a2 2 0 0 0 1.75-1.031 1 1 0 0 1 0-1.938zM14 12.97A2 2 0 0 0 15.75 14h2a2 2 0 1 0 0-4h-2A2 2 0 0 0 14 11.031a1 1 0 0 1 0 1.938z"
    })
  );
};

exports.default = Link;
module.exports = exports["default"];