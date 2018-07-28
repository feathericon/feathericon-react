"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoteRight = function QuoteRight(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M17 11a4 4 0 1 1 4-4c0 1.473-1.333 6.14-4 14h-2l2-10zM7 11a4 4 0 1 1 4-4c0 1.473-1.333 6.14-4 14H5l2-10z"
    })
  );
};

exports.default = QuoteRight;
module.exports = exports["default"];