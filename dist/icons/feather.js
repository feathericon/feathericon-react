"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Feather = function Feather(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M5.993 17.877c.004.04.007.081.007.123v3a1 1 0 0 1-2 0v-3C4 9.163 11.163 2 20 2c0 8.162-6.111 14.896-14.007 15.877zm.174-2.044A14.01 14.01 0 0 0 17.833 4.167 14.01 14.01 0 0 0 6.167 15.833z"
    })
  );
};

exports.default = Feather;
module.exports = exports["default"];