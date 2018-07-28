"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mention = function Mention(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M21 12a3.5 3.5 0 0 1-5.909 2.539A4 4 0 1 1 14 8.535V8h2v4a1.5 1.5 0 0 0 3 0 7 7 0 1 0-3.392 6h3.1A9 9 0 1 1 21 12zm-9 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" })
  );
};

exports.default = Mention;
module.exports = exports["default"];