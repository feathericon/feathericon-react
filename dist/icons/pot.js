"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pot = function Pot(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M20 11v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2h-1zM6 11v7h12v-7H6zm5-5V5a1 1 0 0 1 2 0v1h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h6z"
    })
  );
};

exports.default = Pot;
module.exports = exports["default"];