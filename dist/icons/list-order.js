"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListOrder = function ListOrder(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M10 4h10a1 1 0 0 1 0 2H10a1 1 0 1 1 0-2zm0 7h10a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2zm0 7h10a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2zM4.5 4a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V4.015L4.5 4zm0 6h2c.28 0 .5.22.5.5v.5l-1.7 2h1.2c.28 0 .5.22.5.5s-.224.5-.5.5h-2c-.28 0-.5-.22-.5-.5V13l1.7-2H4.5c-.28 0-.5-.22-.5-.5s.199-.5.5-.5zm2 11h-2a.5.5 0 1 1 0-1H6v-.5H4.5a.5.5 0 1 1 0-1H6V18H4.5a.5.5 0 1 1 0-1h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z"
    })
  );
};

exports.default = ListOrder;
module.exports = exports["default"];