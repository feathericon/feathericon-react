"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Keyboard = function Keyboard(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8zm15 6v2h3v-2h-3zm-3 0v2h2v-2h-2zm-7 0v2h6v-2H7zm-3 0v2h2v-2H4zm14-3v2h2v-2h-2zm-3 0v2h2v-2h-2zm-3 0v2h2v-2h-2zm-3 0v2h2v-2H9zm-5 0v2h4v-2H4zm12-3v2h4V8h-4zm-3 0v2h2V8h-2zm-3 0v2h2V8h-2zM7 8v2h2V8H7zM4 8v2h2V8H4z"
    })
  );
};

exports.default = Keyboard;
module.exports = exports["default"];