"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Random = function Random(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M4 17a1 1 0 0 1 0-2h2l3-3-3-3H4a1.001 1.001 0 0 1 0-2h3l4 4 4-4h2V5l4 3.001L17 11V9h-1l-3 3 3 3h1v-2l4 3-4 3v-2h-2l-4-4-4 4H4z"
    })
  );
};

exports.default = Random;
module.exports = exports["default"];