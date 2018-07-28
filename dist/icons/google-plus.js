"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GooglePlus = function GooglePlus(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M8.364 11.455h6.009c.054.318.1.636.1 1.054 0 3.636-2.437 6.218-6.11 6.218A6.359 6.359 0 0 1 2 12.364 6.359 6.359 0 0 1 8.364 6c1.718 0 3.154.627 4.263 1.664L10.9 9.327c-.473-.454-1.3-.982-2.536-.982-2.173 0-3.946 1.8-3.946 4.019 0 2.218 1.773 4.018 3.946 4.018 2.518 0 3.463-1.81 3.609-2.746h-3.61v-2.181zm13.636 0v1.818h-1.818v1.818h-1.818v-1.818h-1.819v-1.818h1.819V9.636h1.818v1.819H22z"
    })
  );
};

exports.default = GooglePlus;
module.exports = exports["default"];