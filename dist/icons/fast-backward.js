"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FastBackward = function FastBackward(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M5 12c0-.107.023-.216.072-.316a.617.617 0 0 1 .221-.253l6.86-4.35c.276-.174.623-.06.775.254a.725.725 0 0 1 .072.316V12c0-.106.023-.215.072-.315a.617.617 0 0 1 .221-.253l6.86-4.35c.276-.174.623-.06.775.254a.725.725 0 0 1 .072.316v8.698c0 .36-.255.651-.57.651a.516.516 0 0 1-.277-.082l-6.86-4.349A.671.671 0 0 1 13 12v4.35c0 .36-.255.651-.57.651a.516.516 0 0 1-.277-.082l-6.86-4.349A.671.671 0 0 1 5 12v4c0 .552-.5 1-1 1s-1-.448-1-1V8a1 1 0 1 1 2 0v4z"
    })
  );
};

exports.default = FastBackward;
module.exports = exports["default"];