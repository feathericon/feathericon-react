"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cutlery = function Cutlery(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M9 13v8a1 1 0 0 1-2 0v-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2v6h2V2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zm9-9v17a1 1 0 0 1-2 0v-6h-1a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2z"
    })
  );
};

exports.default = Cutlery;
module.exports = exports["default"];