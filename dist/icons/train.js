"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Train = function Train(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M15 18.932c-.966.068-2.002.068-3.04.068-1.014 0-2.021 0-2.96-.063V21H6v-1l.711-1.423C5.09 18.106 4 17.11 4 15V7c0-4 3.955-4 8-4s8 0 8 4v8c0 2.092-1.095 3.09-2.717 3.566L18 20v1h-3v-2.068zM7 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM6 6v6h12V6H6z"
    })
  );
};

exports.default = Train;
module.exports = exports["default"];