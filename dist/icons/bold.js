"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bold = function Bold(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M5 20V4c0-1.1.9-2 2-2h5c3 0 5.966 1.4 6 4.919 0 1.838-.931 3.73-2.532 4.324v.135c2.033.514 3.532 2.027 3.532 4.73 0 1.022-.203 1.905-.573 2.653C17.337 20.96 15.09 22 12 22H7c-1.1 0-2-.9-2-2zm3-1h4c2.566 0 4-1.2 4-3s-1.408-3-4-3H8v6zm0-9h3c2.388 0 4-.85 4-2.55C15 5.75 13.5 5 10.996 5H8v5z"
    })
  );
};

exports.default = Bold;
module.exports = exports["default"];