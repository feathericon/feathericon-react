"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Building = function Building(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M6 2h12a2 2 0 0 1 2 2v18H4V4a2 2 0 0 1 2-2zm0 18h4v-4h4v4h4V4H6v16zm7-14h3v3h-3V6zm-5 5h3v3H8v-3zm5 0h3v3h-3v-3zM8 6h3v3H8V6z" })
  );
};

exports.default = Building;
module.exports = exports["default"];