"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rocket = function Rocket(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M14 22h-4c-.8 0-1.602-1.123-2.274-2.726L5 22l-1-1v-4l2.383-2.383C6.14 13.325 6 12.057 6 11c0-4 3-9 6-9s6 5 6 9c0 1.058-.14 2.325-.383 3.617L20 17v4l-1 1-2.726-2.726C15.602 20.877 14.801 22 14 22zm-2-2h-1.615a3.136 3.136 0 0 1-.179-.249c-.347-.532-.72-1.365-1.059-2.383C8.455 15.29 8 12.755 8 11c0-3.198 2.444-7 4-7s4 3.802 4 7c0 1.755-.455 4.291-1.147 6.368-.34 1.018-.712 1.85-1.06 2.383a3.136 3.136 0 0 1-.178.249H12zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
    })
  );
};

exports.default = Rocket;
module.exports = exports["default"];