"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Angry = function Angry(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm4-3h-1.339s-.417-2.667-2.661-2.667S9.333 17 9.333 17H8a4 4 0 1 1 8 0zm-5.494-8.01a1.5 1.5 0 1 1-1.52-.416L7.33 7.97a.5.5 0 0 1 .342-.94l2.82 1.026a.5.5 0 0 1 .015.934zm2.897 0a.499.499 0 0 1 .016-.934l2.82-1.026a.5.5 0 1 1 .342.94l-1.659.603a1.5 1.5 0 1 1-1.519.417z"
    })
  );
};

exports.default = Angry;
module.exports = exports["default"];