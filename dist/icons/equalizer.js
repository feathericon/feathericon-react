"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Equalizer = function Equalizer(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M13.17 7a3.001 3.001 0 0 1 5.66 0H21a1 1 0 0 1 0 2h-2.17a3.001 3.001 0 0 1-5.66 0H3a1 1 0 1 1 0-2h10.17zm-8 8a3.001 3.001 0 0 1 5.66 0H21a1 1 0 0 1 0 2H10.83a3.001 3.001 0 0 1-5.66 0H3a1 1 0 0 1 0-2h2.17zM16 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    })
  );
};

exports.default = Equalizer;
module.exports = exports["default"];