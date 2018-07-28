"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Key = function Key(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", { d: "M11.9 11H22v4.004c0 .546-.45.996-1 .996s-1-.45-1-.996V13h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-4.1A5.002 5.002 0 0 1 2 12a5 5 0 0 1 9.9-1zM7 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" })
  );
};

exports.default = Key;
module.exports = exports["default"];