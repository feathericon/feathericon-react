"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bug = function Bug(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M6 15H4a1 1 0 0 1 0-2h2v-1.337a1 1 0 0 1-1-.249L3.586 10A1 1 0 0 1 5 8.586l1.136 1.136a6.007 6.007 0 0 1 2.665-3.8L7.586 4.708A1 1 0 0 1 9 3.293l1.823 1.822a6.029 6.029 0 0 1 2.354 0L15 3.293a1 1 0 0 1 1.414 1.414L15.2 5.923a6.007 6.007 0 0 1 2.665 3.8L19 8.585A1 1 0 0 1 20.414 10L19 11.414a1 1 0 0 1-1 .25V13h2a1 1 0 0 1 0 2h-2c0 .483-.057.953-.165 1.404a1 1 0 0 1 1.165.182L20.414 18A1 1 0 0 1 19 19.414L17.586 18a.997.997 0 0 1-.216-.321A6 6 0 0 1 12 21a6 6 0 0 1-5.37-3.321.997.997 0 0 1-.216.321L5 19.414A1 1 0 1 1 3.586 18L5 16.586a1 1 0 0 1 1.165-.182A6.016 6.016 0 0 1 6 15zm9.874-5H8.126a4.002 4.002 0 0 1 7.748 0zm0 6a4.002 4.002 0 0 1-7.748 0h7.748z"
    })
  );
};

exports.default = Bug;
module.exports = exports["default"];