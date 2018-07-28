"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Italic = function Italic(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M8.97 19l3.75-14H10a1 1 0 1 1 0-2h8a1 1 0 0 1 0 2h-3.208L11.04 19H14a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h2.97z"
    })
  );
};

exports.default = Italic;
module.exports = exports["default"];