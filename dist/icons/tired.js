"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tired = function Tired(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM8.2 10L7 8.8l.8-.8L9 9.2 10.2 8l.8.8L9.8 10l1.2 1.2-.8.8L9 10.8 7.8 12l-.8-.8L8.2 10zm6 0L13 8.8l.8-.8L15 9.2 16.2 8l.8.8-1.2 1.2 1.2 1.2-.8.8-1.2-1.2-1.2 1.2-.8-.8 1.2-1.2zM12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" })
  );
};

exports.default = Tired;
module.exports = exports["default"];