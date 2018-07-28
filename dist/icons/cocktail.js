"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cocktail = function Cocktail(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M13 19h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3v-6.75L4.8 7.6A2 2 0 0 1 4 6V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-.8 1.6L13 12.25V19zM6 5v1l6 4 6-4V5H6z" })
  );
};

exports.default = Cocktail;
module.exports = exports["default"];