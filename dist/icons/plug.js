"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plug = function Plug(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M17 11v2h3a1 1 0 0 1 0 2h-3.268A2 2 0 0 1 15 16h-3a4.002 4.002 0 0 1-3.876-3.008A1.01 1.01 0 0 1 8 13H4a1 1 0 0 1 0-2h4c.042 0 .083.003.124.008A4.002 4.002 0 0 1 12 8h3a2 2 0 0 1 1.732 1H20a1 1 0 0 1 0 2h-3z"
    })
  );
};

exports.default = Plug;
module.exports = exports["default"];