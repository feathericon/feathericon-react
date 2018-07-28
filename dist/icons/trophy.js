"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Trophy = function Trophy(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M6.207 9H6a2 2 0 1 1 0-4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1a2 2 0 1 1 0 4h-.207A5.504 5.504 0 0 1 13 12.978V17h1a2 2 0 0 1 2 2v1h1a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h1v-1a2 2 0 0 1 2-2h1v-4.022A5.504 5.504 0 0 1 6.207 9zM8 4v3.5a3.5 3.5 0 0 0 3.5 3.5h1A3.5 3.5 0 0 0 16 7.5V4H8z"
    })
  );
};

exports.default = Trophy;
module.exports = exports["default"];