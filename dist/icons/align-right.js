"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlignRight = function AlignRight(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M17 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0v18zM11 5a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4h6zm0 7a2 2 0 1 1 0 4H7a2 2 0 1 1 0-4h4z"
    })
  );
};

exports.default = AlignRight;
module.exports = exports["default"];