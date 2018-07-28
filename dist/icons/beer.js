"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Beer = function Beer(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 24, height: 24 }, props),
    _react2.default.createElement("path", {
      fillRule: "evenodd",
      d: "M17 16v3c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2zM5 5v3h10V5H5zm0 5v9h10v-9H5zm4 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0v3zm4 0a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0v3zm4-7h2v5h-2V9z"
    })
  );
};

exports.default = Beer;
module.exports = exports["default"];