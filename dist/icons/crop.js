"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Crop = function Crop(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M16 20v-2H8c-1.1 0-2-.9-2-2V8H4a1 1 0 1 1 0-2h2V4a1 1 0 1 1 2 0v2h9l2-2 1 1-2 2v9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0zm0-4V9l-7 7h7zM8 8v7l7-7H8z"
    })
  );
};

exports.default = Crop;
module.exports = exports["default"];