"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Umbrella = function Umbrella(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M13 20a2 2 0 1 1-2-2v-5H3a9 9 0 0 1 8-8.945V3a1 1 0 0 1 2 0v1.055A9 9 0 0 1 21 13h-8v7zm-7.71-9h13.42a7.003 7.003 0 0 0-13.42 0z"
    })
  );
};

exports.default = Umbrella;
module.exports = exports["default"];