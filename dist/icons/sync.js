"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sync = function Sync(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M6.876 15.124A6.002 6.002 0 0 0 17.658 14h2.09a8.003 8.003 0 0 1-14.316 2.568L3 19v-6h6l-2.124 2.124zm10.249-6.249A6.004 6.004 0 0 0 6.34 10H4.25a8.005 8.005 0 0 1 14.32-2.57L21 5v6h-6l2.125-2.125z"
    })
  );
};

exports.default = Sync;
module.exports = exports["default"];