"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Headphone = function Headphone(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M19 13a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-9a5 5 0 0 0-10 0v9a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2v-3a7 7 0 1 1 14 0v3z"
    })
  );
};

exports.default = Headphone;
module.exports = exports["default"];